from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Context
from django.conf import settings
import re
from django.db.models import Q


class Mailer:
    redington_recipients = {
        'user_ids': [],
        'emails': []
    }

    @classmethod
    def send_mail(cls, subject, recipients, template_name, template_data, attachements=None,
                  attachments_full_path=None, data_attachments=list(), cc_to=[]):
        """" Sends email for the provided details """
        '''Attachment is Optional Parameters. Attachements should be dist its contains url and extenstions'''

        from_email = 'cloudsupport@redington.co.in'
        html = get_template(template_name)
        assigning_values = Context(template_data)
        html_content = html.render(template_data)
        if recipients and len(recipients) > 0:
            recipients = list(set(recipients))
            if None in recipients:
                recipients.remove(None)

        try:
            mail = EmailMessage(subject, html_content, to=recipients, from_email=from_email, cc=cc_to)
            mail.content_subtype = 'html'
            if attachements is not None:
                mail.attach_file(settings.BASE_DIR + '/' + attachements['url'], attachements['extenstions'])
            elif attachments_full_path is not None:
                mail.attach_file(attachments_full_path)

            """ Attaching data as files into email """
            for attachment in data_attachments:
                mail.attach(filename=attachment['filename'],
                            content=attachment['content'].decode('utf-8'),
                            mimetype=attachment['mimetype'])

            mail.send(fail_silently=True)
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponse(True)

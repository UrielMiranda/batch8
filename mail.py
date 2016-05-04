import smtplib

gmail_user = 'urielnovoa@gmail.com'  
gmail_password = 'Rockwell76'

from = gmail_user  
to = ['nekro.rockwell@gmail.com', 'urielnovoa@gmail.com']  
subject = 'Meessage with python'  
body = 'Hey, what's up?\n\n- You'

email_text = """\  
From: %s  
To: %s  
Subject: %s

%s
""" % (from, ", ".join(to), subject, body)

try:  
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()
    server.login(gmail_user, gmail_password)
    server.sendmail(from, to, email_text)
    server.close()

    print 'Email sent!'
except:  
    print 'Something went wrong...'

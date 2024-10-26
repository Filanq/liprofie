# -*- coding: utf-8 -*-
import os
import sys
import platform
#путь к проекту, там где manage.py
sys.path.insert(0, '/home/c/cr63609/public_html/dostopremL/django1')
#путь к фреймворку, там где settings.py
sys.path.insert(0, '/home/c/cr63609/public_html/dostopremL/django1/django1')
#путь к виртуальному окружению myenv
sys.path.insert(0, '/home/c/cr63609/public_html/dostopremL/venv/lib/python{0}/site-packages'.format(platform.python_version()[0:3]))
#sys.path.insert(0, '/home/c/cx53558/newsite/myenv/lib/python3.6/site-packages')
os.environ["DJANGO_SETTINGS_MODULE"] = "django1.settings"

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
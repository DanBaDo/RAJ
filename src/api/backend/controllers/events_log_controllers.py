from math import ceil
from flask import jsonify, request

USER_LOGS_MOCKUP = [
  {
    "icon": "user",
    "title": "Tú",
    "description": "editar perfil",
    "time": "12:45",
    "alert": "false",
  },
  {
    "icon": "casino",
    "title": "Casino Royal",
    "description": "intento de acceso",
    "time": "mie",
    "alert": "true",
  },
  {
    "icon": "online",
    "title": "Poker Fight",
    "description": "intento de acceso",
    "time": "7 May",
    "alert": "true",
  },
  {
    "icon": "online",
    "title": "Bet Hero",
    "description": "intento de acceso",
    "time": "2 May",
    "alert": "true",
  },
  {
    "icon": "user",
    "title": "Tú",
    "description": "editar perfil",
    "time": "30/12/2021",
    "alert": "false",
  },
  {
    "icon": "user",
    "title": "Tú",
    "description": "inicio de sesión",
    "time": "30/12/2021",
    "alert": "false",
  },
  {
    "icon": "user",
    "title": "Tú",
    "description": "editar perfil",
    "time": "11/10/2021",
    "alert": "false",
  },
  {
    "icon": "casino",
    "title": "Casino Royal",
    "description": "intento de acceso",
    "time": "01/08/2021",
    "alert": "true",
  },
  {
    "icon": "online",
    "title": "Poker Fight",
    "description": "intento de acceso",
    "time": "04/01/2020",
    "alert": "true",
  },
  {
    "icon": "online",
    "title": "Bet Hero",
    "description": "intento de acceso",
    "time": "13/12/2019",
    "alert": "true",
  },
  {
    "icon": "user",
    "title": "Tú",
    "description": "editar perfil",
    "time": "30/12/2019",
    "alert": "false",
  },
  {
    "icon": "user",
    "title": "Tú",
    "description": "inicio de sesión",
    "time": "30/12/2019",
    "alert": "false",
  },
]

COMPANY_LOGS_MOCKUP = [
  {
    "icon": "user",
    "title": "Juan Peláez",
    "description": "editar perfil",
    "time": "12:45",
    "alert": "false",
  },
  {
    "icon": "user",
    "title": "Juan Peláez",
    "description": "inicio de sesión",
    "time": "12:43",
    "alert": "false",
  },
  {
    "icon": "casino",
    "title": "Casino Ferrolano",
    "description": "creación de llave API",
    "time": "7 May",
    "alert": "true",
  },
  {
    "icon": "user",
    "title": "Juan Peláez",
    "description": "inicio de sesión",
    "time": "12:43",
    "alert": "false",
  },
  {
    "icon": "online",
    "title": "Poker Fight",
    "description": "instalación de llave API",
    "time": "01/08/2021",
    "alert": "true",
  },
  {
    "icon": "online",
    "title": "Poker Fight",
    "description": "creación de llave API",
    "time": "01/08/2020",
    "alert": "true",
  },
  {
    "icon": "user",
    "title": "Tú",
    "description": "inicio de sesión",
    "time": "12:43",
    "alert": "false",
  },
]

PAGE_SIZE = 5

def get_events(page, role):
  if role == "RPR": logs = COMPANY_LOGS_MOCKUP
  else: logs = USER_LOGS_MOCKUP
  return jsonify({
    "data": logs[page*PAGE_SIZE:(page+1)*PAGE_SIZE],
    "pages": ceil(len(logs)/PAGE_SIZE)
  }), 200
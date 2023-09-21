# Chatbot en React

Este proyecto es un chatbot simple construido en React que utiliza un servicio de AI para responder a las preguntas de los usuarios. El chatbot se comunica con Dialogflow para proporcionar respuestas a las consultas de los usuarios.

## Requisitos

1. **Interfaz de Usuario:**
   - La aplicación cuenta con un área donde se muestran los mensajes del chatbot y del usuario.
   - Un campo de texto permite a los usuarios escribir sus mensajes.
   - Un botón de "Enviar" permite a los usuarios enviar sus mensajes al chatbot.

2. **Comunicación con Dialogflow:**
   - Utiliza el token de acceso de Dialogflow para realizar llamadas directas desde el frontend.
   - La aplicación envía el mensaje del usuario a Dialogflow y muestra la respuesta del chatbot en la interfaz.

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar los siguientes detalles:

- Reemplazar `YOUR_PROJECT_ID` con el ID de tu proyecto de Dialogflow.
- Reemplazar `YOUR_SESSION_ID` con el ID de sesión deseado.
- Agregá tu token de acceso de Dialogflow en el encabezado de las solicitudes.

## Ejecución

Para ejecutar la aplicación, tenes que seguir estos pasos:

1. Clona este repositorio a tu sistema local.
2. Instala las dependencias utilizando `npm install` las cuales son:
    *Bootstrap
3. Inicia la aplicación con `npm start`.

La aplicación se ejecutará en tu navegador web.

## Personalización

Si deseas personalizar la apariencia o el comportamiento del chatbot, puedes hacerlo mediante la edición de los archivos en la carpeta `src`. Puedes ajustar los estilos en `app.css` y modificar la lógica del chatbot en `Chat.js`.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de abrir problemas (issues) o enviar solicitudes de extracción (pull requests) en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Para obtener más detalles, consulta el archivo [LICENSE](LICENSE).

---

Puedes personalizar este README según las necesidades específicas de tu proyecto. Asegúrate de proporcionar detalles claros sobre cómo configurar y ejecutar la aplicación, así como cualquier otro detalle relevante que los usuarios puedan necesitar.
# tienda-libros-final
# Índice

1. [Propuesta](#propuesta)
2. [Desarrollo frontend](#desarrollo-frontend)
3. [Desarrollo backend](#desarrollo-backend)
4. [Implementación](#implementación)
5. [Presentación de Proyecto](#presentación-de-proyecto)
6. [Conclusiones](#conclusiones)

## Desarrollo Frontend

Para el segundo hito de nuestro proyecto, nos enfocamos en el desarrollo de la aplicación cliente utilizando React. A continuación, detallamos los pasos que seguimos:

1. **Creación del Proyecto**: Iniciamos creando un nuevo proyecto en React, asegurándonos de incluir las dependencias adecuadas que se alinearan con el diseño y temática definida en nuestra propuesta inicial.

2. **Uso de Bootstrap para el Manejo de Layout y Estilos**: Utilizamos Bootstrap para el manejo de layout y estilos, asegurando una apariencia atractiva y una estructura coherente en nuestra aplicación.

3. **Uso de Componentes y Hooks**: Implementamos una arquitectura basada en componentes para promover la reutilización de código y una clara separación de secciones en nuestra aplicación. Además, integramos los hooks necesarios para gestionar el ciclo de vida y el estado local de los componentes.

4. **Navegación con React Router**: Empleamos React Router para la gestión de la navegación entre las diferentes vistas de nuestra aplicación. Esto nos permitió establecer rutas claras y estructuradas, facilitando la experiencia de usuario al permitir una navegación fluida.

5. **Gestión de Estado Global con Context API**: Para mantener un estado coherente en toda la aplicación, optamos por utilizar Context API de React. Esta herramienta nos permitió gestionar de manera eficiente el estado global de la aplicación, asegurando una comunicación efectiva entre componentes sin necesidad de pasar props de manera excesiva.

6. **Preparación para el Consumo de Datos**: Finalmente, nos aseguramos de preparar nuestra aplicación para el consumo de datos, siguiendo el contrato definido en nuestra propuesta inicial. Esto implicó configurar las solicitudes de datos hacia el backend de acuerdo con las especificaciones establecidas, garantizando una integración sin problemas entre el frontend y el backend de nuestra aplicación.

Con estos pasos, logramos desarrollar un frontend robusto y altamente funcional que cumplió con los objetivos planteados en nuestra propuesta inicial.


## Desarrollo Backend

Durante el tercer hito de nuestro proyecto, nos enfocamos en el desarrollo del backend utilizando Express. A continuación, describimos los pasos que seguimos para alcanzar nuestros objetivos:

1. **Creación del Proyecto con Express**: Iniciamos creando un nuevo proyecto utilizando Express, un framework de Node.js ampliamente utilizado para construir aplicaciones web y APIs.

2. **Instalación de Dependencias**: Instalamos las dependencias descritas en nuestra propuesta, incluyendo cors, dotenv y otras dependencias necesarias para el correcto funcionamiento de nuestro backend.

3. **Creación de Rutas con react-router-dom**: Implementamos las diferentes rutas utilizando react-router-dom, siguiendo el esquema definido en nuestra propuesta. Esto nos permitió estructurar nuestra API de manera coherente y accesible.

4. **Levantamiento de la API REST**: Implementamos una API REST capaz de gestionar los datos de nuestra base de datos PostgreSQL, utilizando la dependencia PG para interactuar con la base de datos. Además, utilizamos bcryptjs para el manejo seguro de contraseñas de usuarios, garantizando la protección de los datos sensibles.

5. **Implementación de Autenticación y Autorización con JWT**: Para garantizar la seguridad de nuestra aplicación, implementamos un sistema de autenticación y autorización de usuarios utilizando JSON Web Tokens (JWT). Esto nos permitió proteger nuestros endpoints y controlar el acceso a los recursos protegidos de manera eficiente.

6. **Pruebas de Rutas con Supertest y Thunder Client**: Utilizamos el paquete supertest para realizar pruebas a diferentes rutas de nuestra API REST, asegurándonos de que funcionen correctamente y respondan adecuadamente a las solicitudes. Además, empleamos la extensión Thunder Client para realizar pruebas adicionales de las diferentes rutas de nuestra API REST, garantizando su correcto funcionamiento.

Con estos pasos, logramos desarrollar un backend sólido y confiable que cumplió con los requisitos de nuestra aplicación y facilitó una comunicación eficiente entre el frontend y el backend.


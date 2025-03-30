# Sistema de Gestión de Eventos

Este proyecto es un sistema basado en microservicios para la gestión de eventos, asistentes, usuarios y notificaciones. Cada funcionalidad está implementada como un microservicio independiente.

## 📌 Tecnologías Utilizadas

- **Spring Boot** - Framework para desarrollar microservicios.
- **Spring Cloud** - Conjunto de herramientas para microservicios.
- **Eureka** - Servicio de descubrimiento de microservicios.
- **Feign** - Cliente HTTP declarativo para comunicación entre servicios.
- **API Gateway** - Para enrutar solicitudes a los microservicios.
- **MySQL** - Base de datos relacional para almacenar información.
- **Docker** - Para contenerización y despliegue.

---

## 📁 Estructura del Proyecto

```plaintext
📂 gestion-eventos
│── 📂 asistentes-servicio      # Microservicio para gestionar asistentes
│── 📂 eureka-servicio          # Servidor Eureka para descubrimiento de servicios
│── 📂 evento-commons           # Clases comunes relacionadas con eventos
│── 📂 eventos-servicio         # Microservicio para gestionar eventos
│── 📂 gateway-servicio         # API Gateway para enrutar solicitudes
│── 📂 notificaciones-servicio  # Microservicio para enviar notificaciones
│── 📂 oauth-servicio           # Microservicio para autenticación y autorización
│── 📂 usuario-commons          # Clases comunes relacionadas con usuarios
│── 📂 usuario-servicio         # Microservicio para gestionar usuarios
```

---

## ⚙️ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes requisitos:

- [Java 17+](https://adoptium.net/)
- [Maven 3.9.9+](https://maven.apache.org/download.cgi)
- [MySQL](https://dev.mysql.com/downloads/)
- [Docker](https://www.docker.com/) *(Opcional para despliegue con contenedores)*

---

## 🚀 Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/gestion-eventos.git
cd gestion-eventos
```

### 2️⃣ Configurar la base de datos MySQL

Crea una base de datos en MySQL con el siguiente comando:
```sql
CREATE DATABASE gestion_eventos;
```

Configura las credenciales en el archivo `application.properties` de cada microservicio que utilice base de datos:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/gestion_eventos
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
```

### 3️⃣ Ejecutar los microservicios

Cada microservicio se puede ejecutar individualmente con:

```bash
mvn spring-boot:run
```

Para iniciar todos los servicios usando Docker Compose:
```bash
docker-compose up -d
```

---

## 📡 Servicios y Puertos

| Microservicio          | Descripción                           | Puerto  |
|------------------------|---------------------------------------|---------|
| `eureka-servicio`      | Servidor de descubrimiento           | `8761`  |
| `gateway-servicio`     | API Gateway                          | `8080`  |
| `asistentes-servicio`  | Gestión de asistentes                | `8081`  |
| `eventos-servicio`     | Gestión de eventos                   | `8082`  |
| `usuario-servicio`     | Gestión de usuarios                  | `8083`  |
| `notificaciones-servicio` | Envío de notificaciones           | `8084`  |
| `oauth-servicio`       | Autenticación y autorización         | `8085`  |

---

## 🏠 Diagrama de Arquitectura

```plaintext
          +--------------------+
          |   Cliente / UI     |
          +--------------------+
                   |
                   ▼
          +----------------+
          | API Gateway     |  <── Enrutamiento de solicitudes
          | (Zuul)          |
          +----------------+
                   |
    ---------------------------------
    |        |        |        |     |
    ▼        ▼        ▼        ▼     ▼
+------------+------------+------------+------------+------------+
| Asistentes | Eventos    | Usuarios   | Notif.     | OAuth      |
| Servicio  | Servicio   | Servicio   | Servicio   | Servicio   |
+------------+------------+------------+------------+------------+
         |        |        |        |     
         ▼        ▼        ▼        ▼    
+--------------------------------------+
|        Base de Datos (MySQL)        |
+--------------------------------------+
```

---

## 📌 Comandos Ú tiles

### Compilar el proyecto
```bash
mvn clean install
```

### Ejecutar un microservicio
```bash
cd asistentes-servicio
mvn spring-boot:run
```

### Construir y ejecutar con Docker
```bash
docker build -t gestion-eventos .
docker run -p 8080:8080 gestion-eventos
```

### Detener todos los contenedores
```bash
docker-compose down
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Realiza un **fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz un commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-feature`).
5. Abre un **Pull Request**.

---

## 📛 Licencia

Este proyecto está bajo la [Licencia Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).

---

¡Gracias por tu interés en el **Sistema de Gestión de Eventos**! 🎉🚀

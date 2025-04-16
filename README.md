# Product Management System

Este es un sistema de gestión de productos y categorías desarrollado como práctica personal. Actualmente permite realizar operaciones básicas de **alta, baja, modificación y consulta** (CRUD) sobre productos y sus respectivas categorías. En el futuro se planea ampliar sus funcionalidades.

## Tecnologías utilizadas

### Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)
- [SQLAlchemy](https://docs.sqlalchemy.org/)
- [MySQL Connector/Python](https://dev.mysql.com/doc/connector-python/en/)
- [Pydantic](https://docs.pydantic.dev/)
- [python-dotenv](https://saurabh-kumar.com/python-dotenv/)

### Frontend (en desarrollo)
- **JavaScript**
- **React**

## Funcionalidades actuales

- Crear, leer, actualizar y eliminar productos
- CRUD de categorías asociadas a los productos
- Organización de productos por categoría

## Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/JuanBaez77/product-management-system.git
cd product-management-system
```

### 2. Crear el archivo ```.env```
En la raíz del proyecto, creá un archivo ```.env``` con las variables de entorno necesarias para conectarte a tu base de datos MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=products_db

```

### 3. Instalar dependencias
Se recomienda usar un entorno virtual. Luego instalá los requerimientos con:

```bash
pip install -r requirements.txt

```

### 4. Iniciar el servidor
Una vez configurado todo, levantá el servidor con:

```bash
uvicorn main:app --reload
```

### 5. Acceder a la API
Podés probar los endpoints desde la documentación interactiva de FastAPI en:
http://localhost:8000/docs

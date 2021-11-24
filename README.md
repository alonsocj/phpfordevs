# phpfordevs
## Crear archivo .env (En la misma carpeta del repositorio)
en el archivo .env se define el puerto como variable de entorno solo es necesario definirlo de la siguiente manera port ejemplo

 `PORT = 4000`

## COMANDOS DEL PROYECTO EN DESARROLLO

### Al clonar el repositorio

Cuando se clona el repositorio la primera vez o en alguna instancia nueva, es necesario instalar los packetes de dependencia para ello se utiliza.

    npm i

### Iniciar la base de datos desde docker (En la misma carpeta del repositorio)

    docker-compose up -d

### Durante el desarrollo del proyecto solo es necesesario utilizar el siguiente comando
    npm run dev

### Cerrar los contenedores de docker (En la misma carpeta del repositorio)

    docker-compose down

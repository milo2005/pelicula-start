#Angular Start

Proyecto base para iniciar el desarrollo en **Angular 2.0**.

- [Requerimientos](#requermientos)
- [Instalacion](#instalacion)
- [Ejecutar](#ejecutar)
- [Entorno de desarrollo](#entorno-de-desarrollo)

##Requerimientos
A continuación se describe los componentes necesarios y la preparación del entorno de desarrollo.

### NodeJS
Es necesario la instalación de *NodeJS* y *NPM* para la ejecución de scripts e instalación de dependencias.

[Descargar Instalador](https://nodejs.org/en/)

### Preparación de entorno
A continuación se describe la preparación del entrono con Atom.

 - Instalar Atom
    [Instalador](http://atom.io/)
 - Abrir Atom e ir a **File>Settings>install**
 - Instalar el paquete **atom-typescript** para la compilación y deteccion de errores en *TypeScript*.
 - Instalar el paquete **angular-2-typescript-snippets** para los atajos de *Angular 2*.
 - Reinicar Atom.

##Instalacion
Seguir los siguientes pasos para instalar y preparar el proyecto **Angular 2**.

  - Clonar proyecto.

    ```
    git clone https://github.com/milo2005/angular-start.git
    ```

  - Abrir la consola de NodeJS, ubicarse dentro de la carpeta e instalar las dependencias

    ```
    npm install
    ```
  - Reiniciar repositorio *GIT*.
    - Eliminar el repositorio actual
      ```
      rm -rf .git
      ```
    - Crear nuevo repositorio
      ```
      git init
      
      git add .
      
      git commit -m "Project Created"
      ```
      
##Ejecutar
En una consola de NodeJS

```
npm start
```

##Entorno de desarrollo
El entorno de desarrollo puede ser Atom o Visual Studio Code, a continuacion se describe los pasos para el desarrollo con Visual Studio Code.

 - Instalar Visual Studio Code 
    [Instalador](https://code.visualstudio.com)

 - Abrir la consola de NodeJS y ejecutar el comando :
    ```
    npm install typescript -g
    ```
 - Ir a *Archivo* > *Preferencias* > *configuracion de usuario* y agregar el siguiente codigo en el panel de la derecha
 
    ```JSON
    "files.exclude": {
        "**/.git": true,
        "**/.vscode": true,
        "**/.DS_Store": true,
        "**/*.js": {"when": "$(basename).ts"},
        "**/*.js.map": true
    }
    ```
 

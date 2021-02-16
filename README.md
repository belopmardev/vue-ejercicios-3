# Ejercicios prácticos con VUE 3

En este repositorio encontrarás algunos de mis ejercicios para desarrollar una Single Page Application (SPV) con **VUE**. Además de diferentes vistas, también se incluyen componentes especialmente desarrollados para este ejercicio:

* Un componente **DNI** con etiqueta personalizable que valida si un DNI o un NIF son correctos
* Un componente **Contador** con el que podemos calcular el incremento o decrimento de 2, 5 o 10 del total del contador
* Un componente **Tabla** que nos muestra las prendas y calcula el importe de manera automática
* Un componente **Tabla Input** que nos permite introducir nuevas prendas y que calcula el importe de manera automática
* Un componente **Tabla Editable** que nos permite introducir nuevas prendas y modificar los datos de las ya existentes y que calcula el importe de manera automática

## Instrucciones para desplegarlo en la máquina local

Para poder tener una copia del proyecto en tu máquina local es necesario que sigas las siguientes indicaciones para la recuperación de la carpeta "node_modules" y las dependencias del proyecto y compilar en desarrollo o producción.

### Configuración del proyecto
```
npm install
```

#### Compilación y hot-reloads para desarrollo
```
npm run serve
```

#### Compilación y minifies para producción
```
npm run build
```

#### Configuración personalizada
Consultar [Configuration Reference](https://cli.vuejs.org/config/).

## Construido con
[Vue.js](http://vuejs.org) -- Framework de JavaScript de código abierto para interfaces de usuario y SPA

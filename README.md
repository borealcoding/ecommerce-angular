# Shopper - ecommerce

[![forthebadge](/img/made-with-angular.svg)](https://forthebadge.com)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!--  generated with [DocToc](https://github.com/thlorenz/doctoc) -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Index

- [Shopper - ecommerce](#shopper---ecommerce)
  - [Descripción](#descripci%C3%B3n)
  - [Instalación](#instalaci%C3%B3n)
  - [Funcionamiento](#funcionamiento)
    - [Tienda](#tienda)
    - [Nosotros](#nosotros)
    - [Lista de artículos](#lista-de-art%C3%ADculos)
    - [Información del artículo](#informaci%C3%B3n-del-art%C3%ADculo)
  - [Observaciones](#observaciones)
    - [Tienda](#tienda-1)
    - [Lista de artículos](#lista-de-art%C3%ADculos-1)
    - [Información del artículo](#informaci%C3%B3n-del-art%C3%ADculo-1)
  - [Estructura de los directorios](#estructura-de-los-directorios)
    - [Directorio raíz](#directorio-ra%C3%ADz)
    - [Directorio app/](#directorio-app)
    - [Observaciones](#observaciones-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Descripción

En esta práctica se realiza una **Single Page Application (SPA)** que se encarga de gestionar un ecommerce.
Para su realización, se han puesto en práctica las bases de Angular, haciendo uso de Componentes, Servicios, Pipes, Enrutamiento y Peticiones HTTP "mockeadas".

Se ha recurrido a Bootstrap y SCSS para el diseño.

## Instalación

Para instalar el proyecto y cargar las dependencias del *node_modules*, se debe de ejecutar ``npm install``.

Una vez instalado, ejecutar ``ng serve -o`` para iniciar el servidor.

## Funcionamiento

A continuación, mediante capturas de pantalla, se explicará paso a paso el funcionamiento de la aplicación.

### Tienda

![tienda](/img/tienda-01.png)

Nos encontramos en la parte principal de la SPA, formada con un **componente navbar** (visible en todas las visualizaciones) y un **componente tienda**.
Dentro del mismo, tenemos otros componentes:
 - El primero visualiza un **componente carrousel** con dos imágenes publicitarias
 - El segundo muestra una lista de banners publicitarios **(componente banner)** mediante cards **(componente banner-card)**
 - Y el último, se encarga de mostrar las categorías de productos que tenemos disponibles en nuestra tienda **(componente categorias)**, también, utilizando cards **(componente categorias-card)**

Puntos a destacar de esta parte:
 - Las imágenes son cargadas desde el servidor mediante **Mockoon**
 - Tanto el banner como los botones que se encuentran en la parte superior de las cards de categorías, **no llevan a ningún sitio**
 - Cuando pulsemos en cualquiera de las card de categorías, se cargará el componente de la **lista de productos**

![categorias](/img/tienda-02.png)

### Nosotros

![nosotros](/img/nosotros-01.png)

En el navbar, además de poder acceder al **componente tienda**, también podremos visualizar el **componente vosotros**, donde tendremos un ejemplo de descripción que hablaría sobre la empresa.

### Lista de artículos

![listaArticulos](/img/lista-articulos-01.png)

Como se indica anteriormente, al pulsar sobre cualquiera de las card de categorías, se cargará el **componente articulo-list**.

En este se visualizarán las cards **(componente articulo-card)** con todos los artículos disponibles en la tienda, formadas por una imagen, un nombre y un precio.

Si pulsamos sobre cualquiera de ellas, se nos cargará la información individual del artículo **(componente articulo-form)**.

### Información del artículo

![infoArticulo](/img/informacion-articulo-01.png)

Además de los datos del artículo que encontramos en las cards, también se mostrará el color y una miniatura de la imagen.

##  Observaciones

Los siguientes elementos son cargados desde el backend haciendo uso de Mockoon, siendo los servicios del propio componente los que recogen la respuesta de la petición.

### Tienda
- Imágenes tanto del carrousel como de los banners
- Imágenes y título de las categorías

### Lista de artículos
- Imágenes, título y precio de los artículos (convertido a euros mediante un pipe)

### Información del artículo
- Imagen, título, precio (convertido a euros mediante un pipe), color, miniatura de la imagen


## Estructura de los directorios

### Directorio raíz

![root-dir](/img/estructura-principal.png)

### Directorio app/

![app-dir](/img/estructura-app.png)

### Observaciones

Se han separado los ficheros según su tipo para aportar claridad. Podemos encontrar:

    - app.module.ts: Fichero principal de la aplicación, donde se encuentran los imports de los componentes, servicios, pipes y rutas
    - app.routing.module.ts: Fichero que contiene las rutas de la aplicación
    - components/: Contiene los componentes de la aplicación
    - services/: Contiene los servicios de la aplicación
    - shared/pipes/: Contiene los pipes de la aplicación

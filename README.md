# ecommerce-angular

[![forthebadge](/img/made-with-angular.svg)](https://forthebadge.com)

## Descripción

En esta práctica se realiza una Single Page Application (SPA) que se encarga de gestionar un ecommerce.
Para su realización, se han puesto en práctica las bases de Angular, haciendo uso de Componentes, Servicios, Pipes, Enrutamiento y Peticiones HTTP "mockeadas".

Se ha recurrido a Bootstrap y SCSS para el diseño.

## Funcionamiento

A continuación, mediante capturas de pantalla, se explicará paso a paso el funcionamiento de la aplicación.

### Tienda

![tienda](/img/tienda-01.png)

Nos encontramos en la parte principal de la SPA, formada con un componente navbar (visible en todas las visualizaciones) y un componente tienda.
Dentro del mismo, tenemos otros componentes:
 - El primero visualiza un carrousel con dos imágenes publicitarias
 - El segundo muestra una lista de banners publicitarios
 - Y el último, se encarga de mostrar las categorías de productos que tenemos disponibles en nuestra tienda.

Puntos a destacar de esta parte:
 - Las imágenes son cargadas desde el servidor mediante Mockoon
 - Tanto el banner como los botones que se encuentran en la parte superior de las cards de categorías, no llevan a ningún sitio
 - Cuando pulsemos en cualquiera de las card de categorías, se cargará el componente de la lista de productos

![categorias](/img/tienda-02.png)

### Nosotros

![nosotros](/img/nosotros-01.png)

En el navbar, además de poder acceder al componente tienda, también podremos visualizar el componente vosotros, donde tendremos un ejemplo de descripción que hablaría sobre la empresa.

### Lista de artículos

![listaArticulos](/img/lista-articulos-01.png)

Como se indica anteriormente, al pulsar sobre cualquiera de las card de categorías, se cargará el siguiente componente.

En este se visualizarán las cards con todos los artículos disponibles en la tienda, formadas por una imagen, un nombre y un precio.

- La información de las cards también son cargadas desde Mockoon

Si pulsamos sobre cualquiera de ellas, se nos cargará la información individual del artículo.

### Información del artículo

![infoArticulo](/img/informacion-articulo-01.png)

Además de los datos del artículo que encontramos en las cards, también se mostrará el color y una miniatura de la imagen.

- Al igual que sucedía con las cards, la información del artículo es cargada desde Mockoon

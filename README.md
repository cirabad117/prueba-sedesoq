# Ciro Abad Cruz Vega - ejercicio técnico

[![Build Status](https://travis-ci.org/Polymer/polymer-starter-kit.svg?branch=master)](https://travis-ci.org/Polymer/polymer-starter-kit)

Como parte del seguimiento a mi postulación presento el siguient proyecto

Este es un micro sitio web desarrollado en el framework Polymer JS; conectado a un servidor del servicio web
Firebase, del cual estoy utilizando sus funciones de base de datos NoSQL y de alojamiento de hosting.

Entre las funciones solicitadas se encuentran:

* **Conexión a alguna base de datos** (por cuestiones de seguridad no incluyo las llaves de acceso, ya que se esta trabajando en un servidor personal)
* **Inicio de sesión**
* **Catálogos** Clientes, Productos, Ventas
* **ABC para inventario de productos** (Alta, Baja y Consulta)
* **Agregar al carrito diferentes productos** mostrar el total y efectuar compras.


### acceso


##### para acceder al sitio debe entrar a la siguiente liga

    https://ccruz-test.web.app/

### BASE DE DATOS

##### la base de datos esta compuesta por 3 colecciones, las cuales estan conformadas de la siguiente forma
    clientes
        |-razon (String)
        |-domicilio (String)
        |-telefono
    productos
        |-nombre (String)
        |-precio (Number)
        |-costo (Number)
        |-inventario (Number)
    ventas
        |-fecha (timestamp)
        |-totalVenta (Number)
        |-cliente (Object) incluye todos los datos establecido en la coleccion clientes
        |listaArticulos (Array) dentro de este arreglo se agrupan objetos con la siguiente estructura
            |cantidad(Number)
            |idProducto(String)
            |precio (Number)
            |producto (String)
            |subtotal (Number)


Cualquier aclaración o duda puede comunicarse directamente con los datos de contacto que suministré en mi CV.

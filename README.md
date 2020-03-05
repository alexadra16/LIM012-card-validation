# Tarjeta de crédito válida

## Índice

)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)

***


## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia desarrollando
aplicaciones web (WebApp) que interactúen con el usuario a través del navegador
y la lógica, utilizando HTML, CSS y JavaScript como herramientas.

Reflexiona y luego marca los objetivos que has llegado a **entender** y
**aplicar** en tu proyecto.

### UX

* [😀] [Diseñar la aplicación pensando y entendiendo al usuario](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [😀] [Crear prototipos para obtener feedback e iterar](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/00-sketching/00-sketching)
* [😀] [Aplicar los principios de diseño visual](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/01-visual-design/01-visual-design-basics)

### HTML y CSS

* [ ] [Uso correcto de HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [] [Uso de selectores de CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS)
* [😀] [Construir tu aplicación respetando el diseño realizado](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/css/01-css/02-boxmodel-and-display) (maquetación).

### DOM

* [ ] [Uso de selectores de nodos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/03-1-dom-methods-selection)
* [😀] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/04-events)
* [😀] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)

### Javascript

* [😀] [Manipulación de strings](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/06-strings/01-strings)
* [😀] [Uso de condicionales](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/01-conditionals-and-loops)
* [😀] [Uso de bucles](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/02-loops)
* [😀 ] [Uso de funciones](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/javascript/02-flow-control/03-functions)
* [ 😀] [Datos atómicos y estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [ ] Utilizar ES Modules (`import` | `export`).

### Testing

* [😀] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)

### Git y GitHub

* [😀] [Comandos de git](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/01-git/04-commands)
  (`add` | `commit` | `pull` | `status` | `push`).
* [😀] [Manejo de repositorios de GitHub](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/02-github/01-github)  (`clone` | `fork` | `gh-pages`).

### Buenas prácticas de desarrollo

* [ ] Organizar y dividir el código en módulos (Modularización).
* [ ] Uso de identificadores descriptivos (Nomenclatura| Semántica).
* [ ] Uso de linter para seguir buenas prácticas (ESLINT).
* Cómo crees que el producto que estás creando está resolviendo sus problemas.


## 4. Consideraciones generales

* Este proyecto se debe resolver de manera individual.
* El proyecto será entregado subiendo tu código a GitHub (`commit`/`push`) y la
  interfaz será desplegada usando [GitHub pages](https://pages.github.com). Si
  no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
* Tiempo para completarlo: Toma como referencia 2 semanas. Trabaja durante el
  primer Sprint (una semana) y al final, trata de fijar un estimado de cuándo lo
  terminarás.

## 5. Criterios de aceptación mínimos del proyecto

Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

### Definición del producto

En el `README.md`, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Un título con el nombre de tu proyecto.
  
  # AppWeb de Unique: valida el numero de tu tarjeta

* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
  
  🚀Este proyecto  trata de validar el número de tarjeta  de los compradores de   productos Unique.

* La imagen final de tu proyecto.

    ![vista final](https://lh3.googleusercontent.com/YdHfkzPB5XbMIF2K5MnZxQr8_N5cnon-of2sLNoxATURPNKCnJcFfMKntl-xEvrfMzpWrg=s163)

Investigación UX:
* Explicar quiénes son los usuarios y los objetivos en relación con el producto.
  
  🚀Los principales usuarios de producto es toda "makeUp lover", es decir, los usuarios seran l@s que compraran los productos independiente si  son consultoras o no. Claramente disminuirá las barreras para acceder a los productos.Por eso, el cliente de mi appWeb es Unique al ser el más beneficiado con esta herramienta.

* Explicar cómo el producto soluciona los problemas/necesidades de dichos usuarios.

  🚀Los usuarios necesitan una interfaz una herramienta que les permita pagar  de manera rapida sus pedidos(para esto el primer paso es validad el numero de tarjeta) y que sea fácil de entender. La primera se cumple ya que al hacer click en un boton automaticamente le avisará al usuario si es valida o no el numero de tarjeta. Por otro lado, la segunda necesidad se cumple  cuando ya que la appWeb es fácil de entender,ya lo probe con mi primito, porque solo tiene una instruccion y un boton. Por ende, esas dos necesidades se convirtieron en los objetivos  de los ususarios en relacion al producto
 

* Luego colocarás la foto de tu primer prototipo en papel.

      Prototipo de baja fidelidad
      
    ![prototipo de baja fidelidad](https://lh3.googleusercontent.com/DDgoy-WSGMeFnsS8Zo7yvQshe-pE10Hqv3pV_GL-V58fG4M42amGcjju-iUfL0Uzl5U9i9U=s116)

    
* Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  Las mejoras que debo realizar son
  🔥Aprenderse lo que va en cada parte del HTML

  🔥Entender y practicar el uso de los selectores de nodos del DOM}

  🔥Usar otros eventos a parte del addEventListener
  
  🔥En la manipulación dinamica del DOM no solo manejar innerHTML

  
* Imagen del prototipo final.

  Protipo de alta fidelidad 

    ![prototipo de alta fidelidad](https://lh3.googleusercontent.com/QaDYTGNryBqQFGtGexQZzJC-sI5xGDTJgxUhtgVQ_4TzJp8qFHSZjmDFdl1i5Z8N_WdlEw=s141)







  

  

 


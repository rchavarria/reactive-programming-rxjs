# Progración reactiva en JavaScript

¿Qué falta en JavaScript para completar el siguiente cuadrante? Para elementos únicos y de forma síncrona, tenemos las llamadas a los métodos. Para múltiples elementos de forma síncrona, tenemos los arrays. Para elementos únicos, pero asíncronos, las promesas (`Promise`).

**imagen del cuadrante en cuestión**

Existe una herramienta o paradigma (la verdad es que no sé muy bien cómo llamarlo) que está cobrando fuerza y popularidad últimamente, sobretodo por su uso en frameworks muy conocidos como React o Angular. Se trata de la **programación reactiva**. En JavaScript, encontramos [RxJS], una implementación de [ReactiveX].

ReactiveX es **nota** *página de la intro, primeros párrafo*. Es un API para trabajar con flujos observables de datos de forma asíncrona. Combina ideas del [patrón Observable] (también conocido como pub/sub, event listener,...), del patrón Iterable y de la programación funcional (funciones puras, combinación de funciones,...).

ReactiveX es muy versátil, proporciona funcionalidades para el backend (asíncronía, concurrencia) y para el frontend (eventos de la interfaz gráfica, llamadas HTTP). Es en la parte cliente donde la implementación RxJS cobra fuerza. Se podría utilizar en el backend, sobre Node.js, pero parece más natural usar JavaScript en el navegador.

La programación reactiva se basa en 3 pasos: crear (**...**), combinar (**:::**) y escuchar/reaccionar/observar. De ella podríamos destacar las siguientes cualidades:

1. Favorece la composición
2. Es flexible, permite trabajar con 1 elemento, varios o infinitos
3. Es funcional, nos permite aplicar funciones puras a los flujos de datos
4. Facilita la concurrencia (**:::** *better code, pág ppal*)

Como ha quedado un artículo muy teórico, veamos cómo podemos crear y consumir nuestro primer `Observable`. En los siguientes artículos explicaremos cada una de las partes y veremos qué opciones nos ofrece RxJS.

```javascript
Observable.from([ 1, 2, 3 ])
  .subscribe(i => {
    console.log('index:', i)
  })

/* output
index: 1
index: 2
index: 3
*/
```

Este código y más, estará disponible en el repositorio de GitHub: [reactive-programming-rxjs].

En el próximo artículo veremos en detalle cómo crear un flujo observable a partir de un array y de cómo se compararía con un array síncrono.

# The basics

En esta parte del HandBook habla sobre las principales diferencias sobre TypeScript a JavaScript. En el ejemplo propuesto:

```ts
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

La primera línea ejecutable accede a una propiedad llamada toLowerCase y luego la invoca. En el segundo intento, se intenta llamar directamente a message.

Sin embargo, si desconocemos el valor de message, lo cual es bastante común, no podemos predecir con certeza qué resultados obtendremos al intentar ejecutar este código. El comportamiento de cada operación depende completamente del valor que tenga message inicialmente.

# Everyday Types

Un dato a tomar en cuenta es que TypeScript no usa declaraciones de estilo de "tipos a la izquierda", como int x = 0; las anotaciones de tipo que siempre irán después de lo que se escribe.

Se detallan los tipos básicos disponibles en TypeScript, que permiten declarar variables con un tipo específico.

El primer tipo básico presentado es **Boolean**, que representa un valor de verdadero o falso. A continuación, se explica el tipo **Number**, que incluye tanto números enteros como decimales. También se describe el tipo **String**, que representa una secuencia de caracteres.

El handbook continúa con los tipos **Array** y **Tuple**. Los arrays permiten almacenar múltiples valores del mismo tipo, mientras que las tuplas son arrays de longitud fija en los que se especifica el tipo de cada elemento.

A continuación, se explica el tipo **enum**, que permite definir un conjunto de valores con nombre. Luego, se presentan los tipos **any** y **unknown**, que ofrecen flexibilidad al permitir valores de cualquier tipo, aunque difieren en la forma en que se pueden utilizar y verificar.

Las **funciones** son el medio principal para pasar datos en JavaScript. TypeScript le permite especificar los tipos de los valores de entrada y salida de las funciones.

Cuando declara una función, puede agregar anotaciones de tipo después de cada parámetro para declarar qué tipos de parámetros acepta la función. Las anotaciones de tipo de parámetro van después del nombre del parámetro.

# Narrowing

El Narrowing es el proceso de refinar un tipo más amplio a uno más específico. El objetivo del Narrowing es manejar los casos de forma individualizada. Se por ejemplo de cómo estrechar un tipo string a "abc" o un número a 123.

Para hacer el Narrowing se pueden usar los type guards, que son técnicas de Narrowing.

El operador typeof es un type guard y ademas se también se pueden crear type guards personalizados.

En el ejemplo propuesto un argumento de una funcion se le pueden pasar varios tipos y dependiendo del tipo se pueden realizar diferentes acciones.

## pattern_state_python

El código implementa el patrón de diseño State, que permite a un objeto cambiar su comportamiento interno cuando su estado interno cambia. El patrón State se basa en la encapsulación, la delegación y la composición para lograr esto.

### **Comparación con React Context y Redux:**

El patrón State en este código se asemeja a cómo React Context y Redux manejan el estado en una aplicación.

**React Context:** Al igual que en el patrón State, el Context define la interfaz de interés para los componentes consumidores y mantiene una referencia al estado actual. Los componentes pueden suscribirse al Context y recibir actualizaciones cuando el estado cambia.

**Redux:** Redux es una biblioteca de administración del estado del lado del cliente en aplicaciones JavaScript. Se basa en el patrón State y utiliza un almacén centralizado (store) para mantener el estado de la aplicación. Los componentes pueden acceder al estado y despachar acciones para actualizar el estado.

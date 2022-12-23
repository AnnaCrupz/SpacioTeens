function agregarAlCarrito(nombre, precio) {
  var fila = document.querySelector('#lista-carrito tbody tr[data-nombre="' + nombre + '"]');
  if (fila) {
    var cantidad = fila.querySelector('.cantidad').textContent;
    cantidad++;
    fila.querySelector('.cantidad').textContent = cantidad;
    fila.querySelector('.precio-total').textContent = cantidad * precio + '€';
  } else {
    var filaNueva = document.createElement('tr');
    filaNueva.setAttribute('data-nombre', nombre);
    filaNueva.innerHTML = '<td>' + nombre + '</td>' +
                          '<td class="cantidad">1</td>' +
                          '<td>' + precio + '€</td>' +
                          '<td class="precio-total">' + precio + '€</td>' +
                          '<td><button onclick="eliminarDelCarrito(this)" class="btn btn-danger">Eliminar</button></td>';
    document.querySelector('#lista-carrito tbody').appendChild(filaNueva);
  }

  var precioTotal = document.querySelector('#precio-total').textContent;
  precioTotal = parseInt(precioTotal) + precio;
  document.querySelector('#precio-total').textContent = precioTotal + '€';
}

function eliminarDelCarrito(botonEliminar) {
  var fila = botonEliminar.parentNode.parentNode;

  var precio = fila.querySelector('.precio').textContent;
  var cantidad = fila.querySelector('.cantidad').textContent;

  var precioTotal = document.querySelector('#precio-total').textContent;
  precioTotal -= precio* cantidad;
  document.querySelector('#precio-total').textContent = precioTotal + '€';

  fila.parentNode.removeChild(fila);
}

function realizarPedido() {
  alert('Tu pedido ha sido realizado con éxito');
}
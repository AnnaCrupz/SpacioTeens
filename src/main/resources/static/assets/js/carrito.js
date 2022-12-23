const carrito = document.getElementById('carrito');
const producto = document.getElementById('hola');
const hola= document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

eventslisteners();

function eventslisteners() 
{
    //atento a cuando se presiona agregar carrito
    producto.addEventListener('click', comprarproducto);

    //eliminar curso en el carrito
    carrito.addEventListener('click', eliminarproducto);

    //vaciar carrit de compras
    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

    //mostrar lista de cursos en carrito de compra al cargar DOM-LS
    document.addEventListener('DOMContentLoaded', leerLS)

}

function comprarProducto(e) 
{
    e.preventDefault();
    //delegation para agregar carrito
    if (e.target.classList.contains("agregar-carrito")) {
        const producto = e.target.parentElement.parentElement;
        //enviamos el curso seleccionado para tomar sus datos
        leerDatosProducto(producto);
    }    
}


//leer Datos del Curso
function leerDatosProducto(producto) {
    const infoProducto= {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h5').textContent,
        precio: producto.querySelector('span').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }

    insertarProducto(infoProducto);
}

// insertar Curso en el carrito
function insertarProducto(Producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${Producto.imagen}" width="100"></td>
        <td>${Producto.titulo}</td>
        <td>${Producto.precio}</td>
        <td><a href="#" class="borrar-Producto" data-id="${Producto.id}">X</a></td>    
    `;
    hola.appendChild(row);
    guardarProductoLocalStorage(Producto);

}

//eliminar curso del carrito en el DOM
function eliminarProducto(e) 
{
    e.preventDefault();

    let Producto, ProductoId;

    if (e.target.classList.contains('borrar-Producto')) {
        e.target.parentElement.parentElement.remove(); 
    }  
    Producto = e.target.parentElement.parentElement;
    Producto = curso.querySelector('a').getAttribute('data-id');   
    eliminarProductoLS(ProductoId);
}

//vacias Carrito
function vaciarcarrito() 
{
    //listaCursos.innerHTML = '';
    while(hola.firstChild){
       hola.removeChild(hola.firstChild);
    }    
    //vaciar carrito  de LS
    vaciarLs();

    return false;    
}


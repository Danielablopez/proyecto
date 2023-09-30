document.addEventListener("DOMContentLoaded", () => {
    const detalleProducto = document.getElementById("detalle-producto");
  
   
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get("id");
  
    
    const datosProductos = JSON.parse(localStorage.getItem("productos"));
  
    
    const productoSeleccionado = datosProductos.productos.find(
      (producto) => producto.id === idProducto
    );
  
    if (productoSeleccionado) {
      
      const contenedorDetallesProducto = document.createElement("div");
      contenedorDetallesProducto.classList.add("detalles-producto");
      contenedorDetallesProducto.innerHTML = `

        <img id="imagen-producto" src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.alt}" />
        <h2 id="nombre">${productoSeleccionado.nombre}</h2>
        <p id="descripcion">${productoSeleccionado.descripcion}</p>
        <p id="valor">Valor: ${productoSeleccionado.valor}</p>
        <div id="puntuacion"> ${productoSeleccionado.puntuacion}</div>
        <a href=index.html>Volver a la página principal</a>
        
        `;
      //agregar a pagina principal
      detalleProducto.appendChild(contenedorDetallesProducto);
    }
  });
  
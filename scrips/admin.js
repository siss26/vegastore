// Productos simulados (puedes mover esto a un archivo JSON o a localStorage más adelante)
const productos = [
  { id: 1, nombre: "Vestido primavera", precio: 49.99 },
  { id: 2, nombre: "Vestido casual niña", precio: 19.99 },
  { id: 3, nombre: "Vestido Jessi", precio: 69.99 },
  { id: 4, nombre: "Vestido Sintia", precio: 59.99 },
  { id: 5, nombre: "Vestido Vero", precio: 89.99 },
  { id: 6, nombre: "Vestido Carolina", precio: 56.99 },
  { id: 7, nombre: "Vestido Straple", precio: 40.99 },
  { id: 8, nombre: "Zapatos Deportivos", precio: 57.99 },
];

// Función para cargar productos y mostrarlos
function cargarProductos() {
  const lista = document.getElementById('lista-productos');
  if (!lista) return; // evita errores si el elemento no existe
  lista.innerHTML = '';
  productos.forEach(p => {
    const pElem = document.createElement('p');
    pElem.textContent = `${p.nombre} - S/${p.precio}`;
    lista.appendChild(pElem);
  });
}

// Agregar nuevo producto desde formulario
const form = document.getElementById('form-producto');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = form.querySelector('[name="nombre"]').value;
    const precio = parseFloat(form.querySelector('[name="precio"]').value);
    if (nombre && !isNaN(precio)) {
      const nuevoProducto = {
        id: productos.length + 1,
        nombre,
        precio
      };
      productos.push(nuevoProducto);
      alert("Producto agregado correctamente");
      cargarProductos();
      form.reset();
    } else {
      alert("Datos inválidos");
    }
  });
}

// Cargar pedidos simulados (solo ejemplo)
function cargarPedidos() {
  const pedidos = [
    { id: 1, correo: 'cliente@correo.com', fecha: '2025-05-28', producto_id: 2, cantidad: 1 },
    { id: 2, correo: 'otro@correo.com', fecha: '2025-05-27', producto_id: 4, cantidad: 2 },
  ];

  const lista = document.getElementById('lista-pedidos');
  if (!lista) return;
  lista.innerHTML = '';
  pedidos.forEach(p => {
    const pElem = document.createElement('p');
    pElem.textContent = `Pedido #${p.id} - ${p.correo} - ${p.fecha} - Producto: ${p.producto_id} x ${p.cantidad}`;
    lista.appendChild(pElem);
  });
}

// Ejecutar al iniciar
cargarProductos();
cargarPedidos();

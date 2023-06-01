let selectedSize = null;
let precioPollo = 45;
let precioGaseosa = 0;

function selectSize(precio) {
    if (selectedSize !== null) {
        selectedSize.classList.remove('selected');
    }
    this.classList.add('selected');
    selectedSize = this;
    precioGaseosa = precio;
}

function calcularPrecioTotal() {
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let precioTotal = (cantidad*precioPollo + precioGaseosa);
    document.getElementById('precioTotal').textContent = `Precio total: ${precioTotal} soles`;
}


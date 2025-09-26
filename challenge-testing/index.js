class CarritoCompra {
  constructor() {
    this.array = [];
  }
  agregarProducto(producto) {
    this.array.push(producto);
  }
  calcularTotal() {
    let suma = 0;
    for (let pro of this.array) {
      suma += pro.precio;
    }
    return suma;
  }
  aplicarDescuento(porcentaje) {
    let totalFinal = this.calcularTotal();
    return totalFinal - (totalFinal * porcentaje) / 100;
  }
}

module.exports = {
  CarritoCompra,
};

const { CarritoCompra } = require("../index");

describe("Pruebas de carrito de compra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("Carrito de compra existe", () => {
    expect(carrito).toBeDefined();
    expect(typeof CarritoCompra).toBe("function");
  });

  it("Que el array este vacio", () => {
    expect(carrito.array).toEqual([]);
  });

  it("Que cree instancias", () => {
    expect(carrito).toBeInstanceOf(CarritoCompra);
  });

  it("Agregar productos al carrito", () => {
    const producto = {
      nombre: "vino",
      precio: 100,
    };
    carrito.agregarProducto(producto);
    expect(carrito.array).toContainEqual(producto);
  });

  it("Sume precio de los productos", () => {
    carrito.agregarProducto({ nombre: "pan", precio: 200 });
    carrito.agregarProducto({ nombre: "queso", precio: 200 });
    expect(carrito.calcularTotal()).toBe(400);
  });

  it("Que aplique el descuento", () => {
    carrito.agregarProducto({ nombre: "pan", precio: 200 });
    carrito.agregarProducto({ nombre: "queso", precio: 200 });
    expect(carrito.aplicarDescuento(10)).toBe(360);
    expect(carrito.aplicarDescuento(0)).toBe(400);
    expect(carrito.aplicarDescuento(100)).toBe(0);
  });
});

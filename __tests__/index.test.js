const saludo = require("../index");

test("Debe retornar 'Hola Mundo'", () => {
    expect(saludo()).toBe("Hola Mundo");
});

//Paulo Burgos 2023-1756
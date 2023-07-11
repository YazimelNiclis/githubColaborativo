const Maquina = (valorProducto, Dinero) => {
  if (valorProducto % 5 !== 0) {
    return "El valor del producto no es multiplo de 5 !";
  } else if (
    Dinero !== 2000 &&
    Dinero !== 1000 &&
    Dinero !== 500 &&
    Dinero !== 200 &&
    Dinero !== 100 &&
    Dinero !== 50
  ) {
    return "El cajero solo acepta billetes de $2000 , $1000, $ 500, $200, $100 y de $50";
  } else if (Dinero < valorProducto) {
    return "Su dinero no es suficiente";
  }

  var monedas10 = 10 * 30;
  console.log(monedas10);
  var monedas5 = 5 * 50;
  console.log(monedas5);

  var valorIngreso = Dinero - valorProducto;
  var monedas = [10, 5];
  var cambio = [];
  for (var moneda of monedas) {
    var cuenta = Math.floor(valorIngreso / moneda);
    cambio.push(cuenta);
    valorIngreso -= cuenta * moneda;
  }

  if (cambio[0] > monedas10) return "Las monedas de 10 no alcanzan";
  if (cambio[1] > monedas5) return "Las monedas de 5 no alcanan";

  return cambio;
};

console.log(Maquina(530, 1000));

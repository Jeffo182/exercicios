function calcularSoma() {
  let INDICE = 13;
  let SOMA = 0;

  for (let K = 0; K <= INDICE; K++) {
      SOMA += K;
  }

  return SOMA;
}

let resultado = calcularSoma();
console.log("O valor da variável SOMA é:", resultado);

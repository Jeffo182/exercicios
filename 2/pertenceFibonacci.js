function pertenceFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0 || numero === 1) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
  }

  for (let i = 2; b <= numero; i++) {
      let temp = b;
      b = a + b;
      a = temp;

      if (b === numero) {
          return `O número ${numero} pertence à sequência de Fibonacci.`;
      }
  }

  return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

let numeroInformado = 20;
let resultado = pertenceFibonacci(numeroInformado);
console.log(resultado);

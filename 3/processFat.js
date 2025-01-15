const faturamentoDiario = require('./fatDiario.json');
function processarFaturamento(faturamentoDiario) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  faturamentoDiario.forEach((dia) => {
      if (dia.faturamento > 0) {

          if (dia.faturamento < menorFaturamento) {
              menorFaturamento = dia.faturamento;
          }
          if (dia.faturamento > maiorFaturamento) {
              maiorFaturamento = dia.faturamento;
          }

          somaFaturamento += dia.faturamento;
          diasComFaturamento++;
      }
  });

  const mediaMensal = somaFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = faturamentoDiario.filter(dia => dia.faturamento > mediaMensal).length;

  return {
      menorFaturamento: menorFaturamento,
      maiorFaturamento: maiorFaturamento,
      diasAcimaDaMedia: diasAcimaDaMedia
  };
}

const resultado = processarFaturamento(faturamentoDiario);
console.log("Menor faturamento:", resultado.menorFaturamento);
console.log("Maior faturamento:", resultado.maiorFaturamento);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);


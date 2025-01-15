const faturamentoDiario = require('./dados.json');
function processarFaturamento(faturamentoDiario) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  faturamentoDiario.forEach((dia) => {
      if (dia.valor > 0) {

          if (dia.valor < menorFaturamento) {
              menorFaturamento = dia.valor;
          }
          if (dia.valor > maiorFaturamento) {
              maiorFaturamento = dia.valor;
          }

          somaFaturamento += dia.valor;
          diasComFaturamento++;
      }
  });

  const mediaMensal = somaFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = faturamentoDiario.filter(dia => dia.valor > mediaMensal).length;

  return {
      menorFaturamento: menorFaturamento,
      maiorFaturamento: maiorFaturamento,
      diasAcimaDaMedia: diasAcimaDaMedia
  };
}

const resultado = processarFaturamento(faturamentoDiario);
const formatarComoReais = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };
  
  console.log("Menor faturamento:", formatarComoReais(resultado.menorFaturamento));
  console.log("Maior faturamento:", formatarComoReais(resultado.maiorFaturamento));
  console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
  


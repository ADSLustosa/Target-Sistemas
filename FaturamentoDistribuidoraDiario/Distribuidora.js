const fs = require('fs');

function main() {
    const faturamentos = carregarFaturamento("FaturamentoDistribuidoraDiario/Faturamento.json");

    if (faturamentos.length === 0) {
        console.log('Nenhum faturamento encontrado.');
        return;
    }

    let menorFaturamento = Number.MAX_VALUE;
    let maiorFaturamento = Number.MIN_VALUE;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    faturamentos.forEach(valor => {
        if (valor > 0) {
            if (valor < menorFaturamento) {
                menorFaturamento = valor;
            }
            if (valor > maiorFaturamento) {
                maiorFaturamento = valor;
            }
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    });

    
    const mediaMensal = somaFaturamento / diasComFaturamento;
    let diasAcimaDaMedia = 0;

    
    faturamentos.forEach(valor => {
        if (valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    
    console.log('Menor valor de faturamento do mês:', menorFaturamento);
    console.log('Maior valor de faturamento do mês:', maiorFaturamento);
    console.log('Número de dias do mês com faturamento superior à média mensal:', diasAcimaDaMedia);
}


function carregarFaturamento(caminhoArquivo) {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
    const faturamentosJson = JSON.parse(dados);
    return faturamentosJson.map(faturamento => faturamento.valor);
}

main();

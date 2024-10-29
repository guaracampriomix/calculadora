function atualizarValor() {
    const produtoSelect = document.getElementById("produto");
    const valorUnitario = document.getElementById("valor-unitario");
    const produtoSelecionado = produtoSelect.value;

    // Informações dos produtos
    const produtos = {
        "1,5L": { unitario: 2.631578947, pallet: 50 },
        "Água 12": { unitario: 1.789473684, pallet: 150 },
        "Água Galão": { unitario: 5.847953216, pallet: 150 },
        "Bombona": { unitario: 1.461988304, pallet: 48 },
        "Caixa 24": { unitario: 2.000000000, pallet: 100 },
        "Caixa 36": { unitario: 3.000000000, pallet: 84 },
        "Concentrado": { unitario: 3.508771930, pallet: 60 },
        "Energetico 2L": { unitario: 3.508771930, pallet: 80 },
        "Energetico Lata": { unitario: 0.471929825, pallet: 468 },
        "Ginseng": { unitario: 1.754385965, pallet: 100 },
        "Pet 250": { unitario: 0.877192982, pallet: 203 }
    };

    const produto = produtos[produtoSelecionado];

    if (produto) {
        valorUnitario.innerText = `Caixa Unitária: ${produto.unitario}`;
        calcularCaixas(); 
    } else {
        valorUnitario.innerText = "";
    }
}

function calcularCaixas() {
    const caixasFisicas = parseFloat(document.getElementById("caixas-fisicas").value);
    const produtoSelect = document.getElementById("produto");
    const produtoSelecionado = produtoSelect.value;
    const tipoCalculo = document.querySelector('input[name="tipoCalculo"]:checked').value;

    // Atualiza o label com base no tipo de cálculo
    const labelCaixaFisica = document.getElementById("label-caixa-fisica");
    labelCaixaFisica.innerText = tipoCalculo === "pallet" ? "Quantidade de Pallet:" : "Quantidade de Caixa Física:";

    // Informações dos produtos
    const produtos = {
        "1,5L": { unitario: 2.631578947, pallet: 50 },
        "Água 12": { unitario: 1.789473684, pallet: 150 },
        "Água Galão": { unitario: 5.847953216, pallet: 150 },
        "Bombona": { unitario: 1.461988304, pallet: 48 },
        "Caixa 24": { unitario: 2.000000000, pallet: 100 },
        "Caixa 36": { unitario: 3.000000000, pallet: 84 },
        "Concentrado": { unitario: 3.508771930, pallet: 60 },
        "Energetico 2L": { unitario: 3.508771930, pallet: 80 },
        "Energetico Lata": { unitario: 0.471929825, pallet: 468 },
        "Ginseng": { unitario: 1.754385965, pallet: 100 },
        "Pet 250": { unitario: 0.877192982, pallet: 203 }
    };

    const produto = produtos[produtoSelecionado];

    if (produto && caixasFisicas > 0) {
        let resultado;

        if (tipoCalculo === "unitaria") {
            resultado = caixasFisicas * produto.unitario;
            document.getElementById("resultado").innerText = `Quantidade de Caixas Unitárias: ${resultado.toFixed(2)}`;
        } else if (tipoCalculo === "pallet") {
            // Multiplica a quantidade de pallets pelo valor unitário do produto
            resultado = caixasFisicas * produto.pallet * produto.unitario; // Total de caixas unitárias
            document.getElementById("resultado").innerText = `Quantidade de Caixas Unitárias: ${resultado.toFixed(2)}`;
        }
    } else {
        document.getElementById("resultado").innerText = "";
    }
}

// Adiciona o evento ao seletor de produto
document.getElementById("produto").addEventListener("change", atualizarValor);

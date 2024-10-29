function atualizarValor() {
    const produtoSelect = document.getElementById("produto");
    const valorUnitario = document.getElementById("valor-unitario");
    const produtoSelecionado = produtoSelect.value;

    // Informações dos produtos
    const produtos = {
        "1,5L": { unitario: 2.631578947, litros: 9, pack: 6, pallet: 50 },
        "Água 12": { unitario: 1.789473684, litros: 6.12, pack: 12, pallet: 150 },
        "Água Galão": { unitario: 5.847953216, litros: 20, pack: 1, pallet: 150 },
        "Bombona": { unitario: 1.461988304, litros: 5, pack: 1, pallet: 48 },
        "Caixa 24": { unitario: 2.000000000, litros: 6.84, pack: 24, pallet: 100 },
        "Caixa 36": { unitario: 3.000000000, litros: 10.26, pack: 36, pallet: 84 },
        "Concentrado": { unitario: 3.508771930, litros: 12, pack: 12, pallet: 60 },
        "Energetico 2L": { unitario: 3.508771930, litros: 12, pack: 6, pallet: 80 },
        "Energetico Lata": { unitario: 0.471929825, litros: 1.614, pack: 6, pallet: 468 },
        "Ginseng": { unitario: 1.754385965, litros: 6, pack: 12, pallet: 100 },
        "Pet 250": { unitario: 0.877192982, litros: 3, pack: 12, pallet: 203 }
    };

    const produto = produtos[produtoSelect.options[produtoSelect.selectedIndex].text];
    
    if (produto) {
        valorUnitario.innerText = `Caixa Unitária: ${produto.unitario}`;
        calcularCaixas(); 
    } else {
        valorUnitario.innerText = "";
    }
}

function calcularCaixas() {
    const caixasFisicas = document.getElementById("caixas-fisicas").value;
    const produtoSelect = document.getElementById("produto");
    const produtoSelecionado = produtoSelect.options[produtoSelect.selectedIndex].text;
    const tipoCalculo = document.querySelector('input[name="tipoCalculo"]:checked').value;

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
            resultado = caixasFisicas * produto.pallet;
            document.getElementById("resultado").innerText = `Quantidade em Caixas: ${resultado.toFixed(2)}`;
        }
    } else {
        document.getElementById("resultado").innerText = "";
    }
}

// Adiciona o evento ao seletor de produto
document.getElementById("produto").addEventListener("change", atualizarValor);

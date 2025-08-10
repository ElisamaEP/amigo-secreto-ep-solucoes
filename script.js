let nomes = [];

// Pega os elementos do HTML
const inputNome = document.getElementById("nome");
const listaNomes = document.getElementById("listaNomes");
const resultado = document.getElementById("resultado");

// Adiciona um nome na lista
document.getElementById("btnAdicionar").addEventListener("click", function() {
    let nome = inputNome.value.trim();
    if (nome !== "" && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    } else {
        alert("Digite um nome válido e que não esteja repetido.");
    }
});

// Atualiza a lista na tela
function atualizarLista() {
    listaNomes.innerHTML = "";
    nomes.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

// Limpa tudo
document.getElementById("btnLimpar").addEventListener("click", function() {
    nomes = [];
    atualizarLista();
    resultado.textContent = "";
});

// Sorteia um amigo
document.getElementById("btnSortear").addEventListener("click", function() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear.");
        return;
    }
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.textContent = "Sorteando...";
    setTimeout(function() {
        resultado.textContent = "🎉 Seu amigo secreto é: " + sorteado + " 🎉";
        soltarConfete();
    }, 1500);
});

// Função para soltar confetes
function soltarConfete() {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

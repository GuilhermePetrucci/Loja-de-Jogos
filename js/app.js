let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let botaoSelecionado = document.getElementById(`game-${id}`);
    let statusBotao = botaoSelecionado.querySelector('.dashboard__item__button');
    let imagemGame = botaoSelecionado.querySelector('.dashboard__item__img');
    let nomeGame = botaoSelecionado.querySelector('.dashboard__item__name');
    console.log(nomeGame.textContent);

    if (statusBotao.classList.contains('dashboard__item__button--return')) {
        if (confirm(`Você deseja devolver o jogo ${nomeGame.textContent}?`)) {
            statusBotao.classList.remove('dashboard__item__button--return');
            statusBotao.innerHTML = 'Alugar';
            imagemGame.classList.remove('dashboard__item__img--rented');
            jogosAlugados--
        }
    } else {
        statusBotao.classList.add('dashboard__item__button--return');
        statusBotao.innerHTML = 'Devolver';
        imagemGame.classList.add('dashboard__item__img--rented');
        jogosAlugados++
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
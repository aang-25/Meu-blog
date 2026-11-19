const botoesCurtir = document.querySelectorAll('.btn-like');

botoesCurtir.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('.like-count');
        let numeroAtual = Number(contador.textContent);
        contador.textContent = numeroAtual + 1;
        botao.classList.add('curtido');
    });
});

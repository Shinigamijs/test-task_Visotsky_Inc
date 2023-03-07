// Открыть модальное окно

document.getElementById("show-modal").addEventListener("click", function() {
    document.getElementById("modal-window").classList.add("open")
})

// Закрыть модальное окно нажатием на клавишу Escape

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-window").classList.remove("open")
    }
});

// Закрыть модальное окно при нажатии вне области модального окна

document.querySelector("#modal-window .modal__container").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-window").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

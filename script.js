let currentActiveCard = null;

function initializeCards() {
    const cards = document.querySelectorAll('.chatbot-card');
    const resetBtn = document.getElementById('resetBtn');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (currentActiveCard && currentActiveCard !== card) {
                // Retourner la carte précédente
                currentActiveCard.classList.remove('flipped');
            }

            if (currentActiveCard === card) {
                // Retourner la carte actuelle si elle est déjà retournée
                card.classList.remove('flipped');
                currentActiveCard = null;
                resetBtn.classList.remove('show');
            } else {
                // Retourner la nouvelle carte
                card.classList.add('flipped');
                currentActiveCard = card;
                resetBtn.classList.add('show');
            }
        });
    });

    resetBtn.addEventListener('click', () => {
        if (currentActiveCard) {
            currentActiveCard.classList.remove('flipped');
            currentActiveCard = null;
        }
        resetBtn.classList.remove('show');

        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initializeCards();
});

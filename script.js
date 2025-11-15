let currentActiveCard = null;

function initializeCards() {
    const cards = document.querySelectorAll('.chatbot-card');
    const resetBtn = document.getElementById('resetBtn');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const description = card.querySelector('.description');
            
            if (currentActiveCard && currentActiveCard !== card) {
                // Fermer la carte précédente
                currentActiveCard.classList.remove('active');
                currentActiveCard.querySelector('.description').classList.remove('show');
            }

            if (currentActiveCard === card) {
                // Fermer la carte actuelle si elle est déjà ouverte
                card.classList.remove('active');
                description.classList.remove('show');
                currentActiveCard = null;
                resetBtn.classList.remove('show');
            } else {
                // Ouvrir la nouvelle carte
                card.classList.add('active');
                description.classList.add('show');
                currentActiveCard = card;
                resetBtn.classList.add('show');
                
                // Scroll vers la carte active
                setTimeout(() => {
                    card.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 100);
            }
        });
    });

    resetBtn.addEventListener('click', () => {
        if (currentActiveCard) {
            currentActiveCard.classList.remove('active');
            currentActiveCard.querySelector('.description').classList.remove('show');
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

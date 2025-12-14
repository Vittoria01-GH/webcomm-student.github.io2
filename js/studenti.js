  // Script per la verifica studente
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Pagina Offerte Studenti caricata');
        
        // Aggiungi effetto hover alle card
        const cards = document.querySelectorAll('.studenti-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Animazione per le icone
        const icons = document.querySelectorAll('.icon-wrapper');
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.querySelector('.icon-main').style.transform = 'translate(-50%, -50%) scale(1.1)';
            });
            icon.addEventListener('mouseleave', function() {
                this.querySelector('.icon-main').style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    });

// Funzione per mostrare il popup del carrello
function showCartPopup(productName, productPrice) {
    // Prevenire il comportamento predefinito del link
    event.preventDefault();
    
    // Aggiorna i dettagli del prodotto nel popup
    document.getElementById('cart-item-name').textContent = productName;
    document.getElementById('cart-item-price').textContent = productPrice;
    document.getElementById('cart-subtotal').textContent = productPrice;
    document.getElementById('cart-total').textContent = productPrice;
    
    // Mostra il popup
    document.getElementById('cart-popup').classList.add('show');
    
    // Nascondi automaticamente dopo 5 secondi
    setTimeout(function() {
        closeCartPopup();
    }, 5000);
}

// Funzione per chiudere il popup
function closeCartPopup() {
    document.getElementById('cart-popup').classList.remove('show');
}

// Chiudi il popup cliccando fuori dall'area (opzionale)
document.addEventListener('click', function(event) {
    var cartPopup = document.getElementById('cart-popup');
    if (cartPopup.classList.contains('show') && !cartPopup.contains(event.target) && 
        !event.target.classList.contains('lvz-button') && 
        !event.target.closest('.lvz-button')) {
        closeCartPopup();
    }
});

// Chiudi il popup con il tasto ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCartPopup();
    }
});
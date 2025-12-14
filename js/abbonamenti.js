    function toggleFAQ(element) {
        const answer = element.nextElementSibling;
        const icon = element.querySelector('i');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    }
    
    // Apri la prima FAQ
    document.addEventListener('DOMContentLoaded', function() {
        const firstFAQ = document.querySelector('.faq-question');
        if (firstFAQ) {
            toggleFAQ(firstFAQ);
        }
    });

    // Funzione per mostrare il popup del carrello - VERSIONE SEMPLIFICATA
    function showCartPopup(productName, productPrice) {
        // Prevenire il comportamento predefinito del link
        event.preventDefault();
        
        // Aggiorna i dettagli del prodotto nel popup
        const cartItemName = document.getElementById('cart-item-name');
        const cartItemPrice = document.getElementById('cart-item-price');
        const cartPriceDisplay = document.getElementById('cart-price-display');
        const cartTotalDisplay = document.getElementById('cart-total-display');
        
        if (cartItemName) cartItemName.textContent = productName;
        if (cartItemPrice) cartItemPrice.textContent = productPrice;
        if (cartPriceDisplay) cartPriceDisplay.textContent = productPrice;
        if (cartTotalDisplay) cartTotalDisplay.textContent = productPrice;
        
        // Aggiorna il titolo del popup
        const popupHeader = document.querySelector('.cart-popup-header h3');
        if (popupHeader) {
            popupHeader.innerHTML = '<i class="fas fa-check-circle" style="color: #28a745; margin-right: 10px;"></i> Abbonamento aggiunto al carrello';
        }
        
        // Aggiorna il titolo del riepilogo
        const summaryTitle = document.querySelector('.cart-summary h5');
        if (summaryTitle) {
            summaryTitle.textContent = 'Dettagli Abbonamento';
        }
        
        // Aggiorna il testo dei bottoni
        const btnContinue = document.querySelector('.btn-continue');
        const btnCheckout = document.querySelector('.btn-checkout');
        if (btnContinue) btnContinue.textContent = 'Scegli altro piano';
        if (btnCheckout) btnCheckout.textContent = 'Completa l\'iscrizione';
        
        // Mostra il messaggio di modifica/cancellazione
        const cartPopupFooter = document.querySelector('.cart-popup-footer');
        if (cartPopupFooter) {
            cartPopupFooter.style.display = 'block';
        }
        
        // Mostra il popup
        const cartPopup = document.getElementById('cart-popup');
        if (cartPopup) {
            cartPopup.classList.add('show');
            
            // Nascondi automaticamente dopo 5 secondi
            setTimeout(function() {
                closeCartPopup();
            }, 5000);
        }
    }

    // Funzione per chiudere il popup
    function closeCartPopup() {
        const cartPopup = document.getElementById('cart-popup');
        if (cartPopup) {
            cartPopup.classList.remove('show');
        }
    }

    // Chiudi il popup cliccando fuori dall'area
    document.addEventListener('click', function(event) {
        const cartPopup = document.getElementById('cart-popup');
        if (cartPopup && cartPopup.classList.contains('show')) {
            // Se il click è fuori dal popup e non su un pulsante
            if (!cartPopup.contains(event.target) && 
                !event.target.classList.contains('lvz-button') && 
                !event.target.closest('.lvz-button')) {
                closeCartPopup();
            }
        }
    });

    // Chiudi il popup con il tasto ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCartPopup();
        }
    });
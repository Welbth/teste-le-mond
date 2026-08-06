const headerHTML = `
    <!-- Header Navigation -->
    <header class="ds-header">
        <div class="ds-container ds-header-inner">
            <a href="index.html" class="ds-brand-logo-text" title="Le Mond">
                <span class="ds-brand-name">LE MOND</span>
                <span class="ds-brand-desc">Curadoria de Interiores</span>
            </a>

            <ul class="ds-nav-menu">
                <li class="ds-nav-item"><a href="index.html" class="ds-nav-link">Início</a></li>
                                <li class="ds-nav-item"><a href="estofados.html" class="ds-nav-link">Estofados</a></li>
                <li class="ds-nav-item"><a href="mesas-e-buffets.html" class="ds-nav-link">Mesas &amp; Buffets</a></li>
                <li class="ds-nav-item"><a href="decoracao.html" class="ds-nav-link">Décor</a></li>
            </ul>

            <a href="https://wa.me/555499093973?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Le%20Mond." target="_blank" class="ds-btn-solid ds-header-btn">
                Falar com a Le Mond
            </a>

            <button class="ds-menu-trigger" onclick="toggleOverlayMenu()" aria-label="Abrir Menu">
                <div class="ds-hamburger-icon">
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    </header>

    <!-- Fullscreen Glass Overlay Menu -->
    <div class="ds-overlay-modal" id="overlayMenu">
        <button class="ds-overlay-close" onclick="toggleOverlayMenu()">&times;</button>
        <ul class="ds-overlay-nav">
            <li><a href="index.html" onclick="toggleOverlayMenu()">Início</a></li>
                        <li><a href="estofados.html" onclick="toggleOverlayMenu()">Estofados</a></li>
            <li><a href="mesas-e-buffets.html" onclick="toggleOverlayMenu()">Mesas &amp; Buffets</a></li>
            <li><a href="decoracao.html" onclick="toggleOverlayMenu()">Décor</a></li>
            <li style="margin-top: 24px;">
                <a href="https://wa.me/555499093973?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Le%20Mond." target="_blank" class="ds-btn-solid" onclick="toggleOverlayMenu()" style="font-size: 13px; padding: 12px 24px;">
                    Falar com a Le Mond
                </a>
            </li>
        </ul>
    </div>
`;

const footerHTML = `
    <!-- FOOTER -->
    <footer class="ds-footer">
        <div class="ds-container">
            <div class="ds-footer-grid">
                
                <!-- Col 1: Marca -->
                <div class="ds-footer-col ds-footer-brand-col">
                    <h2 class="ds-footer-logo">Le Mond</h2>
                    <p class="ds-footer-slogan">A curadoria do que fica.</p>
                </div>
                
                <!-- Col 2: Navegação Real -->
                <div class="ds-footer-col">
                    <h4 class="ds-footer-title">Navegação</h4>
                    <ul class="ds-footer-list">
                        <li><a href="index.html">Início</a></li>
                        <li><a href="moveis.html">Móveis</a></li>
                        <li><a href="estofados.html">Estofados &amp; Sofás</a></li>
                        <li><a href="mesas-e-buffets.html">Mesas &amp; Buffets</a></li>
                        <li><a href="decoracao.html">Décor &amp; Objetos</a></li>
                    </ul>
                </div>

                <!-- Col 3: Atendimento -->
                <div class="ds-footer-col">
                    <h4 class="ds-footer-title">Atendimento</h4>
                    <ul class="ds-footer-list">
                        <li>
                            <a href="https://wa.me/555499093973?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Le%20Mond." target="_blank" style="display: inline-flex; align-items: center; gap: 8px;">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink: 0;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.104 4.035 4.148-1.088z"/></svg>
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contato@lemond.com.br" style="display: inline-flex; align-items: center; gap: 8px;">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                E-mail
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Col 4: Showroom -->
                <div class="ds-footer-col ds-footer-showroom-col">
                    <h4 class="ds-footer-title">Showroom</h4>
                    <p class="ds-footer-text">
                        Rua Padre Damaso, 200 — esquina com Dr. Romário Martins<br>
                        Castro, PR
                    </p>
                </div>

            </div>

            <!-- Bottom Bar -->
            <div class="ds-footer-bottom">
                <p>Le Mond — Castro, PR &copy; Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
`;

// Inject components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('ds-header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    const footerPlaceholder = document.getElementById('ds-footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});

function toggleOverlayMenu() {
    const menu = document.getElementById('overlayMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

function toggleMobileSubmenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const btn = e.currentTarget;
    const subList = document.getElementById('mobileSubMenuMoveis');
    if (subList) {
        subList.classList.toggle('active');
        if (btn) btn.classList.toggle('active');
    }
}

/* Lightbox Modal for High-Res Image Zoom */
function openLightbox(imgSrc, caption) {
    let modal = document.getElementById('ds-lightbox-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'ds-lightbox-modal';
        modal.className = 'ds-lightbox-modal';
        modal.setAttribute('onclick', 'closeLightbox(event)');
        modal.innerHTML = `
            <button class="ds-lightbox-close" onclick="closeLightbox(event)">&times;</button>
            <div class="ds-lightbox-content" onclick="event.stopPropagation()">
                <img id="ds-lightbox-img" src="" alt="Ampliação Le Mond" />
                <span id="ds-lightbox-caption" class="ds-lightbox-caption"></span>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const img = document.getElementById('ds-lightbox-img');
    const cap = document.getElementById('ds-lightbox-caption');
    if (img) {
        img.src = imgSrc;
        if (cap) cap.textContent = caption || 'Ampliação — Le Mond';
    }
    
    // Trigger transition
    setTimeout(() => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);
}

function closeLightbox(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const modal = document.getElementById('ds-lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

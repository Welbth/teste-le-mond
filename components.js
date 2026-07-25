const headerHTML = `
    <!-- Header Navigation -->
    <header class="ds-header">
        <div class="ds-container ds-header-inner">
            <a href="#hero" class="ds-brand-logo-text" title="Le Mond">
                <span class="ds-brand-name">LE MOND</span>
                <span class="ds-brand-desc">Curadoria de Interiores</span>
            </a>

            <ul class="ds-nav-menu">
                <li class="ds-nav-item"><a href="#colecao" class="ds-nav-link">Coleção</a></li>
                <li class="ds-nav-item"><a href="#moveis" class="ds-nav-link">Móveis</a></li>
                <li class="ds-nav-item"><a href="#tapetes" class="ds-nav-link">Tapetes</a></li>
                <li class="ds-nav-item"><a href="#arte" class="ds-nav-link">Arte</a></li>
                <li class="ds-nav-item"><a href="#decor" class="ds-nav-link">Décor</a></li>
            </ul>

            <a href="#contato" class="ds-btn-solid ds-header-btn">
                Falar com a Le Mond
            </a>

            <button class="ds-menu-trigger" onclick="toggleOverlayMenu()">
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
            <li><a href="#colecao" onclick="toggleOverlayMenu()">Coleção</a></li>
            <li><a href="#moveis" onclick="toggleOverlayMenu()">Móveis</a></li>
            <li><a href="#tapetes" onclick="toggleOverlayMenu()">Tapetes</a></li>
            <li><a href="#arte" onclick="toggleOverlayMenu()">Arte</a></li>
            <li><a href="#decor" onclick="toggleOverlayMenu()">Décor</a></li>
            <li style="margin-top: 40px;">
                <a href="#contato" class="ds-btn-solid" onclick="toggleOverlayMenu()" style="font-size: 16px; padding: 15px 30px;">
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
                
                <!-- Col 2: Navegação -->
                <div class="ds-footer-col">
                    <h4 class="ds-footer-title">Navegação</h4>
                    <ul class="ds-footer-list">
                        <li><a href="#">Coleção</a></li>
                        <li><a href="#">Sofás & Estofados</a></li>
                        <li><a href="#">Poltronas & Cadeiras</a></li>
                        <li><a href="#">Mesas, Aparadores & Buffets</a></li>
                        <li><a href="#">Camas & Dormitório</a></li>
                        <li><a href="#">Iluminação</a></li>
                        <li><a href="#">Arte & Quadros</a></li>
                        <li><a href="#">Tapetes</a></li>
                        <li><a href="#">Décor & Objetos</a></li>
                    </ul>
                </div>

                <!-- Col 3: Institucional e Atendimento -->
                <div class="ds-footer-col">
                    <h4 class="ds-footer-title">Institucional</h4>
                    <ul class="ds-footer-list">
                        <li><a href="#">A Le Mond</a></li>
                        <li><a href="#">Atendimento</a></li>
                    </ul>

                    <h4 class="ds-footer-title" style="margin-top: 40px;">Atendimento</h4>
                    <ul class="ds-footer-list">
                        <li><a href="#">WhatsApp</a></li>
                        <li><a href="#">E-mail</a></li>
                        <li><a href="#">Telefone</a></li>
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
                <p>Le Mond — Castro, PR</p>
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

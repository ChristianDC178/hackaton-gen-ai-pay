// Personal Pay Mobile App JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Toggle balance visibility
    const toggleBalance = document.querySelector('.toggle-balance');
    const balanceAmount = document.querySelector('.balance-amount');
    let balanceVisible = true;

    toggleBalance.addEventListener('click', function() {
        if (balanceVisible) {
            balanceAmount.innerHTML = '••••••••';
            toggleBalance.className = 'far fa-eye-slash toggle-balance';
        } else {
            balanceAmount.innerHTML = '$19.256<sup>96</sup>';
            toggleBalance.className = 'far fa-eye toggle-balance';
        }
        balanceVisible = !balanceVisible;
    });

    // Bottom navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quick actions
    const actionItems = document.querySelectorAll('.action-item');
    actionItems.forEach(item => {
        item.addEventListener('click', function() {
            const actionName = this.querySelector('span').textContent;
            showToast(`Abriendo ${actionName}...`);
        });
    });

    // Balance actions
    const btnActions = document.querySelectorAll('.btn-action');
    btnActions.forEach(btn => {
        btn.addEventListener('click', function() {
            const actionText = this.textContent.trim();
            showToast(`Iniciando ${actionText}...`);
        });
    });

    // Activity items
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            showToast('Ver detalles de la transacción');
        });
    });

    // See all activity
    const seeAll = document.querySelector('.see-all');
    seeAll.addEventListener('click', function() {
        showToast('Cargando todos los movimientos...');
    });

    // Notification and settings
    const notificationIcon = document.querySelector('.notification-icon');
    const settingsIcon = document.querySelector('.settings-icon');

    notificationIcon.addEventListener('click', function() {
        showToast('Abriendo notificaciones');
    });

    settingsIcon.addEventListener('click', function() {
        showToast('Abriendo configuración');
    });

    // Toast notification function
    function showToast(message) {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Toast styles
        toast.style.cssText = `
            position: fixed;
            bottom: 120px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            font-size: 14px;
            z-index: 1000;
            animation: toastIn 0.3s ease-out;
        `;

        // Add toast animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes toastIn {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(toast);

        // Remove toast after 2 seconds
        setTimeout(() => {
            toast.style.animation = 'toastIn 0.3s ease-out reverse';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 2000);
    }

    // Add pull-to-refresh simulation
    let startY = 0;
    let currentY = 0;
    let pulling = false;

    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function(e) {
        currentY = e.touches[0].clientY;
        if (currentY - startY > 100 && window.scrollY === 0) {
            pulling = true;
        }
    });

    document.addEventListener('touchend', function() {
        if (pulling) {
            showToast('Actualizando datos...');
            pulling = false;
        }
    });

    // Level badge click
    const levelBadge = document.querySelector('.level-badge');
    levelBadge.addEventListener('click', function() {
        showToast('¡Felicitaciones por tu Nivel 2!');
    });

    // Visa promo click
    const visaPromo = document.querySelector('.visa-promo');
    visaPromo.addEventListener('click', function() {
        showToast('Redirigiendo a solicitud de tarjeta VISA...');
    });

    // Recommendation click
    const recommendationItem = document.querySelector('.recommendation-item');
    recommendationItem.addEventListener('click', function() {
        showToast('Abriendo opciones de inversión...');
    });

    // Pepa helper click
    const pepaHelper = document.querySelector('.pepa-helper');
    pepaHelper.addEventListener('click', function() {
        showToast('¡Hola! Soy Pepa, tu asistente de ahorros');
    });
});
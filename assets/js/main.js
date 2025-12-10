(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    //velocidad del logo
    const vid = document.getElementById("milogo");
    vid.playbackRate = 1.1; // 1.1x más rápido


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // Valores carousel (NUEVO)
    $(".valores-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 2000,
        margin: 24,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Carrusel de Momentos Memorables
    $(".momentos-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        margin: 25,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Carrusel de Datos Curiosos
    $(".datos-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        margin: 30,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Efecto hover suave en cards
    $('.card').hover(
        function () {
            $(this).addClass('shadow-lg').css('transform', 'translateY(-10px)');
        },
        function () {
            $(this).removeClass('shadow-lg').css('transform', 'translateY(0)');
        }
    );

    // Formatear número de tarjeta
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;

        // Actualizar vista previa
        document.getElementById('cardPreview').textContent = formattedValue || '•••• •••• •••• ••••';
    });

    // Actualizar nombre
    document.getElementById('cardName').addEventListener('input', function (e) {
        document.getElementById('namePreview').textContent = e.target.value.toUpperCase() || 'TITULAR';
    });

    // Formatear fecha de vencimiento
    document.getElementById('expiryDate').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
        document.getElementById('expiryPreview').textContent = value || 'MM/AA';
    });

    // Solo números en CVV
    document.getElementById('cvv').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Procesar pago
    function processPayment() {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardName = document.getElementById('cardName').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const amount = document.getElementById('amount').value;

        if (!cardNumber || !cardName || !expiryDate || !cvv || !amount) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Simular procesamiento
        alert('Pago procesado exitosamente!\nMonto: $' + amount);


        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
        modal.hide();

        // Limpiar formulario
        document.getElementById('paymentForm').reset();
        document.getElementById('cardPreview').textContent = '•••• •••• •••• ••••';
        document.getElementById('namePreview').textContent = 'TITULAR';
        document.getElementById('expiryPreview').textContent = 'MM/AA';
    }
})(jQuery);


$(document).ready(function() {

    // Despliega el panel al dar click en el boton
    $('#menu').click(function(){
        $('.indice').toggleClass('show');
    });

    // Esconde el panel al dar click en algún link
    $('.links').click(function(){
        if($('.indice').hasClass('show')){
            $('.indice').removeClass('show');
        }
    });

    // Validación de datos

    const setError = (element, message) => {
        const inputControl = element.parent();
        const errorDisplay = inputControl.find('.error');

        errorDisplay.text(message);
        inputControl.addClass('error');
        inputControl.removeClass('success');
    }

    const setSuccess = (element) => {
        const inputControl = element.parent();
        const errorDisplay = inputControl.find('.error');

        errorDisplay.text('');
        inputControl.addClass('success');
        inputControl.removeClass('error');
    };

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const emailValue = $('#email').val().trim();

        if(emailValue === '') {
            setError($('#email'), 'Introduce un correo');
        } else if (!isValidEmail(emailValue)) {
            setError($('#email'), 'Introduce un correo valido');
        } else {
            setSuccess($('#email'));
        }

    };

    $('.form').on('submit', function(e) {
        e.preventDefault();
        validateInputs();
    });

    // Slider

    var index = 0;
    var slides = $('.slide');
    var totalSlides = slides.length;

    $('.slider-next').click(function() {
        index++;
        changeSlide();
    });

    $('.slider-prev').click(function() {
        index--;
        changeSlide();
    });

    function changeSlide() {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index === totalSlides) {
            index = 0;
        }
        $('.slider').css('transform', 'translateX(' + (-index * 100) + '%)');
    }

});

   
        //  dang ky
    const btnres = document.querySelector('.js-res')
    const clickres = document.querySelector('.js-modal__res')
    const close = document.querySelector('.js-bnt-body-controls')
    const modalcontainer = document.querySelector('.js-modal__body')


    function showmodal () {
        clickres.classList.add('open--res');
    }
    function remove () {
        clickres.classList.remove('open--res');
    }


    btnres.addEventListener('click', showmodal)

    close.addEventListener('click', remove)
    clickres.addEventListener('click', remove)

    modalcontainer.addEventListener('click', function(Event) {
        Event.stopPropagation()
    })


    // dag nhap
    const btnlog = document.querySelector('.js-login')
    const clicklog = document.querySelector('.js-modal__login')
    const closelog = document.querySelector('.js-controls')
    const modalog = document.querySelector('.js-authen__form')

    function showmlogin () {
        clicklog.classList.add('open--login');
    }
    function removelog () {
        clicklog.classList.remove('open--login');
    }
    


    btnlog.addEventListener('click', showmlogin)

    closelog.addEventListener('click', removelog)
    clicklog.addEventListener('click', removelog)

    modalog.addEventListener('click', function(Even){
        Even.stopPropagation()
    })
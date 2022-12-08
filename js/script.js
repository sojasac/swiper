new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // // Буллеты
        // clickable: true,
        // // Динамические буллеты
        // dynamicBullets: true,
        // // Кастомные буллеты
        // renderBullet: function (index, className){
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
        // Фракция
        type: 'fraction',
        renderFraction: function (currentClass, totalClass){
            return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
        },
        // Прогрессбар
        // type: 'progressbar'
    

    },
    scrollbar:{
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },
    mousewheel:{
        sensitivity: 1,
        eventsTarget: ".image-slider"
    },
    autoHeight: true,
    slidesPerView: 1,
    whatchOverflow: true,
    // Отступ
    // spaceBetween: 30,
    spaceBetween: 0,
    // Центрируем
    centeredSlides: true,
    initialSlide: 0,
    // Бесконечный слайдер
    loop: false,
    // Листаем как ленту
    freeMode: true,
    // Автопрокрутка
    autoplay:{
        // Пауза
        delay: 1000,
        // Закончить на посленем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        desableOnInteraction: false,
    },
    // Скорость
    speed: 800,
    // Эффекты переклюения слайдов
    // effect: 'flip',
    // flipEffect: {
    //     // Тень
    //     slideShadows: true,
    //     // Показ только активного слайда
    //     limitRotation: true,
    // }
    effect: 'cube',
    cubeEffect: {
        // Тень
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});
document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelector('.header__burger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.header__menu').classList.toggle('active');
            document.querySelector('body').classList.toggle('lock');
        });

/*--------------Swiper----------------*/

new Swiper('.image-slider',{
    //Стрелки:
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    slidesPerView: 1, 
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    thumbs:{
    swiper: {
        el: '.image-mini-slider',
        slidesPerView: 6,
    }
   },
 

  });    

/*---------------Аккордион--------------------*/
const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

    titles.forEach(item => item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => element.classList.remove('active'));

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    }))

// document.querySelector('[data-tab="tab-3"]').classList.add('active');
// document.querySelector('#tab-3').classList.add('active');
// document.querySelector('#tab-3').style.maxHeight = document.querySelector('#tab-3').scrollHeight + 'px';
/*------------------Радиокнопки-------------------*/
    $.each($('.feedback__radio-item'), function(index,val){
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $(document).on('click','.feedback__radio-item', function(event) {
        $(this).parents('.feedback__fieldset').find('.feedback__radio-item').removeClass('active');
        $(this).parents('.feedback__fieldset').find('.feedback__radio-item input').prop('checked',false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);
        return false;
    })  


/*------------------------------------*/
})

$(document).ready(() => {

    // scroll menu
    $(document).on('click', '.sectmenu__item a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    })

    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });


   
    
    // popap

    $('.show_popap').click(function() {
        $('.modalDialogcustom').addClass('modalDialogcustom_active');
        $('body').css('overflow', 'hidden')
    });

    $('.contentpopap__cancel').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });

    $('.shadow_popap').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });


    
   



    var menu = ['Process Name', 'Process Name', 'Process Name', 'Process Name', 'Process Name'];
   

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
            el: '.swiper-pagin',
            clickable: true,
                renderBullet: function (index, className) {
                    return '<li class="' + className +  '"> <span>'+ (menu[index]) + '</span></li>';
            },
            
        }
        
      });


      


});

                                                                        

                                                                           

                                        


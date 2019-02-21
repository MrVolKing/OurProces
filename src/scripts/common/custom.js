$(document).ready(() => {

    // popap

    $('.boottomcontent__button button').click(function() {
        $('.modalDialogcustom').addClass('modalDialogcustom_active');
        $('.boottomcontent').addClass('content_hidden');
        $('.boottomcontent__bottom').addClass('content_hidden');
        $('.footer').addClass('content_hidden');
    });

    $('.contentpopap__close').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('.boottomcontent').removeClass('content_hidden');
        $('.boottomcontent__bottom').removeClass('content_hidden');
        $('.footer').removeClass('content_hidden');
    });

    
    // scroll top
    $(function(){
        $('.arr_top').click(function(){
            $('html,body').animate({scrollTop: 0}, 1000);
        });
      });

    

    // validations

    $('.form__button button').click(function(e) {
        e.preventDefault();

        $('.inp_name').addClass('error');
        $('.inp_mail').addClass('error');
        $('.inp_phone').addClass('error');
 
    });
    
   


    // slider
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

                                                                        

                                                                           

                                        


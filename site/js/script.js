var bgimgs = [];

$(function(){
/*################################################*/
  /*################################################*/
    /*################################################*/
      /*################################################*/
  /* framework plugins */

  if( $('[data-scroll]').length>0 ){
    smoothScroll.init({
      offset: 58
    });
  }


  // FORMULARIO SIMPLE

  if($('form.simple').length>0){
    var resultado;
    $('form.simple').submit(function(e){
      var _this = $(this);
      e.preventDefault();
      var datos = $(this).serialize();
      _this.find('.resultado').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
      $.get('http://www.dragonbarbudo.com/api/email.php?'+datos, function(result){
        resultado = JSON.parse(result);
        if( resultado[0].status === "sent" ){
          _this.find('.resultado').html('Mensaje correctamente enviado.');
        } else {
          _this.find('.resultado').html('Ocurrió un error. Inténtelo de nuevo más tarde.');
        }
      });
    });
  }


  // SCROLLREVEAL
  if($('[data-sr]').length>0){
    window.sr = new scrollReveal({
      reset:true,
      mobile:true
    });
  }


  // BACKSTRETCH

  if($('.bgslider').length>0){

      $('.bgslider').each(function(index){
        bgimgs[index] = [];
        $(this).children('div').each(function(){
          bgimgs[index].push($(this).attr('data'));
        });
        $( $(this).attr('data') ).backstretch(bgimgs[index], {duration: 3000, fade: 750});
      });

   }

  // MODALBOX

  if($('.box').length>0){
    $('.box').swipebox();
  }

  // SLIDERS
  if($('.slider.one').length>0){
    $('.slider.one').slick({
      prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
      nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
      autoplay: false
    });
  }

  if($('.slider.multiple, .slider.multiplebox').length>0){
    $('.slider.multiple, .slider.multiplebox').slick({
      prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
      nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        { breakpoint: 960, settings: { slidesToShow: 2,   slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    });
  }



      /*################################################*/
    /*################################################*/
  /*################################################*/
/*################################################*/
  /* custom */


$('.openD').click(function(e){
  e.preventDefault();
  var openthis = $(this).attr('href');
  $(openthis).animate({left:0}, 300);
  $('.close').click(function(){
    console.log(openthis);
    $(openthis).animate({left:'100%'}, 300);
  });
});



var sticky = new Waypoint.Sticky({
  element: $('header')
});

state('inicio');
//state('nosotros');
state('experiencia');
state('procedimientos');
state('beneficios');
state('galeria');
state('contacto');


$('#nosotros').waypoint(function(){
  //$('#video video').get(0).play();
});

  $('#video').click(function(){
    $('#video video').get(0).play();
  });
  

}); // JQUERY END


function state(what){
  $('#'+what).waypoint(function(){
      console.log(what);
      $('.active').removeClass('active');
      $('[href="#'+what+'"]').addClass('active');
      history.replaceState( {} , 'foo', '#'+what );
  }, {offset:'100px'});
}

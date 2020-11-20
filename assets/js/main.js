/**
 * Carousel random put info
 */
$(document).ready(function() {
  //	declare variables
  var div_item_n = []
  var img_path = []
  var caroucel_items = []
  var n = 0
      //	getting data from item list
      //	getting items list
  var container = document.querySelector('#myItems');
  //	making array of items
  var matches_button = container.querySelectorAll('li>button');
  var matches_img = container.querySelectorAll('div.card > img');
  //	making array id from div
  $.each(matches_button, function(ind, elem) {
          div_item_n.push($(elem).attr("data-target"))
      })
      //	making array src path from item
  $.each(matches_img, function(ind, elem) {
          img_path.push(elem.src)
      })
      //	carousel insert data
      //	getting carousel list
  var container_carosuels = document.querySelector('.carousel-inner');
  //	making array of items for buttom target and Img source
  var matches_img_carousels = container_carosuels.querySelectorAll('button.carousel_modal > img');
  var matches_d_target_carousels = container_carosuels.querySelectorAll('button.carousel_modal');
  //	put random source to carousel src
  $.each(matches_img_carousels, function(ind, elem) {
      var r_number = Math.floor(Math.random() * img_path.length);
      $(elem).attr('src', img_path[r_number])
      $(matches_d_target_carousels[n]).attr('data-target', div_item_n[r_number])
      n += 1
  })
})
//paginator-search function

$(document).ready(function() {
  // scroll down
  $("body").animate({
      scrollTop: $(document).height()
  }, 9000)
});

$(function() {

  var flexiblePagination = $('#myItems').flexiblePagination({
      itemsPerPage: 8,
      itemSelector: 'div.result:visible',
      pagingControlsContainer: '#pagingControls',
      showingInfoSelector: '#showingInfo',

      css: {
          btnNumberingClass: 'btn btn-outline-primary',
          btnActiveClass: "btn btn-primary",
          btnFirstClass: 'btn btn-outline-primary',
          btnLastClass: 'btn btn-outline-primary',
          btnNextClass: 'btn btn-outline-primary',
          btnPreviousClass: 'btn btn-outline-primary',
      }
  });

  flexiblePagination.getController().onPageClick = function(pageNum, e) {
      console.log('You Clicked Page: ' + pageNum)
      $('html, body').animate({ scrollTop: 200 }, 'smooth');
  };


});

//finish of paginator search

//carousel automatic change for slab and sink


//My modal config
//Modal-1
$(document).ready(function(){
  $("#myBtn_m_1").click(function(){
    $("#myModal").modal();
  });
	  $("#myBtn_m_2").click(function(){
    $("#myModal").modal();
  });
	  $("#myBtn_m_3").click(function(){
    $("#myModal").modal();
  });
});
//Modal-2
$(document).ready(function(){
  $("#myBtn2_m_1").click(function(){
    $("#myModal_2").modal();
  });
	  $("#myBtn2_m_2").click(function(){
    $("#myModal_2").modal();
  });
	  $("#myBtn2_m_3").click(function(){
    $("#myModal_2").modal();
  });
});

//Modal-3
$(document).ready(function(){
  $("#myBtn3_m_1").click(function(){
    $("#myModal_3").modal();
  });
	  $("#myBtn3_m_2").click(function(){
    $("#myModal_3").modal();
  });
	  $("#myBtn3_m_3").click(function(){
    $("#myModal_3").modal();
  });
});

//My button menu animation
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.container_button').fadeIn('slow');
    } else {
      $('.container_button').fadeOut('slow');
    }
  });
//  $('.back-to-top').click(function() {
//    $('html, body').animate({
//      scrollTop: 0
//    }, 1500, 'easeInOutExpo');
//    return false;
//  });
//
//  var nav = $('nav');
//  var navHeight = nav.outerHeight();

//facebook messenger strat



//My modal config end
/**
* Template Name: EstateAgency - v2.1.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  /*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
  window.sr = ScrollReveal();
  sr.reveal('.foo', {
    duration: 1000,
    delay: 15
  });

  /*--/ Carousel owl /--*/
  $('#carousel').owlCarousel({
    loop: true,
    margin: -1,
    items: 1,
    nav: true,
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  /*--/ Animate Carousel /--*/
  $('.intro-carousel').on('translate.owl.carousel', function() {
    $('.intro-content .intro-title').removeClass('animate__zoomIn animate__animated').hide();
    $('.intro-content .intro-price').removeClass('animate__fadeInUp animate__animated').hide();
    $('.intro-content .intro-title-top, .intro-content .spacial').removeClass('animate__fadeIn animate__animated').hide();
  });

  $('.intro-carousel').on('translated.owl.carousel', function() {
    $('.intro-content .intro-title').addClass('animate__zoomIn animate__animated').show();
    $('.intro-content .intro-price').addClass('animate__fadeInUp animate__animated').show();
    $('.intro-content .intro-title-top, .intro-content .spacial').addClass('animate__fadeIn animate__animated').show();
  });

  /*--/ Navbar Collapse /--*/
  $('.navbar-toggle-box-collapse').on('click', function() {
    $('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
  });
  $('.close-box-collapse, .click-closed').on('click', function() {
    $('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
    $('.menu-list ul').slideUp(700);
  });

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).bind('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-default').addClass('navbar-reduce');
      $('.navbar-default').removeClass('navbar-trans');
    } else {
      $('.navbar-default').addClass('navbar-trans');
      $('.navbar-default').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Property owl /--*/
  $('#property-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*--/ Property owl owl /--*/
  $('#property-single-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  /*--/ News owl /--*/
  $('#new-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*--/ Testimonials owl /--*/
  $('#testimonial-carousel').owlCarousel({
    margin: 0,
    autoplay: true,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

})(jQuery);
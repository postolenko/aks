function getHeaderSiteParams() {
  $(".wrapper").css({
    "padding-top" : $(".header_site_wrapp").height() + "px"
  });
}

function getFiltersSliderParams() {
    if( $(".filters_link").length > 0 ) {
      if( bodyWidth <= 900) {
        $(".filters_link").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            speed: 600,
            infinite: false,
            variableWidth: true
        });
      } else if( $(".filters_link").hasClass("slick-initialized")) {
          $(".filters_link").slick("unslick");
      }
    }
}

function getProjectsSlider() {
    if( $(".projects_thumbnails").length > 0 ) {
      if(bodyWidth <= 768) {
        $(".projects_thumbnails").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            speed: 600,
            infinite: false,
            variableWidth: true
        });
      } else if( $(".projects_thumbnails").hasClass("slick-initialized")) {
          $(".projects_thumbnails").slick("unslick");
      }
  }
}

function getPortfolioSlider() {
    if( $(".resp_portfolio_slider").length > 0 ) {
      if(bodyWidth <= 768) {
        $(".resp_portfolio_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            speed: 600,
            infinite: true,
            variableWidth: true
        });
      } else if( $(".resp_portfolio_slider").hasClass("slick-initialized")) {
          $(".resp_portfolio_slider").slick("unslick");
      }
  }
}

function getSertificatesSlider() {
    if( $(".sertificates_resp_sl").length > 0 ) {
      if(bodyWidth <= 768) {
        $(".sertificates_resp_sl").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            speed: 600,
            infinite: false,
            variableWidth: true
        });
      } else if( $(".sertificates_resp_sl").hasClass("slick-initialized")) {
          $(".sertificates_resp_sl").slick("unslick");
      }
  }
}

function getTestimonialSlider() {
    if( $(".testimonials_thumbails").length > 0 ) {
      if(bodyWidth <= 768) {
        $(".testimonials_thumbails").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            speed: 600,
            infinite: false,
            variableWidth: true
        });
      } else if( $(".testimonials_thumbails").hasClass("slick-initialized")) {
          $(".testimonials_thumbails").slick("unslick");
      }
  }
}

function getPopupSlider() {
    if( $(".popup_slider").length > 0 ) {
      if(bodyWidth <= 768) {
        $(".popup_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            speed: 600,
            infinite: true,
            variableWidth: true
        });
      } else if( $(".popup_slider").hasClass("slick-initialized")) {
          $(".popup_slider").slick("unslick");
      }
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var attr, dataTab, subInner;


$(window).load(function() {



});

$(window).resize(function() {

  getHeaderSiteParams();
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getFiltersSliderParams();
  getProjectsSlider();
  getPortfolioSlider();
  getSertificatesSlider();
  getTestimonialSlider();
  getPopupSlider();

});

$(document).scroll(function() {



});

$(document).ready(function() {

    getHeaderSiteParams();
    getFiltersSliderParams();
    getProjectsSlider();
    getPortfolioSlider();
    getSertificatesSlider();
    getTestimonialSlider();
    getPopupSlider();

    if( $(".promo_slider").length > 0 ) {
        var indexActive;
        $(".promo_slider").on('init', function() {
            indexActive = parseInt($(".promo_slider .slick-current").attr("data-slick-index"));
            $(".current_page").html(indexActive+1);
            $(".count_pages").html($(".promo_slider .slide").length);
        });

        $('.promo_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
          $(".current_page").html(currentSlide+1);
        });

        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }


    if( $(".portfolio_slider").length > 0 ) {
        $(".portfolio_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
             {
               breakpoint: 900,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 640,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
        });
    }

    if( $(".steps_slider").length > 0 ) {
        $(".steps_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
             {
               breakpoint: 900,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
        });
    }


    if( $(".big_slider").length > 0 ) {
        $(".big_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.miniature_slider',
            responsive: [
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows: true
               }
             }
           ]
        });

        $(".miniature_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: '.big_slider',
            responsive: [
             {
               breakpoint: 900,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 767,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
               }
             }
           ]
        });
    }


    // ---------------

    $(".active_val").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".dropdown_select");
        if(parentBlock.hasClass("active")) {
            parentBlock.removeClass("active");
        } else {
            $(".dropdown_select").removeClass("active");
            parentBlock.addClass("active");
        }        
    });

    $(".vals_list li").on("click", function(e) {
        e.preventDefault();
        value = $(this).html();
        parentBlock = $(this).closest(".dropdown_select");
        activeValue = parentBlock.find(".active_val");
        if(activeValue.find("input").length > 0) {
          value = value.replace(/^\s+/g,'').replace(/\s+$/g,'');
          parentBlock.find("input").attr("value", value);
        } else {
          activeValue.html(value);
        }
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_select");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".dropdown_select").removeClass("active");
        }
    });

    // -----------------------

    $(".main_nav_resp li a").on("click", function(e) {
      parentBlock = $(this).closest("li");
      if( parentBlock.find(".sub_menu").length > 0 ) {
        e.preventDefault();
        $(this).toggleClass("active");
      }
    });

    // $(document).mouseup(function (e){
    //     hide_element = $(".main_nav li");
    //     if (!hide_element.is(e.target)
    //         && hide_element.has(e.target).length === 0 ) {
    //         var mainNav = hide_element.closest(".main_nav");
    //         mainNav.find(".sub_menu").each(function() {
    //             if($(this).is(":visible")) {
    //                 parentBlock = $(this).closest("li");
    //                 parentBlock.find("a").removeClass("active");
    //                 // $(this).removeClass("active");
    //                 // parentBlock.find(".resp_btn").removeClass("active");
    //             }
    //         });
    //     }
    // });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $(".nav_tabs_wrapp").each(function() {
          dataTab = $(this).attr("data-tabs");
          $("[data-tabs-link = '"+ dataTab +"']").removeClass("active");
          $(this).removeClass("visible");
        });
      }
    });

    // ----------

    $(".main_nav a").on("click", function(e) {
      attr = $(this).attr('data-tabs-link');   
      if (typeof attr !== typeof undefined && attr !== false) {
        e.preventDefault();
        dataTab = $("[data-tabs = '"+$(this).attr("data-tabs-link")+"']");
        if($(this).hasClass("active")) {
          $(this).removeClass("active");
          dataTab.removeClass("visible");
        } else {
          $(this).addClass("active");
          dataTab.addClass("visible");
          dataTab.css({
            "min-height" : $(window).height() - $(".header_site_wrapp").height() + "px"
          });
        }
      }
    });

    $(".sub_menu a").on("click", function(e) {
      e.preventDefault();
      attr = $(this).attr("href");
      $(".sub_menu a").removeClass("active");
      if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".sub_inner"+attr).removeClass("visible");
      } else {
        $(this).addClass("active");
        $(".sub_inner"+attr).addClass("visible");
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $(".sub_menu a").removeClass("active");
        $(".sub_inner").removeClass("visible");
      }
    });

    $(".sub_inner .back_btn").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".sub_inner");
      attr = parentBlock.attr("id");
      setTimeout(function() {
        $("a[href='"+ attr +"']").removeClass("active");
      }, 500);      
      parentBlock.removeClass("visible");
      console.log(attr);
    });

    // -- Tabs --

    $(".tabs").each(function() {
        $(this).find(".tab_link").each(function() {
            if( $(this).hasClass("active") ) {
                indexActiveTab = $(this).index(".tab_link");
                $(this).click();
                return false;
            } else {
                indexActiveTab = 0;
            }
        });
        attrForTabLink = $(this).find(".tab_link").eq(indexActiveTab).attr("for");
        activeTabRadio = $(this).find(".radio_tab[id = '"+ attrForTabLink +"']");
        activeTabRadio.prop("checked", true);
        $(this).find(".tab_link").eq(indexActiveTab).addClass("active");
        $(this).addClass("activated");

    });

    $(".tab_link").click(function (e) {
        if( $(this).hasClass("active") ) {
            e.preventDefault();
        } else {
            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio_tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);
            tabsParent.find(".tab_link").each(function () {                
                if( $(this).hasClass("active") ) {
                    $(this).removeClass("active");
                }
            });
            $(this).addClass("active");
        }
    });

    // ----------------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });

    $("#resp_nav .close_btn").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") ) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ----------------

   // $("input[type='file']").dropzone({
    $(".upload_file label").dropzone({
      url: "/file/post",
      // init: function() {
      //   this.on("addedfile", function(file) { 
      //     // id = this.element.attributes.for.value;
      //     // $("[for = '"+id+"']").html(file.name);
      //     // this.html(file.name);
      //     // this.element.innerHTML = file.name;
      //     // console.log(file);
      //     // console.log(file.name);
      //     console.log(file.previewTemplate);
      //     // console.log(file.name);
      //   });
      // },
      // prepviewTemplate: this.element,
      addedfile: function(file) {
        // console.log(this);
        console.log(file);
        // file.previewElement = Dropzone.createElement(this.options.previewTemplate);
        // // Now attach this new element some where in your page
        // console.log(file.previewElement);
      }
    });

});

if($("#map").length > 0) {

  function initMap() {

    var image = "img/map.svg";
    var styles = [
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#e9e9e9"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#333333"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f2f2f2"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.936634, lng: 37.8209713},
    scrollwheel: false,
    scaleControl: false,
    zoom: 10.2,
    styles: styles
  });

  var contentString = '<div class="marker_desc">'+
                        '<div class="inner">'+
                          '<h3>Москва</h3>'+
                          '<p>улица Казакова, 8с2</p>'
                        '</div>'+
                      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    pixelOffset: new google.maps.Size(11, 32),
    disableAutoPan: false,
    zIndex: null,
    enableEventPropagation: false
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 55.7626897, lng: 37.6590828},
    icon: image,
    title: ''
  });

  infowindow.open(map, marker);

  var contentString2 = '<div class="marker_desc">'+
                        '<div class="inner">'+
                          '<h3>г. Балашиха</h3>'+
                          '<p>ул. Звёздная, д. 13</p>'
                        '</div>'+
                      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    pixelOffset: new google.maps.Size(11, 32),
    disableAutoPan: false,
    zIndex: null,
    enableEventPropagation: false
  });

  marker2 = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 55.829208, lng: 37.9467226},
    icon: image,
    title: ''
  });

  infowindow2.open(map, marker2);

  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    if (marker2.getAnimation() !== null) {
      marker2.setAnimation(null);
    } else {
      marker2.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
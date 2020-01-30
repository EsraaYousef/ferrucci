$(document).ready(function() {
  setTimeout(function() {
    new WOW().init();
  }, 900);

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });

  // mobile menu
  // $(".menu-wrapper").on("click", function() {
  //   $(".menu-wrapper").toggleClass("open");
  //   $(".hamburger-menu").toggleClass("animate");
  //   $(".navbar-nav").toggleClass("open");
  //   $("html").toggleClass("noscroll");
  //   $(".navbar-brand img.only-mobile").toggleClass("hidden");
  // });
  $(".second-menu").on("click", function() {
    $(".second-menu").addClass("open");
    $(".navbar-nav").addClass("open");
    $("html").addClass("noscroll");
    $("body").addClass("w-overlay");
  });
  $(".close-menu").on("click", function() {
    $(".second-collapse").removeClass("show");
    $(".second-menu").removeClass("open");
    $(".navbar-nav").removeClass("open");
    $("html").removeClass("noscroll");
    $("body").removeClass("w-overlay");
  });

  // search popup
  $(".search-btn").on("click", function() {
    $(".search-wrapper").toggleClass("active");
    $(".search-popup--bg").toggleClass("active");
    $(".search-form").toggleClass("active");
  });
  $(".close-search").on("click", function() {
    $(".search-wrapper").removeClass("active");
    $(".search-popup--bg").removeClass("active");
    $(".search-form").removeClass("active");
    $(".search-form").fadeOut();
  });

  // scrollToTop
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  $(".scrollToTop").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      200
    );
    return false;
  });

  // first slider
  $(".first-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    rtl: true,
    items: 1,
    stagePadding: 200,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
        margin: 15
      },
      575: {
        items: 1,
        stagePadding: 30,
        margin: 15
      },
      767: {
        items: 1,
        stagePadding: 80
      },
      991: {
        items: 1,
        stagePadding: 120
      },
      1100: {
        items: 1,
        stagePadding: 200
      }
    }
  });

  // second slider
  $(".second-slider").slick({
    rtl: true,
    dots: true,
    lazyLoad: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // partners slider
  $(".brands-slider").slick({
    rtl: true,
    dots: false,
    arrows: true,
    lazyLoad: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    loop: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  // lazyload
  lozad(".lozad", {
    load: function(o) {
      (o.src = o.src),
        (o.onload = function() {
          o.classList.add("show-lazy");
        });
    }
  }).observe();

  /*====== Data Filters Setting ======*/
  $(function() {
    var links = $(".data-filters-product-links");
    links.on("click", "li", function() {
      var links = $(".data-filters-product-links li");
      var items = $(".data-filters-product-items li");
      var filter = $(this).attr("data-filter");
      links.removeClass("active");
      $(this).addClass("active");
      if (filter == "all") {
        items.show();
      } else {
        items.hide();
        $(".data-filters-product-items li[data-filter=" + filter + "]").show();
      }
    });
  });

  /*====== Data Filters cart ======*/
  $(function() {
    var links = $(".data-filters-product-links");
    links.on("click", "li", function() {
      var links = $(".data-filters-product-links li");
      var items = $(".data-filters-product-items table tbody tr");
      var filter = $(this).attr("data-filter");
      links.removeClass("active");
      $(this).addClass("active");
      if (filter == "all") {
        items.show();
      } else {
        items.hide();
        $(".data-filters-product-items table tbody tr[data-filter=" + filter + "]").show();
      }
    });
  });

  // select
  $(".single-select").select2();

  // liked
  $(".fav-link").on("click", function(e) {
    $(this).toggleClass("liked");
    e.preventDefault();
  });

  // match height
  $(function() {
    $(".single-brand p").matchHeight();
  });

  //remove address
  $(".remove-address").click(function() {
    $(this)
      .closest(".form-group")
      .fadeOut()
      .remove();
  });

  $(".add-address-btn").click(function() {
    $(".edit-adress-block").append('<div class="form-group w-icon w-border"><span class="map-icon"><i class="fa fa-map-marker-alt"></i></span><input type="text" class="form-control no-shadow" placeholder="25 شارع الملك عبد العزيز - الرياض , السعودية"> <span class="remove-address auto-icon"><i class="fa fa-times"></i></span></div>')
  });

  //remove favourite item
  $(".remove-address").click(function() {
    $(this)
      .closest(".product-item").parent()
      .fadeOut()
      // .remove();
  });
  //remove shopped item
  $(".remove-item").click(function() {
    $(this)
      .closest(".shopping-list")
      .delay(500)
        .queue(function() {
            $(this).remove();
      });
  });

  //remove item cart
  $(".remove-item").click(function() {
    $(this)
      .closest(".single-item")
      .fadeOut()
      // .remove();
  });
});

// loading window
$(window).on("load", function() {
  $("body").css("overflow", "hidden");
  $(".loading-window")
    .delay(1000)
    .fadeOut("slow", function() {
      $(".loading-window").fadeOut();
      $("body").css("overflow-y", "auto");
    });
});

// upload img
$(document).ready(function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });
});

$(document).ready(function(){
  $('.prview-img').slick({
    rtl: true,
    dots:false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.all-previews',
  });
  $('.all-previews').slick({
    rtl: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.prview-img',
    focusOnSelect: true,
    responsive: [
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
          slidesToScroll: 1
      }
    },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // liked-btn
  $(".liked-btn").click(function() {
    $(this).toggleClass('liked');
  });

   //plus minus input
   $(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
});


//form validtion
(function () {
  'use strict';
  window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();
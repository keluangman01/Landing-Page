$(document).ready(function(){

    $(window).on("scroll",function(){
        if ($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
        $(".navbar-nav").on("click",function(){
          $(".navbar-collapse").collapse("hide")
        });
    });

    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });


    
    $('.advantage-carousel').owlCarousel({
      loop:true,
      margin:0,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          1000:{
              items:3,
          },
      }
    });

    $('.screenshots-carousel').owlCarousel({
      loop:true,
      margin:0,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:5,
          },
      }
    });
    
    $('.client-carousel').owlCarousel({
      loop:true,
      margin:0,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:5,
          },
      }
    });
    
    $('.testimonials-carousel').owlCarousel({
      loop:true,
      margin:0,
      autoplay:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
            items:3,
        },
      }
    });


    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
      });
    });
    
    $.scrollTop({
      topOffset: -50
    });

    $(".nav-link").on("click",function(){
      $(".navbar-collapse").collapse("hide");
    });

function toggleTheme(){
  if(localStorage.getItem("shala-theme") !== null ){
    if(localStorage.getItem("shala-theme") === "dark" ){
      $("body").addClass("dark");
    }
    else{
      $("body").removeClass("dark")
    }
  }
  updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click",function(){
  $("body").togglerClass("dark");
  if($("body").hasClass("dark")){
    localStorage.seyItem("shala-theme","dark")
  }
  else{
    localStorage.setItem("shala-theme","light")
  }
  updateIcon();
});
function updateIcon(){
  if($("body").hasClass("dark")){
    $(".toggle-theme i").removeClass("bi-moon-fill");
    $(".toggle-theme i").addClass("fa-sun");
  }
  else{
    $(".toggle-theme i").removeClass("fa-sun");
    $(".toggle-theme i").addClass("bi-moon-fill");
  }
}

});

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
    
    
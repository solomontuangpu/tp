$(document).ready(function(){
    $('.js-tilt').tilt({
        scale: 1.03,
        speed: 500,
        glare: true,
        transition: true,
        maxGlare: 0.5
  })

    // skill progress bar start
    $('#bar1').barfiller({
        barColor: '#12aef9',
        duration: 2000,
        animateOnResize: true,
        });
    $('#bar2').barfiller({
        barColor: '#12aef9',
        duration: 2000,
        animateOnResize: true,
        });
    $('#bar3').barfiller({
        barColor: '#12aef9',
        duration: 2000,
        animateOnResize: true,
        });
    $('#bar4').barfiller({
        barColor: '#12aef9',
        duration: 2000,
        animateOnResize: true,
        });
    $('#bar5').barfiller({
        barColor: '#12aef9',
        duration: 2000,
        animateOnResize: true,
        });
    $('#bar6').barfiller({
        barColor: '#12aef9',
        duration: 2000,
        animateOnResize: true,
        });
//   skill progress bar end
         AOS.init({
            offset: 120,
            delay: 200,
            duration: 1000,
            easing:"ease-in-out",
          });

          // Customize nav-bar
          let screenHeight = $(window).height();
         
      
          $(window).scroll(function () {
              let currentPosition = $(this).scrollTop();
              
              if(currentPosition > screenHeight-100){
                  $(".site-nav").addClass("site-nav-scroll");
              
              }else{
                  $(".site-nav").removeClass("site-nav-scroll");
                  setActive("home");
              }
          });
     // waypoint
         function setActive(current) {
        $(".nav-link").removeClass('current-section');
        $(`.nav-link[href='#${current}']`).addClass('current-section');
    }

    function navScroll() {

        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {

            if(direction == "down"){
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                setActive(currentSectionId);
            }

        },{ offset:'100px' });

        currentSection.waypoint(function (direction) {

            if(direction == "up"){
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                setActive(currentSectionId);
            }

        },{ offset:'-1px' });

    }

    navScroll();

        // types js
        var typed = new Typed(".type-text",{
            strings: [
                "UI/UX Designer",
                "Web Developer",
                "Freelancer",
            ],
            typeSpeed: 70,
            backSpeed: 70,
            loop:true
        });

        //mobile menu menu collapse
        $(".menu-bars").click(function(){
            $(".top").toggleClass("cross-top");
            $(".middle").toggleClass("cross-middle");
            $(".bottom").toggleClass("cross-bottom");
        })
        // scroll to top
        $(window).scroll(function(){

            if($(this).scrollTop()<400){
            $(".to-home").css("opacity","0");
            }else{
            $(".to-home").css("opacity", "1");
            }
        })


          // counter-up
          $('.counter-up').counterUp({
            delay: 5,
            time: 1000
             });

        // wow
        new WOW().init();
})
$('.navbar-toggler-icon').click(() => {
    $('.navbar-toggler-icon .bar1').toggleClass('close1');
    $('.navbar-toggler-icon .bar2').toggleClass('close2');
    $('.navbar-toggler-icon .bar3').toggleClass('close3');
})

$('.about-food-container').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 780,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

let screenHeight = $(window).height();
console.log(screenHeight)
$(window).scroll(function() {
    let currentPosition = $(this).scrollTop();
    console.log(currentPosition);
    if(currentPosition > screenHeight - 100) {
        $('header').addClass("fixed-nav");
        console.log('hi');
    } else {
        $('header').removeClass("fixed-nav");
        setActive("home");
        console.log("hey");
    }
})

function setActive(current) {
    $(".nav-link").removeClass("borderBottom");
    $(`.nav-link[href='#${current}']`).addClass("borderBottom");
}   
function navScroll() {

    let currentSection = $("section[id]");
    console.log(currentSection);
    currentSection.waypoint(function (direction) {
        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    },{ offset:'150px' });

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    },{ offset:'150px' });

}
navScroll();

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    $(window).on("load",function () {
        $('.loader-container').fadeOut(500,function () {
            $(this).remove();
        });
    });

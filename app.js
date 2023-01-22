gsap.registerPlugin(ScrollTrigger)
let window_width=window.innerWidth
let tables_containers=gsap.utils.toArray('.table-content')

let scroll_div=document.getElementsByClassName('scroll-div')[0]
window.addEventListener('scroll',()=>{
    console.log('scroll',window.scrollY)
    if(window.scrollY>100){
        scroll_div.style.display='none';
    }
    else{
        scroll_div.style.display='block';
    }
})

if(window_width>=800){
    gsap.to('.table-content',{scrollTrigger:{
        trigger:'.section-id',
        start:'top center'
    },opacity:1,duration:1,stagger:0.30}
    )
}
else{
    tables_containers.forEach(table => {
        gsap.to(table,{scrollTrigger:{
            trigger:table,
            start:'top center'
        },opacity:1,duration:1}
        ) 
    });
    
}



$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    if (scrollDistance >= 850) {
            $('nav').fadeIn("fast");
    } else {
            $('nav').fadeOut("fast");
    }

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navigation a.active').removeClass('active');
                    $('.navigation a').eq(i).addClass('active');
            }
    });
}).scroll();



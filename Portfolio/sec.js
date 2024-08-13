/* nav bar */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
     
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
    origin: top,
    distance: '80px',
    duration: 2000,
    reset: true     
})
  sr.reveal('.featured-text-card',{});
  sr.reveal('.featured-name',{delay: 100});
  sr.reveal('.featured-text-info',{delay: 200});
  sr.reveal('.featured-text-btn',{delay: 200});
  sr.reveal('.social_icons',{delay: 200});
  sr.reveal('.featured-image',{delay: 300});

  /* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 10});

/* -- HEADINGS -- */
sr.reveal('.top-header',{});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100});
srLeft.reveal('.contact-info',{delay: 10});

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

srRight.reveal('.skills-box',{delay: 10});
srRight.reveal('.form-control',{delay: 10});
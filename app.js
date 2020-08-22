// NAVBAR
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}

// SKILLS STAR HOVER
const skills = document.querySelectorAll('.no-bullets li');
skills.forEach(skill => {
  skill.addEventListener('mouseover', ()=> {
    const icons = skill.querySelectorAll('i');
    icons.forEach(icon => {
      icon.style.paddingLeft = "4px";
      icon.style.transition = "ease all 0.5s";
    })
  });
  skill.addEventListener('mouseout', ()=> {
    const icons = skill.querySelectorAll('i');
    icons.forEach(icon => {
      icon.style.paddingLeft = "0px";
      icon.style.transition = "ease all 0.5s";
    })
  });
})

// MODAL IN PROJECTS
const openModalImgs = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-btn]');
const overlay = document.getElementById('modal-overlay');
openModalImgs.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.querySelector(img.dataset.modalTarget);
        openModal(modal);
    });
});
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.my-modal');
        closeModal(modal);
    })
});
function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}
const closeModal = modal => {
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.my-modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

// // Basic Code keep it 
// $(document).ready(function () {
//   $(document).on("scroll", onScroll);

//   //smoothscroll
//   $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");

//       $('a').each(function () {
//           $(this).removeClass('active');
//       })
//       $(this).addClass('active');

//       var target = this.hash,
//           menu = target;
//       $target = $(target);
//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top+2
//       }, 500, 'swing', function () {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//       });
//   });
// });
// function onScroll(event){
//   var scrollPos = $(document).scrollTop();
//   $('#navbar a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//           $('#navbar a').removeClass("active");
//           currLink.addClass("active");
//       }
//       else{
//           currLink.removeClass("active");
//       }
//   });
// }
// $('#navbar a').on('click', function() {

//   var scrollAnchor = $(this).attr('data-scroll'),
//       scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

//   $('body, html').animate({
//       scrollTop: scrollPoint
//   }, 500);

//   return false;

// })


// $(window).scroll(function() {
//   var windscroll = $(window).scrollTop();
//   if (windscroll >= 100) {
//       // $('nav').addClass('fixed');
//       $('.container-fluid').each(function(i) {
//           if ($(this).position().top <= windscroll - 20) {
//               $('#navbar a.active').removeClass('active');
//               $('#navbar a').eq(i).addClass('active');
//           }
//       });

//   } else {

//       // $('#navbar').removeClass('fixed');
//       $('#navbar a.active').removeClass('active');
//       $('#navbar a:first').addClass('active');
//   }

// }).scroll();
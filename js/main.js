var isOpen = false;
var isChecked = true;
function openNav() {
    document.getElementsByClassName("sidepanel")[0].style.width = "250px";
    document.getElementsByClassName("dashboard-li")[0].classList.add("dashboard-li-active");
    document.getElementsByClassName("main-content")[0].classList.remove("main-content-sidebar-closed");
    document.getElementsByClassName("main-content")[0].classList.add("main-content-sidebar-open");
    isChecked =!!isChecked;
    isOpen = true;
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementsByClassName("sidepanel")[0].style.width = "0";
    document.getElementsByClassName("sidepanel")[0].style.display = "none";
    document.getElementsByClassName("dashboard-li")[0].classList.remove("dashboard-li-active");
    document.getElementsByClassName("main-content")[0].classList.remove("main-content-sidebar-open");
    document.getElementsByClassName("main-content")[0].classList.add("main-content-sidebar-closed");
    isOpen = false;
    isChecked =!!isChecked;
  }
  

  function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
  }

  hover(document.getElementById('test'), e => {
    // On hover
    document.getElementById("mySidepanel").style.display = "block";
    openNav()
  }, e => {
    // On exit hover
    if(!isChecked) {
      document.getElementById("mySidepanel").style.display = "none";
    }
    if(!isChecked) {
      closeNav()
    }
  })


  hover(document.getElementById('test'), e => {
    // On hover
    document.getElementById("test").animate([
      { width: "70px" },
      { width: "250px" },
    ], {
      duration: 200,
      easing: "ease-in"
    });


    

    if(!isChecked) {

      document.getElementsByClassName("list")[0].style.width = "100%";
      document.getElementsByClassName("list")[0].animate([
        { opacity: "0" },
        { opacity: "1" },
      ], {
        duration: 1000,
        easing: "ease-in"
      });

      
      document.getElementById("mySidepanel").animate([
        { width: "70px" },
        { width: "250px" },
      ], {
        duration: 200,
        easing: "ease-in"
      });
    }
    openNav()
  }, e => {
    // On exit hover
    document.getElementById("test").animate([
      { width: "250px" },
      { width: "70px" },
    ], {
      duration: 200,
      easing: "ease-in"
    });
  });

document.addEventListener("DOMContentLoaded", function(event) {
  feather.replace();


  document.getElementById('closeNav').addEventListener('click', function(e) {
    isChecked = !isChecked;
    document.getElementsByClassName("sidepanel")[0].style.display = "block";
    document.getElementsByClassName("sidepanel")[0].style.width = "250px";
    if(isChecked) {
      document.getElementsByClassName("close-icon")[0].innerHTML = feather.icons['x'].toSvg();
      feather.replace();
    } else {
      document.getElementsByClassName("close-icon")[0].innerHTML = feather.icons['align-left'].toSvg();
      feather.replace();
    }

  });



//=========preloader========================
  const loaderWrapper = document.querySelector('.loader-wrapper');
  loaderWrapper.animate([
    { opacity: 1 },
    { opacity: 0 },
  ], {
    duration: 3000,
    easing: "ease-in"
  }
)

const fadeEffect = setInterval(() => {
    if (!loaderWrapper.style.opacity) {
        loaderWrapper.style.opacity = 1;
    }
    if (loaderWrapper.style.opacity > 0) {
        loaderWrapper.style.opacity -= 0.1;
    } else {
      loaderWrapper.style.display = "none";
      clearInterval(fadeEffect);
    }
  }, 300);
//=========preloader========================



      document.addEventListener('click', function(event) {
        // Check if the clicked element is a <li> within a <ul> with class 'list'
        if (event.target.matches('.list > li')) {
          var nextUl = event.target.nextElementSibling;
          if (nextUl && nextUl.tagName.toLowerCase() === 'ul') {
            // Toggle the visibility of the next <ul>
            if (nextUl.style.display === 'none' || nextUl.style.display === '') {
              nextUl.style.display = 'block';
            } else {
              nextUl.style.display = 'none';
            }
          }
        }
      });
 });
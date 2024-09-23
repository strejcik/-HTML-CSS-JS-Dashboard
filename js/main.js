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

















      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("average1-chart", am4charts.XYChart);
      // Add data
      chart.data = [{
          "date": "2018-01-1",
          "price": 180
      }, {
          "date": "2018-01-2",
          "price": 252
      }, {
          "date": "2018-01-3",
          "price": 185
      }, {
          "date": "2018-01-4",
          "price": 189
      }, {
          "date": "2018-01-5",
          "price": 158
      }, {
          "date": "2018-01-6",
          "price": 200
      }, {
          "date": "2018-01-7",
          "price": 187
      }, {
          "date": "2018-01-8",
          "price": 180
      }, {
          "date": "2018-01-9",
          "price": 252
      }, {
          "date": "2018-01-10",
          "price": 185
      }, {
          "date": "2018-01-11",
          "price": 268
      }, {
          "date": "2018-01-12",
          "price": 158
      }, {
          "date": "2018-01-13",
          "price": 200
      }, {
          "date": "2018-01-14",
          "price": 187
      }, {
          "date": "2018-01-15",
          "price": 180
      }, {
          "date": "2018-01-16",
          "price": 252
      }, {
          "date": "2018-01-17",
          "price": 185
      }, {
          "date": "2018-01-18",
          "price": 250
      }, {
          "date": "2018-01-19",
          "price": 158
      }, {
          "date": "2018-01-20",
          "price": 200
      }, {
          "date": "2018-01-21",
          "price": 187
      }, {
          "date": "2018-01-22",
          "price": 180
      }, {
          "date": "2018-01-23",
          "price": 252
      }, {
          "date": "2018-01-24",
          "price": 185
      }, {
          "date": "2018-01-25",
          "price": 295
      }, {
          "date": "2018-01-26",
          "price": 158
      }, {
          "date": "2018-01-27",
          "price": 200
      }, {
          "date": "2018-01-28",
          "price": 90
      }];

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.startLocation = 0.6;
      dateAxis.endLocation = 0.4;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.renderer.inside = true;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.logarithmic = true;
      valueAxis.renderer.minGridDistance = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "price";
      series.dataFields.dateX = "date";
      series.strokeWidth = 3;
      series.tooltipText = "{valueY.value}";
      series.fill = am4core.color("#fff");
      series.stroke = am4core.color("#fff");
      series.strokeWidth = 3;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.lineX.strokeWidth = 0;
      chart.cursor.lineX.fill = am4core.color("#fff");
      chart.cursor.lineX.fillOpacity = 0;
      chart.padding(0, 0, 0, 0);



});

























































 
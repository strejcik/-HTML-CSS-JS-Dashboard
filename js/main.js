var isOpen = false;
var isChecked = true;

async function load_home() {
    document.getElementsByClassName("main-content")[0].innerHTML= '<object type="text/html" data="example.html" ></object>';
}



function openNav() {
    //load_home();
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
































      am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("average2-chart", am4charts.XYChart);
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










        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("account-chart", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0;
        // this creates initial fade-in

        var data = [];
        var grothactual = 100;
        var actual = 200;
        var plan = 300;

        for (var i = 1; i < 120; i++) {
            grothactual += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
            actual = Math.round(grothactual + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
            plan = Math.round(actual + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 3);
            data.push({
                date: new Date(2018, 0, i),
                grothactual: grothactual,
                actual: actual,
                plan: plan
            });
        }

        chart.data = data;

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.tooltip.disabled = true;
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.inside = true;
        dateAxis.startLocation = 0.1;
        dateAxis.endLocation = 0.4;
        dateAxis.renderer.grid.template.strokeDasharray = "10,5";
        dateAxis.renderer.grid.template.strokeOpacity = 0.1;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.inside = true;
        valueAxis.renderer.grid.template.strokeDasharray = "10,5";
        valueAxis.renderer.grid.template.strokeOpacity = 0.1;

        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "plan";
        series.tooltipText = "Plan: {valueY.value}";
        series.name = "Plan";
        series.sequencedInterpolation = true;
        series.stroke = am4core.color("#f44336");
        series.fill = am4core.color("#f44336");
        series.defaultState.transitionDuration = 1000;
        series.tensionX = 0.7;
        series.fillOpacity = 1;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "actual";
        series2.tooltipText = "Actual: {valueY.value}";
        series2.name = "Actual";
        series2.sequencedInterpolation = true;
        series2.defaultState.transitionDuration = 1500;
        series2.stroke = am4core.color("#7759de");
        series2.fill = am4core.color("#7759de");
        series2.tensionX = 0.7;
        series2.fillOpacity = 1;

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.dateX = "date";
        series3.dataFields.valueY = "grothactual";
        series3.tooltipText = "Groth Actual: {valueY.value}";
        series3.name = "Groth Actual";
        series3.sequencedInterpolation = true;
        series3.defaultState.transitionDuration = 1500;
        series3.stroke = am4core.color("#4caf50");
        series3.fill = am4core.color("#4caf50");
        series3.tensionX = 0.7;
        series3.fillOpacity = 1;

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;

        //add legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = 'top';

        chart.seriesContainer.zIndex = -1;

        chart.padding(5, 0, -5, -5);





















































        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("time-user", am4charts.XYChart);
        chart.maskBullets = false;

        var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

        xAxis.dataFields.category = "weekday";
        yAxis.dataFields.category = "hour";

        xAxis.renderer.grid.template.disabled = true;
        xAxis.renderer.minGridDistance = 40;

        yAxis.renderer.grid.template.disabled = true;
        yAxis.renderer.inversed = true;
        yAxis.renderer.minGridDistance = 30;

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "weekday";
        series.dataFields.categoryY = "hour";
        series.dataFields.value = "value";
        series.sequencedInterpolation = true;
        series.defaultState.transitionDuration = 3000;

        var bgColor = new am4core.InterfaceColorSet().getFor("background");

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 1;
        columnTemplate.strokeOpacity = 0.2;
        columnTemplate.stroke = bgColor;
        columnTemplate.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
        columnTemplate.width = am4core.percent(100);
        columnTemplate.height = am4core.percent(100);

        series.heatRules.push({
            target: series.columns.template,
            property: "fill",
            min: am4core.color("#ffffff"),
            max: am4core.color("#7759de")
        });

        // heat legend
        var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
        heatLegend.width = am4core.percent(100);
        heatLegend.series = series;
        heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
        heatLegend.valueAxis.renderer.minGridDistance = 30;

        // heat legend behavior
        series.columns.template.events.on("over", (event) => {
            handleHover(event.target);
        })

        series.columns.template.events.on("hit", (event) => {
            handleHover(event.target);
        })

        function handleHover(column) {
            if (!isNaN(column.dataItem.value)) {
                heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
            } else {
                heatLegend.valueAxis.hideTooltip();
            }
        }

        series.columns.template.events.on("out", (event) => {
            heatLegend.valueAxis.hideTooltip();
        })

        chart.data = [{
                "hour": "12pm",
                "weekday": "Sun",
                "value": 2990
            },
            {
                "hour": "1am",
                "weekday": "Sun",
                "value": 2520
            },
            {
                "hour": "2am",
                "weekday": "Sun",
                "value": 2334
            },
            {
                "hour": "3am",
                "weekday": "Sun",
                "value": 2230
            },
            {
                "hour": "4am",
                "weekday": "Sun",
                "value": 2325
            },
            {
                "hour": "5am",
                "weekday": "Sun",
                "value": 2019
            },
            {
                "hour": "6am",
                "weekday": "Sun",
                "value": 2128
            },
            {
                "hour": "7am",
                "weekday": "Sun",
                "value": 2246
            },
            {
                "hour": "8am",
                "weekday": "Sun",
                "value": 2421
            },
            {
                "hour": "9am",
                "weekday": "Sun",
                "value": 2788
            },
            {
                "hour": "10am",
                "weekday": "Sun",
                "value": 2959
            },
            {
                "hour": "11am",
                "weekday": "Sun",
                "value": 3018
            },
            {
                "hour": "12am",
                "weekday": "Sun",
                "value": 3154
            },
            {
                "hour": "1pm",
                "weekday": "Sun",
                "value": 3172
            },
            {
                "hour": "2pm",
                "weekday": "Sun",
                "value": 3368
            },
            {
                "hour": "3pm",
                "weekday": "Sun",
                "value": 3464
            },
            {
                "hour": "4pm",
                "weekday": "Sun",
                "value": 3746
            },
            {
                "hour": "5pm",
                "weekday": "Sun",
                "value": 3656
            },
            {
                "hour": "6pm",
                "weekday": "Sun",
                "value": 3336
            },
            {
                "hour": "7pm",
                "weekday": "Sun",
                "value": 3292
            },
            {
                "hour": "8pm",
                "weekday": "Sun",
                "value": 3269
            },
            {
                "hour": "9pm",
                "weekday": "Sun",
                "value": 3300
            },
            {
                "hour": "10pm",
                "weekday": "Sun",
                "value": 3403
            },
            {
                "hour": "11pm",
                "weekday": "Sun",
                "value": 3323
            },
            {
                "hour": "12pm",
                "weekday": "Mon",
                "value": 3346
            },
            {
                "hour": "1am",
                "weekday": "Mon",
                "value": 2725
            },
            {
                "hour": "2am",
                "weekday": "Mon",
                "value": 3052
            },
            {
                "hour": "3am",
                "weekday": "Mon",
                "value": 3876
            },
            {
                "hour": "4am",
                "weekday": "Mon",
                "value": 4453
            },
            {
                "hour": "5am",
                "weekday": "Mon",
                "value": 3972
            },
            {
                "hour": "6am",
                "weekday": "Mon",
                "value": 4644
            },
            {
                "hour": "7am",
                "weekday": "Mon",
                "value": 5715
            },
            {
                "hour": "8am",
                "weekday": "Mon",
                "value": 7080
            },
            {
                "hour": "9am",
                "weekday": "Mon",
                "value": 8022
            },
            {
                "hour": "10am",
                "weekday": "Mon",
                "value": 8446
            },
            {
                "hour": "11am",
                "weekday": "Mon",
                "value": 9313
            },
            {
                "hour": "12am",
                "weekday": "Mon",
                "value": 9011
            },
            {
                "hour": "1pm",
                "weekday": "Mon",
                "value": 8508
            },
            {
                "hour": "2pm",
                "weekday": "Mon",
                "value": 8515
            },
            {
                "hour": "3pm",
                "weekday": "Mon",
                "value": 8399
            },
            {
                "hour": "4pm",
                "weekday": "Mon",
                "value": 8649
            },
            {
                "hour": "5pm",
                "weekday": "Mon",
                "value": 7869
            },
            {
                "hour": "6pm",
                "weekday": "Mon",
                "value": 6933
            },
            {
                "hour": "7pm",
                "weekday": "Mon",
                "value": 5969
            },
            {
                "hour": "8pm",
                "weekday": "Mon",
                "value": 5552
            },
            {
                "hour": "9pm",
                "weekday": "Mon",
                "value": 5434
            },
            {
                "hour": "10pm",
                "weekday": "Mon",
                "value": 5070
            },
            {
                "hour": "11pm",
                "weekday": "Mon",
                "value": 4851
            },
            {
                "hour": "12pm",
                "weekday": "Tue",
                "value": 4468
            },
            {
                "hour": "1am",
                "weekday": "Tue",
                "value": 3306
            },
            {
                "hour": "2am",
                "weekday": "Tue",
                "value": 3906
            },
            {
                "hour": "3am",
                "weekday": "Tue",
                "value": 4413
            },
            {
                "hour": "4am",
                "weekday": "Tue",
                "value": 4726
            },
            {
                "hour": "5am",
                "weekday": "Tue",
                "value": 4584
            },
            {
                "hour": "6am",
                "weekday": "Tue",
                "value": 5717
            },
            {
                "hour": "7am",
                "weekday": "Tue",
                "value": 6504
            },
            {
                "hour": "8am",
                "weekday": "Tue",
                "value": 8104
            },
            {
                "hour": "9am",
                "weekday": "Tue",
                "value": 8813
            },
            {
                "hour": "10am",
                "weekday": "Tue",
                "value": 9278
            },
            {
                "hour": "11am",
                "weekday": "Tue",
                "value": 10425
            },
            {
                "hour": "12am",
                "weekday": "Tue",
                "value": 10137
            },
            {
                "hour": "1pm",
                "weekday": "Tue",
                "value": 9290
            },
            {
                "hour": "2pm",
                "weekday": "Tue",
                "value": 9255
            },
            {
                "hour": "3pm",
                "weekday": "Tue",
                "value": 9614
            },
            {
                "hour": "4pm",
                "weekday": "Tue",
                "value": 9713
            },
            {
                "hour": "5pm",
                "weekday": "Tue",
                "value": 9667
            },
            {
                "hour": "6pm",
                "weekday": "Tue",
                "value": 8774
            },
            {
                "hour": "7pm",
                "weekday": "Tue",
                "value": 8649
            },
            {
                "hour": "8pm",
                "weekday": "Tue",
                "value": 9937
            },
            {
                "hour": "9pm",
                "weekday": "Tue",
                "value": 10286
            },
            {
                "hour": "10pm",
                "weekday": "Tue",
                "value": 9175
            },
            {
                "hour": "11pm",
                "weekday": "Tue",
                "value": 8581
            },
            {
                "hour": "12pm",
                "weekday": "Wed",
                "value": 8145
            },
            {
                "hour": "1am",
                "weekday": "Wed",
                "value": 7177
            },
            {
                "hour": "2am",
                "weekday": "Wed",
                "value": 5657
            },
            {
                "hour": "3am",
                "weekday": "Wed",
                "value": 6802
            },
            {
                "hour": "4am",
                "weekday": "Wed",
                "value": 8159
            },
            {
                "hour": "5am",
                "weekday": "Wed",
                "value": 8449
            },
            {
                "hour": "6am",
                "weekday": "Wed",
                "value": 9453
            },
            {
                "hour": "7am",
                "weekday": "Wed",
                "value": 9947
            },
            {
                "hour": "8am",
                "weekday": "Wed",
                "value": 11471
            },
            {
                "hour": "9am",
                "weekday": "Wed",
                "value": 12492
            },
            {
                "hour": "10am",
                "weekday": "Wed",
                "value": 9388
            },
            {
                "hour": "11am",
                "weekday": "Wed",
                "value": 9928
            },
            {
                "hour": "12am",
                "weekday": "Wed",
                "value": 9644
            },
            {
                "hour": "1pm",
                "weekday": "Wed",
                "value": 9034
            },
            {
                "hour": "2pm",
                "weekday": "Wed",
                "value": 8964
            },
            {
                "hour": "3pm",
                "weekday": "Wed",
                "value": 9069
            },
            {
                "hour": "4pm",
                "weekday": "Wed",
                "value": 8898
            },
            {
                "hour": "5pm",
                "weekday": "Wed",
                "value": 8322
            },
            {
                "hour": "6pm",
                "weekday": "Wed",
                "value": 6909
            },
            {
                "hour": "7pm",
                "weekday": "Wed",
                "value": 5810
            },
            {
                "hour": "8pm",
                "weekday": "Wed",
                "value": 5151
            },
            {
                "hour": "9pm",
                "weekday": "Wed",
                "value": 4911
            },
            {
                "hour": "10pm",
                "weekday": "Wed",
                "value": 4487
            },
            {
                "hour": "11pm",
                "weekday": "Wed",
                "value": 4118
            },
            {
                "hour": "12pm",
                "weekday": "Thu",
                "value": 3689
            },
            {
                "hour": "1am",
                "weekday": "Thu",
                "value": 3081
            },
            {
                "hour": "2am",
                "weekday": "Thu",
                "value": 6525
            },
            {
                "hour": "3am",
                "weekday": "Thu",
                "value": 6228
            },
            {
                "hour": "4am",
                "weekday": "Thu",
                "value": 6917
            },
            {
                "hour": "5am",
                "weekday": "Thu",
                "value": 6568
            },
            {
                "hour": "6am",
                "weekday": "Thu",
                "value": 6405
            },
            {
                "hour": "7am",
                "weekday": "Thu",
                "value": 8106
            },
            {
                "hour": "8am",
                "weekday": "Thu",
                "value": 8542
            },
            {
                "hour": "9am",
                "weekday": "Thu",
                "value": 8501
            },
            {
                "hour": "10am",
                "weekday": "Thu",
                "value": 8802
            },
            {
                "hour": "11am",
                "weekday": "Thu",
                "value": 9420
            },
            {
                "hour": "12am",
                "weekday": "Thu",
                "value": 8966
            },
            {
                "hour": "1pm",
                "weekday": "Thu",
                "value": 8135
            },
            {
                "hour": "2pm",
                "weekday": "Thu",
                "value": 8224
            },
            {
                "hour": "3pm",
                "weekday": "Thu",
                "value": 8387
            },
            {
                "hour": "4pm",
                "weekday": "Thu",
                "value": 8218
            },
            {
                "hour": "5pm",
                "weekday": "Thu",
                "value": 7641
            },
            {
                "hour": "6pm",
                "weekday": "Thu",
                "value": 6469
            },
            {
                "hour": "7pm",
                "weekday": "Thu",
                "value": 5441
            },
            {
                "hour": "8pm",
                "weekday": "Thu",
                "value": 4952
            },
            {
                "hour": "9pm",
                "weekday": "Thu",
                "value": 4643
            },
            {
                "hour": "10pm",
                "weekday": "Thu",
                "value": 4393
            },
            {
                "hour": "11pm",
                "weekday": "Thu",
                "value": 4017
            },
            {
                "hour": "12pm",
                "weekday": "Fri",
                "value": 4022
            },
            {
                "hour": "1am",
                "weekday": "Fri",
                "value": 3063
            },
            {
                "hour": "2am",
                "weekday": "Fri",
                "value": 3638
            },
            {
                "hour": "3am",
                "weekday": "Fri",
                "value": 3968
            },
            {
                "hour": "4am",
                "weekday": "Fri",
                "value": 4070
            },
            {
                "hour": "5am",
                "weekday": "Fri",
                "value": 4019
            },
            {
                "hour": "6am",
                "weekday": "Fri",
                "value": 4548
            },
            {
                "hour": "7am",
                "weekday": "Fri",
                "value": 5465
            },
            {
                "hour": "8am",
                "weekday": "Fri",
                "value": 6909
            },
            {
                "hour": "9am",
                "weekday": "Fri",
                "value": 7706
            },
            {
                "hour": "10am",
                "weekday": "Fri",
                "value": 7867
            },
            {
                "hour": "11am",
                "weekday": "Fri",
                "value": 8615
            },
            {
                "hour": "12am",
                "weekday": "Fri",
                "value": 8218
            },
            {
                "hour": "1pm",
                "weekday": "Fri",
                "value": 7604
            },
            {
                "hour": "2pm",
                "weekday": "Fri",
                "value": 7429
            },
            {
                "hour": "3pm",
                "weekday": "Fri",
                "value": 7488
            },
            {
                "hour": "4pm",
                "weekday": "Fri",
                "value": 7493
            },
            {
                "hour": "5pm",
                "weekday": "Fri",
                "value": 6998
            },
            {
                "hour": "6pm",
                "weekday": "Fri",
                "value": 5941
            },
            {
                "hour": "7pm",
                "weekday": "Fri",
                "value": 5068
            },
            {
                "hour": "8pm",
                "weekday": "Fri",
                "value": 4636
            },
            {
                "hour": "9pm",
                "weekday": "Fri",
                "value": 4241
            },
            {
                "hour": "10pm",
                "weekday": "Fri",
                "value": 3858
            },
            {
                "hour": "11pm",
                "weekday": "Fri",
                "value": 3833
            },
            {
                "hour": "12pm",
                "weekday": "Sat",
                "value": 3503
            },
            {
                "hour": "1am",
                "weekday": "Sat",
                "value": 2842
            },
            {
                "hour": "2am",
                "weekday": "Sat",
                "value": 2808
            },
            {
                "hour": "3am",
                "weekday": "Sat",
                "value": 2399
            },
            {
                "hour": "4am",
                "weekday": "Sat",
                "value": 2280
            },
            {
                "hour": "5am",
                "weekday": "Sat",
                "value": 2139
            },
            {
                "hour": "6am",
                "weekday": "Sat",
                "value": 2527
            },
            {
                "hour": "7am",
                "weekday": "Sat",
                "value": 2940
            },
            {
                "hour": "8am",
                "weekday": "Sat",
                "value": 3066
            },
            {
                "hour": "9am",
                "weekday": "Sat",
                "value": 3494
            },
            {
                "hour": "10am",
                "weekday": "Sat",
                "value": 3287
            },
            {
                "hour": "11am",
                "weekday": "Sat",
                "value": 3416
            },
            {
                "hour": "12am",
                "weekday": "Sat",
                "value": 3432
            },
            {
                "hour": "1pm",
                "weekday": "Sat",
                "value": 3523
            },
            {
                "hour": "2pm",
                "weekday": "Sat",
                "value": 3542
            },
            {
                "hour": "3pm",
                "weekday": "Sat",
                "value": 3347
            },
            {
                "hour": "4pm",
                "weekday": "Sat",
                "value": 3292
            },
            {
                "hour": "5pm",
                "weekday": "Sat",
                "value": 3416
            },
            {
                "hour": "6pm",
                "weekday": "Sat",
                "value": 3131
            },
            {
                "hour": "7pm",
                "weekday": "Sat",
                "value": 3057
            },
            {
                "hour": "8pm",
                "weekday": "Sat",
                "value": 3227
            },
            {
                "hour": "9pm",
                "weekday": "Sat",
                "value": 3060
            },
            {
                "hour": "10pm",
                "weekday": "Sat",
                "value": 2855
            },
            {
                "hour": "11pm",
                "weekday": "Sat",
                "value": 2625
            }
        ];
        chart.padding(0, 0, 0, 0);











        am4core.useTheme(am4themes_animated);
        // Themes end
        // Create chart instance
        var chart = am4core.create("type-chart", am4charts.PieChart);
        // Add data
        chart.data = [{
                "sector": "Desktop Computers",
                "size": 8
            },
            {
                "sector": "Smartphones",
                "size": 14.6
            },
            {
                "sector": "Tablets",
                "size": 22.5
            }
        ];
        // Add label
        chart.innerRadius = 35;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "size";
        pieSeries.dataFields.category = "sector";
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        pieSeries.colors.step = 3;



});

























































 
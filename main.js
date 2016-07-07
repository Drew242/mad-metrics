window.addEventListener("scroll", vertPixels);
window.onload     = timer;
var modal         = document.getElementById('myModal');
var btn           = document.getElementById("metric-madness");
var signup        = document.getElementById('signup-btn');
var span          = document.getElementsByClassName("close")[0];
var divTime       = document.getElementsByTagName("div");
var welcomeDiv    = [1];
var aboutDiv      = [1];
var historyDiv    = [1];
var studentsDiv   = [1];
var dayDiv        = [1];
var communityDiv  = [1];
var boulderDiv    = [1];
var resourcesDiv  = [1];
var additionalDiv = [1];
var signupDiv     = [1];
var bodyWidth     = document.body.clientWidth;
var bodyHeight    = document.body.clientHeight;
var pageArea      = bodyWidth * bodyHeight;
var horizontalPix = bodyWidth;
var verticalPixel = 460;
var signupStop    = "Never signed up...";

function vertPixels() {
  var element       = document.getElementsByTagName("body")[0];
  y                 = element.scrollTop;
  if (y > verticalPixel) {
    verticalPixel = y;
  }
}

for (i = 0; i < divTime.length; i++) {
  divTime[i].addEventListener("mouseenter", function() {
    startTime = totalSeconds;
    return startTime;
  })
}

for (i = 0; i < divTime.length; i++) {
  divTime[i].addEventListener("mouseleave", function() {
    var endTime     = totalSeconds;
    hoverTime       = (endTime - startTime);
    var divLocation = this.id + "Div";
    window[divLocation].push(hoverTime);
  })
}

function timer() {
  var interval = setInterval(setTime, 1000);
  totalSeconds = 0;
      function setTime() {
        totalSeconds++;
      }
}

function timeSum(divName) {
  totalDivSeconds = 0;
  for (i = 0; i < divName.length; i++) {
    totalDivSeconds += divName[i];
  }
  return totalDivSeconds;
}

signup.onclick = function() {
  signupStop = totalSeconds;
  document.getElementById("notice-success").innerHTML = "Information Received";
  document.getElementById("notice-success").style.padding = "1%";
  return signupStop;
}

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("timeOnSite").innerHTML = "Seconds on site: " + (totalSeconds);
    document.getElementById("distanceScrolled").innerHTML = "Distance Scrolled: " + ((verticalPixel === 460) ? "Less than 500" : verticalPixel) + " pixels";
    document.getElementById("percOfPage").innerHTML = "Percentage of Page Scrolled: " + (((verticalPixel * horizontalPix) / pageArea) * 100).toFixed(2) + "%";
    document.getElementById("timeB4SignUp").innerHTML = "Time before clicking signup: " + signupStop + ((typeof(signupStop) === "number") ? " seconds" : " sorry");
    document.getElementById("welcomeDiv").innerHTML = "Welcome: " + timeSum(welcomeDiv);
    document.getElementById("aboutDiv").innerHTML = "About: " + timeSum(aboutDiv);
    document.getElementById("historyDiv").innerHTML = "History: " + timeSum(historyDiv);
    document.getElementById("studentsDiv").innerHTML = "Student: " + timeSum(studentsDiv);
    document.getElementById("dayDiv").innerHTML = "Day: " + timeSum(dayDiv);
    document.getElementById("communityDiv").innerHTML = "Community: " + timeSum(communityDiv);
    document.getElementById("boulderDiv").innerHTML = "Boulder: " + timeSum(boulderDiv);
    document.getElementById("resourcesDiv").innerHTML = "Resources: " + timeSum(resourcesDiv);
    document.getElementById("additionalDiv").innerHTML = "Additional: " + timeSum(additionalDiv);
    document.getElementById("signupDiv").innerHTML = "Signup: " + timeSum(signupDiv);
    bakePie();
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// d3 Pie //
function bakePie() {
  var welcome     = timeSum(welcomeDiv);
  var about       = timeSum(aboutDiv);
  var history     = timeSum(historyDiv);
  var students    = timeSum(studentsDiv);
  var day         = timeSum(dayDiv);
  var community   = timeSum(communityDiv);
  var boulder     = timeSum(boulderDiv);
  var resources   = timeSum(resourcesDiv);
  var additional  = timeSum(additionalDiv);
  var signup      = timeSum(signupDiv);

  var pieData     = [0];
  var dataSet     = pieData.push(welcome, about, history, students, day, community,
                    boulder, resources, additional, signup);
  var w           = 300;
  var h           = 300;
  var outerRadius = w / 2;
  var innerRadius = 0;

  var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);

  var pie = d3.layout.pie();

  var color = d3.scale.category10();

  var svg = d3.select("#pie")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

  var arcs = svg.selectAll("g.arc")
              .data(pie(pieData))
              .enter()
              .append("g")
              .attr("class", "arc")
              .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

    arcs.append("path")
              .attr("fill", function(d, i) {
                return color(i);
    })
              .attr("d", arc);

    arcs.append("text")
              .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")";
    })
              .attr("text-anchor", "middle")
              .text(function(d) {
                return d.value;
    });
  }

// d3 transitions //

d3.selectAll(".ipsum").transition()
  .duration(3000)
  .style("color", function(d, i) {
  return i % 2 ? "#00A0E9" : "#BE0081";
});

d3.select("body").transition()
  .duration(3000)
  .style("background-color", "black")
  .style("color", "rgb(255, 255, 255)");

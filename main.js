window.onload     = timer;
var modal         = document.getElementById('myModal');
var btn           = document.getElementById("metric-madness");
var span          = document.getElementsByClassName("close")[0];
var divTime       = document.getElementsByTagName("div");
var welcomeDiv    = [];
var aboutDiv      = [];
var historyDiv    = [];
var studentDiv    = [];
var dayDiv        = [];
var communityDiv  = [];
var boulderDiv    = [];
var resourcesDiv  = [];
var additionalDiv = [];
var signupDiv     = [];

for (i = 0; i < divTime.length; i++) {
  divTime[i].addEventListener("mouseenter", function() {
    startTime = totalSeconds;
    return startTime;
  })
}

for (i = 0; i < divTime.length; i++) {
  divTime[i].addEventListener("mouseleave", function() {
    var endTime  = totalSeconds;
    hoverTime    = (endTime - startTime);
    var location = this.id + "Div";
    aboutDiv.push(hoverTime);
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

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("timeOnSite").innerHTML = "Seconds on site: " + (totalSeconds);
    document.getElementById("distanceScrolled").innerHTML = "Distance Scrolled: " + 42 + "px";
    document.getElementById("percOfPage").innerHTML = "Percentage of Page Scrolled: " + (42 / 6) + "%";
    document.getElementById("timeB4SignUp").innerHTML = "Time before clicking signup: " + (totalSeconds / 7).toFixed(2) + " seconds";
    document.getElementById("aboutDiv").innerHTML = "Seconds spent on About: " + timeSum(aboutDiv);
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

d3.selectAll(".ipsum").style("color", function(d, i) {
  return i % 2 ? "#00A0E9" : "#BE0081";
});

d3.select("body").transition()
  .duration(8000)
  .style("background-color", "black")
  .style("color", "rgb(255, 255, 255)");

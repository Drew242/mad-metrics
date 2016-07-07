window.addEventListener("scroll", vertPixels);
window.onload     = timer;
var modal         = document.getElementById('myModal');
var btn           = document.getElementById("metric-madness");
var signup        = document.getElementById('signup-btn');
var span          = document.getElementsByClassName("close")[0];
var divTime       = document.getElementsByTagName("div");
var welcomeDiv    = [0];
var aboutDiv      = [0];
var historyDiv    = [0];
var studentsDiv   = [0];
var dayDiv        = [0];
var communityDiv  = [0];
var boulderDiv    = [0];
var resourcesDiv  = [0];
var additionalDiv = [0];
var signupDiv     = [0];
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
  console.log('boom');
  signupStop = totalSeconds;
  console.log('shackalacka');
  document.getElementById("notice-success").innerHTML = "Information Received";
  document.getElementById("notice-success").style.padding = "1%";
  return signupStop;
}

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("timeOnSite").innerHTML = "Seconds on site: " + (totalSeconds);
    document.getElementById("distanceScrolled").innerHTML = "Distance Scrolled: " + 42 + "px";
    document.getElementById("percOfPage").innerHTML = "Percentage of Page Scrolled: " + (((verticalPixel * horizontalPix) / pageArea) * 100).toFixed(2) + "%";
    document.getElementById("timeB4SignUp").innerHTML = "Time before clicking signup: " + signupStop + ((typeof(signupStop) === "number") ? " seconds" : " sorry");
    document.getElementById("welcomeDiv").innerHTML = "Seconds spent on Welcome: " + timeSum(welcomeDiv);
    document.getElementById("aboutDiv").innerHTML = "Seconds spent on About: " + timeSum(aboutDiv);
    document.getElementById("historyDiv").innerHTML = "Seconds spent on History: " + timeSum(historyDiv);
    document.getElementById("studentsDiv").innerHTML = "Seconds spent on Student: " + timeSum(studentsDiv);
    document.getElementById("dayDiv").innerHTML = "Seconds spent on Day: " + timeSum(dayDiv);
    document.getElementById("communityDiv").innerHTML = "Seconds spent on Community: " + timeSum(communityDiv);
    document.getElementById("boulderDiv").innerHTML = "Seconds spent on Boulder: " + timeSum(boulderDiv);
    document.getElementById("resourcesDiv").innerHTML = "Seconds spent on Resources: " + timeSum(resourcesDiv);
    document.getElementById("additionalDiv").innerHTML = "Seconds spent on Additional: " + timeSum(additionalDiv);
    document.getElementById("signupDiv").innerHTML = "Seconds spent on Signup: " + timeSum(signupDiv);
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

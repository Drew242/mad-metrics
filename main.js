window.onload    = timer;
var modal        = document.getElementById('myModal');
var btn          = document.getElementById("metric-madness");
var span         = document.getElementsByClassName("close")[0];

function timer() {
  var interval = setInterval(setTime, 1000);
  totalSeconds = 0;
      function setTime() {
        totalSeconds++;
      }
}

btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("timeOnSite").innerHTML = "Seconds on site: " + (totalSeconds);
    document.getElementById("distanceScrolled").innerHTML = "Distance Scrolled: " + 42 + "px";
    document.getElementById("percOfPage").innerHTML = "Percentage of Page Scrolled: " + (42 / 6) + "%";
    document.getElementById("timeB4SignUp").innerHTML = "Time before clicking signup: " + (totalSeconds / 7).toFixed(2) + " seconds";
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

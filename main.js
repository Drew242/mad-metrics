var modal      = document.getElementById('myModal');
var btn        = document.getElementById("metric-madness");
var span       = document.getElementsByClassName("close")[0];
var startTime  = new Date();


btn.onclick = function() {
    modal.style.display = "block";
    var lapsedTime = new Date() - startTime;
    document.getElementById("lapsedTime").innerHTML = "Minutes on site: " + (lapsedTime / 6000);
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

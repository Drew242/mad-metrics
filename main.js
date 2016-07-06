console.log('here... we... go');

d3.selectAll(".ipsum").style("color", function(d, i) {
  return i % 2 ? "#00A0E9" : "#BE0081";
});

d3.select("body").transition()
  .duration(8000)
  .style("background-color", "black")
  .style("color", "rgb(255, 255, 255)");

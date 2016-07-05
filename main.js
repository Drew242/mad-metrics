console.log('here... we... go');

d3.selectAll(".ipsum").style("color", function(d, i) {
  return i % 2 ? "#00A0E9" : "#BE0081";
});

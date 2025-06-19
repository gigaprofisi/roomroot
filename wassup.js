$(function() {
  $.getJSON('./splashes.json', function(d){
    document.getElementById("splash").innerHTML=d[Math.floor(Math.random()*d.length)]
  })
})

throw new Error("okay");

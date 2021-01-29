
var compteurimage=1;
var totalimage=11;

function slide(x) {

      var image=document.getElementById('img');
      compteurimage= compteurimage + x;
      image.src='images/marius'+ compteurimage + '.jpg';
      
      if (compteurimage>=totalimage)
      {
         
         compteurimage=1;
         
      }
      
      if (compteurimage<1)
      {
        compteurimage=totalimage;
      }
      
         
}



function slideauto() {

      var image=document.getElementById('img');
      compteurimage= compteurimage + 1;
      image.src='images/marius'+ compteurimage + '.jpg';
      
      if (compteurimage>=totalimage)
      {
         
         compteurimage=1;
         
      }
      
      if (compteurimage<1)
      {
        compteurimage=totalimage;
      }
      
         
}

window.setInterval(slideauto,3000);
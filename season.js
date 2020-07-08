function season()
{
  var value=document.getElementById("season");
  var result=value.options[value.selectedIndex].value;
  
  if(result=="spring")
   {
    var spring=document.getElementById("image");
    spring.setAttribute("src","spring.gif");
    spring.setAttribute("alt","Spring");
    spring.setAttribute("width","100%");
    spring.setAttribute("height","100%");
    spring.setAttribute("border-radius","30px");
     }
  else if(result=="summer")
  {
    var summer=document.getElementById("image");
    summer.setAttribute("src","summer.gif");
    summer.setAttribute("alt","Summer");
    summer.setAttribute("width","100%");
    summer.setAttribute("height","100%");
    summer.setAttribute("border-radius","30px");
  }
  else if(result=="monsoon")
  {
    var monsoon=document.getElementById("image");
    monsoon.setAttribute("src","monsoon.gif");
    monsoon.setAttribute("alt","Monsoon");
    monsoon.setAttribute("width","100%");
    monsoon.setAttribute("height","100%");
    monsoon.setAttribute("border-radius","30px");
   }
  else if(result=="autumn")
  {
    var autumn=document.getElementById("image");
    autumn.setAttribute("src","autumn.gif");
    autumn.setAttribute("alt","Autumn");
    autumn.setAttribute("width","100%");
    autumn.setAttribute("height","100%");
    autumn.setAttribute("border-radius","30px");
  }
  else
  {
    var winter=document.getElementById("image");
    winter.setAttribute("src","winter.gif");
    winter.setAttribute("alt","Winter");
    winter.setAttribute("width","100%");
    winter.setAttribute("height","100%");
    winter.setAttribute("border-radius","30px");
  }
}

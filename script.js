const span = document.getElementById('clock');
const lightColours = ["rgb(255, 179, 179)","rgb(255, 255, 179)","rgb(179, 255, 179)","rgb(179, 255, 255)","rgb(179, 217, 255)","rgb(255, 179, 255)"];
const darkColours = ["rgb(128, 0, 0)","rgb(128, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 128)","rgb(0, 64, 128)","rgb(128, 0, 128)"];
function time()
{
     let randomNumber = Math.floor(Math.random() * (lightColours.length - 1));
     let futureColour = lightColours[randomNumber];
     let futureColourText = darkColours[randomNumber];
     if (futureColour == document.body.style.backgroundColor)
     {
          while (futureColour == document.body.style.backgroundColor)
          {
               randomNumber = Math.floor(Math.random() * (lightColours.length - 1));
               futureColour = lightColours[randomNumber];
               futureColourText = darkColours[randomNumber];
          }
     }
     document.body.style.backgroundColor = futureColour;
     span.style.color = futureColourText;
     document.getElementsByTagName('FOOTER')[0].style.boxShadow = futureColourText + "0px 20px 30px -10px";
     let d = new Date();
     let s = d.getSeconds();
     s = s.toString();
     if (s.length == 1)
     {
          s = "0" + s;
     }
     let m = d.getMinutes();
     m = m.toString();
     if (m.length == 1)
     {
          m = "0" + m;
     }
     let h = d.getHours();
     h = h.toString();
     if (h.length == 1)
     {
          h = "0" + h;
     }
     span.textContent = h + ":" + m + ":" + s;
}
setInterval(time, 1000);
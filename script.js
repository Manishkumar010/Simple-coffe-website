
function demo(x){
    //  document.getElementById("cover").scrollBy(x,0);
     document.getElementById("cover").scrollBy({
        top:0,
        left:x,
        behavior:"smooth"
     });
}

function clickButton(){
   gsap.to("#cover .left,#cover .right",{
      duration:1,
      opacity:0,
      display:"none",
      scrollTrigger:{
         trigger:"#cover .left,#cover .right",
         scroller:"body",
         start:"top 10%",
         end:"top 0%",
         scrub:1,
         // markers:true
      }
   })
   
}

function headerBackground(){
   gsap.to("#cover header",{
      duration:1,
      backgroundColor:"white",
      color:"black",
      scrollTrigger:{
         trigger:"#cover header",
         scroller:"body",
         start:"top -10%",
         end:"top 0%",
         scrub:2,
         // markers:true
      }
   },"same")
   gsap.to("#cover header h2,a,h4",{
      color:"black",
      scrollTrigger:{
         trigger:"#cover header h2,a,h4",
         scroller:"body",
         start:"top -10%",
         end:"top 0%",
         scrub:2,
         // markers:true
      }
   },"same")
}
headerBackground()
clickButton()


$(document).ready(function(){
    $(".button").click(function(){

      var value = $(this).attr("data-filter");

      if (value == "all") {

        $(".filter").show("1000");
      }
      else{
       $(".filter").not("." +value).hide("1000"); 
       $(".filter").filter("." +value).show("1000"); 
      }

      //add active class
      $("ul .button").click(function(){

        $(this).addClass('active').siblings().removeClass('active');
      })
    })

 })


/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.width = "100%";

  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.querySelector('.mery').style.display= 'block';
    document.querySelector('.merd ').style.display= 'block';
  }

  
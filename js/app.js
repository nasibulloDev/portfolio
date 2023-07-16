window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 5);
});
function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}


AOS.init({
    easing: 'ease-in-out-sine'
  });






  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
  e.preventDefault();
  var token = "5683585432:AAHkgGsw9rUn52gpE8wHXb297kUd3c-V98E";
  var chat_id = 598570791;
  var text1 = document.getElementById("text").value;
  var text2 = document.getElementById("textt").value;
  var text3 = document.getElementById("texttt").value;
  var my_text = text1;  
  var my_text2 = text2;
  var my_text3 = text3
  console.log(text1);
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text= Ism: ${my_text} Nomer:  ${my_text2} Xabar: ${my_text3}`;
  let api = new XMLHttpRequest();
  api.open("GET", url , true);
  api.send();
  form.reset()
  console.log("Habar yuborildi");
  
  })

//body color

  function white() {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("bod").style.backgroundColor = "white";
    document.getElementById("bod").style.color = "black";
    document.getElementById("bo").style.backgroundColor = "white";
    document.getElementById("bo").style.color = "black";
    document.getElementById("b").style.backgroundColor = "white";
    document.getElementById("b").style.color = "black";
    document.getElementById("text").style.border = "1px solid black";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.backgroundColor = "white";
    document.getElementById("textt").style.border = "1px solid black";
    document.getElementById("textt").style.color = "black";
    document.getElementById("textt").style.backgroundColor = "white";
    document.getElementById("texttt").style.border = "1px solid black";
    document.getElementById("texttt").style.color = "black";
    document.getElementById("texttt").style.backgroundColor = "white";
    document.getElementById("tet").style.color = "black";
    document.getElementById("tet").style.backgroundColor = "white";
    document.getElementById("tett").style.color = "black";
    document.getElementById("tett").style.backgroundColor = "white";
    document.getElementById("tettt").style.color = "black";
    document.getElementById("tettt").style.backgroundColor = "white";
    document.getElementById("card1").style.color = "black";
    document.getElementById("card1").style.backgroundColor = "white";
    document.getElementById("card1").style.border = "1px solid black";
    document.getElementById("card2").style.color = "black";
    document.getElementById("card2").style.backgroundColor = "white";
    document.getElementById("card2").style.border = "1px solid black";
    document.getElementById("card3").style.color = "black";
    document.getElementById("card3").style.backgroundColor = "white";
    document.getElementById("card3").style.border = "1px solid black";
    document.getElementById("card4").style.color = "black";
    document.getElementById("card4").style.backgroundColor = "white";
    document.getElementById("card4").style.border = "1px solid black";
    document.getElementById("card5").style.color = "black";
    document.getElementById("card5").style.backgroundColor = "white";
    document.getElementById("card5").style.border = "1px solid black";
    document.getElementById("card6").style.color = "black";
    document.getElementById("card6").style.backgroundColor = "white";
    document.getElementById("card6").style.border = "1px solid black";
    document.getElementById("form").style.border = "1px solid black";

  }
  function black() {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
    document.getElementById("bod").style.backgroundColor = "black";
    document.getElementById("bod").style.color = "white";
    document.getElementById("bo").style.backgroundColor = "black";
    document.getElementById("bo").style.color = "white";
    document.getElementById("b").style.backgroundColor = "black";
    document.getElementById("b").style.color = "white";
    document.getElementById("text").style.border = "1px solid #ffff00";
    document.getElementById("text").style.color = "white";
    document.getElementById("text").style.backgroundColor = "black";
    document.getElementById("textt").style.border = "1px solid #ffff00";
    document.getElementById("textt").style.color = "white";
    document.getElementById("textt").style.backgroundColor = "black";
    document.getElementById("texttt").style.border = "1px solid #ffff00";
    document.getElementById("texttt").style.color = "white";
    document.getElementById("texttt").style.backgroundColor = "black";
    document.getElementById("tet").style.color = "white";
    document.getElementById("tet").style.backgroundColor = "black";
    document.getElementById("tett").style.color = "white";
    document.getElementById("tett").style.backgroundColor = "black";
    document.getElementById("tettt").style.color = "white";
    document.getElementById("tettt").style.backgroundColor = "black";
    document.getElementById("card1").style.border = "1px solid #ffff00";
    document.getElementById("card1").style.color = "white";
    document.getElementById("card1").style.backgroundColor = "black";
    document.getElementById("card2").style.border = "1px solid #ffff00";
    document.getElementById("card2").style.color = "white";
    document.getElementById("card2").style.backgroundColor = "black";
    document.getElementById("card3").style.border = "1px solid #ffff00";
    document.getElementById("card3").style.color = "white";
    document.getElementById("card3").style.backgroundColor = "black";
    document.getElementById("card4").style.border = "1px solid #ffff00";
    document.getElementById("card4").style.color = "white";
    document.getElementById("card4").style.backgroundColor = "black";
    document.getElementById("card5").style.border = "1px solid #ffff00";
    document.getElementById("card5").style.color = "white";
    document.getElementById("card5").style.backgroundColor = "black";
    document.getElementById("card6").style.border = "1px solid #ffff00";
    document.getElementById("card6").style.color = "white";
    document.getElementById("card6").style.backgroundColor = "black";
    document.getElementById("form").style.border = "1px solid #ffff00";

  }



  //body color end




  


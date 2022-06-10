//carosel-------------------
//if you want to you container exchange of container-fluid 
//set margin -10 to see the result
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    rtl: true,
    // autoplay: true,
    // autoplayTimeout: 3500,
    // autoplayHoverPause: true,
    margin: 10,
    loop: true,
    // nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 6,
      },
      1600: {
        items: 6,
      },
    },
  });
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
})

// cardSrc set to coverSrc
  let f_cover = document.getElementById('cover');
  let f_cardList = document.getElementsByClassName('f-card');
  for (let i = 0 ; f_cardList.length ; i++){
    f_cardList[i].onclick = function(){
        f_cover.src = this.src;
    }
}


function dshow(){
  document.getElementById("eyeclose").style.display="block";
  document.getElementById("eyeopen").style.display="none";
  document.getElementById("password").type="password";
}
function dhide(){
  document.getElementById("eyeopen").style.display="block";
  document.getElementById("eyeclose").style.display="none";
  document.getElementById("password").type="text";
}
function dshow2(){
  document.getElementById("eyeclose2").style.display="block";
  document.getElementById("eyeopen2").style.display="none";
  document.getElementById("pass").type="password";
}
function dhide2(){
  document.getElementById("eyeopen2").style.display="block";
  document.getElementById("eyeclose2").style.display="none";
  document.getElementById("pass").type="text";
}
function dshow3(){
  document.getElementById("eyeclose3").style.display="block";
  document.getElementById("eyeopen3").style.display="none";
  document.getElementById("confirm-pass").type="password";
}
function dhide3(){
  document.getElementById("eyeopen3").style.display="block";
  document.getElementById("eyeclose3").style.display="none";
  document.getElementById("confirm-pass").type="text";
}



function display(id){
  document.getElementById(id).classList.remove("d-none");
}
function display2(id){
  document.getElementById(id).classList.add("d-none");
}




// let cardac = document.getElementById('cardac');
// let trailer = document.getElementById('trailer');
//   cardac.onclick = function(){
//     trailer.src = this.nextElementSibling.src;
//   }




// let f_num = document.getElementById('positive-num');
// let f_plus = document.getElementById('plus');
// let likeCounter = 0;
// f_plus.onclick = function () {
//   let counter = parseInt(this.previousElementSibling.innerHTML)
//   counter++;
//   this.previousElementSibling.innerHTML = counter
  // likeCounter++;
  // this.previousElementSibling.innerHTML = likeCounter
// }
// let plus =document.getElementsByClassName('positive-response');
//  plus.onclick = function(evt){
//    this.pare
//  }


// this.previousElementSibling.innerHTML = s1;

// ternary operator
// document.getElementById('p2').innerHTML = greeting;


// if (hour < 18) {
//   greeting = 'Good Day';
// }
// else {
//   greeting = 'Good Evening';
// }


// document.getElementById('p7').innerHTML += ', (in myFunction3) ' + window.firstName


// switch (day) {
//   case 3:
//     dayName = 'Wednsday';
//     break;
//     default:
//     dayName = 'Saturday';
//     break;
// }
    

// let txt = 'Start <br>';
// let x = Math.floor(Math.random() * 256);
// while (x < 200) {
//   txt += 'x = ' + x + '<br>';
//   x = Math.floor(Math.random() * 256);
// }
// document.getElementById('p1').innerHTML = txt;


// do {
//   x = Math.floor(Math.random() * 256);
//   txt += 'x = ' + x + '<br>';
// } while (x < 200);
// document.getElementById('p2').innerHTML = txt;


// txt = '';
//       counter = 10;
//       while (counter > 0) {
//         txt += 'counter = ' + counter + '<br>';
//         counter -= 2;
//       }
//       document.getElementById('p4').innerHTML = txt;


// for (counter = 0, txt = ''; counter < 10; counter++) {
//   txt += 'counter = ' + counter + '<br>';
// }
// document.getElementById('p5').innerHTML = txt;



// var modal = document.getElementById("myModal");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// img.onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//     modal.style.display = "none";
// }


var but = document.getElementById("btn1");


function myfun() {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop  > 20) {
        but.style.display = 'block';
    } else {
        but.style.display = 'none';
    }
}

window.onscroll = function(){
    myfun()
}

function scrolltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// menu fixed

// function navFunction(){
//     var nav = document.getElementById('nav');

//     if(document.body.scrollTop > 100 || document.documentElement.scrollTop  > 100) {
//         nav.style.backgroundColor = '#151515';
//         nav.style.position = 'fixed';
//     // } else {
//     //     nav.style.backgroundColor = '#151515';
//     //     nav.style.position = 'fixed';
//     // }
//     }
// }

var nav = document.getElementById('nav');

window.addEventListener("scroll", function() {
  if (window.scrollY > 150 || document.documentElement.scrollTop > 150) {
    nav.classList.add("fixed-navbar");
  } else {
    nav.classList.remove("fixed-navbar");
  }
});



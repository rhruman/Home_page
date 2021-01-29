//SLIDE SHOW SECTION START

setInterval(function () {
  if (document.getElementsByClassName('show_menu')[0].classList.contains('active')) {
    document.getElementsByClassName('show_menu')[1].classList.add('active');
    document.getElementsByClassName('show_menu')[0].classList.remove('active');
  } else if (document.getElementsByClassName('show_menu')[1].classList.contains('active')) {
    document.getElementsByClassName('show_menu')[2].classList.add('active');
    document.getElementsByClassName('show_menu')[1].classList.remove('active');
  } else if (document.getElementsByClassName('show_menu')[2].classList.contains('active')) {
    document.getElementsByClassName('show_menu')[0].classList.add('active');
    document.getElementsByClassName('show_menu')[2].classList.remove('active');
  }
}, 4000);

//SLIDE SHOW SECTION END
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  };
};

// var w, h, loopId, canvas, ctx, particles;

// var options={
//   particleColor:"rgba(255, 255, 255)",
//   lineColor:"rgba(0,181,255)",
//   particleAmount:30,
//   defaultRadius:2,
//   variantRadius:2,
//   defaultSpeed:1,
//   variantSpeed:1,
//   linkRadius:100
// };
// document.addEventListener("DOMContentLoaded", init);

// function init(){
//   canvas=document.getElementById("canvas");
//   ctx=canvas.getContext("2d");
//   resizeReset();
//   initialiseElements();
//   startAnimation();
// }
// function resizeReset(){
//   w=canvas.width=window.innerWidth;
//   h=canvas.height=window.innerHeight;
// }
// function initialiseElements(){
//   particles=[];
//   for(var i=0; i< options.particleAmount; i++){
//     particles.push(new particles());
//   }
// }

// function startAnimation(){
//   loopId=requestAnimationFrame(animationLoop);
// }
// function animationLoop(){
//   ctx.clearRect(0,0,w,h);
//   drawScene();
//   id=requestAnimationFrame(animationLoop);
// }
// function drawScene(){
//   drawParticle();
// }
// function drawParticle(){
//   for(var i=0; i< particles.lenght; i++){
//     particles[i].update();
//     particles[i].draw();
//   }
// }
// Particle=function(){
//   var _this= this;

//   _this.x=Math.random() * w;
//   _this.y=Math.random() * h;
//   _this.color= options.particleColor;
//   _this.radius=options.defaultRadius + Math.random() * options.variantRadius;
//   _this.speed=options.defaultSpeed + Math.random() * options.variantSpeed;
//   _this.directionAngle=Math.floor(Math.random() * 360);
//   _this.vector={
//     x:Math.css(_this.directionAngle) * _this.speed,
//     x:Math.sin(_this.directionAngle) * _this.speed
//   }
//   _this.update=function(){
//         _thix.border();
//         _this.x += _this.vector.x;
//         _this.y += _this.vector.y;
//   }
//   _this.border=function(){
//       if(_this.x >=w||_this.x<=0){
//         _this.vector.x+=-1;
//       }
//       if(_this.y >=h||_this.y<=0){
//         _this.vector.y+=-1;
//       }
//       if(_this.x>w)_this.x=w;
//       if(_this.y>h)_this.y=h;
//       if(_this.x>0)_this.x=0;
//       if(_this.y>0)_this.y=0;
//   }
//   _this.draw=function(){
//     ctx.beginPath();
//     ctx.arc(_this.x, _this.y, _this.radius, 0 , Math.PI * 2);
//     ctx.closePath();
//     ctx.fillStyle=_this.color;
//     ctx.fill(); 
//   }
// }
$('.skill_per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 1000,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  })
});
setInterval(function () {
  if (document.getElementsByClassName('img_client_text')[0].classList.contains('active1')) {
    document.getElementsByClassName('img_client_text')[1].classList.add('active1');
    document.getElementsByClassName('img_client_text')[0].classList.remove('active1');
  } else if (document.getElementsByClassName('img_client_text')[1].classList.contains('active1')) {
    document.getElementsByClassName('img_client_text')[2].classList.add('active1');
    document.getElementsByClassName('img_client_text')[1].classList.remove('active1');
  } else if (document.getElementsByClassName('img_client_text')[2].classList.contains('active1')) {
    document.getElementsByClassName('img_client_text')[0].classList.add('active1');
    document.getElementsByClassName('img_client_text')[2].classList.remove('active1');
  }
}, 4000);

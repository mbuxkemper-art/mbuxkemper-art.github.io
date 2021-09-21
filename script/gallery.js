$(document).ready(function() {

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let rightId = 'image2';
let leftId = 'image5';
////Dynamic Offset for left/right images


function setOffsets() {
    offset = ($(window).width())/8.5;
    offsetCss = 'translateX(' + (offset) + 'px)';
    negOffsetCss = 'translateX(' + (-offset) + 'px)';
    console.log('resize');
    // document.getElementById(rightId).style.transform =  offsetCss;
    // document.getElementById(leftId).style.transform =  negOffsetCss;


}
setOffsets();   
// let offset = ($(window).width())/8.5;
// let offsetCss = 'translateX(' + (offset) + 'px)';
document.getElementById('image2').style.transform = offsetCss;
// let negOffsetCss = 'translateX(' + (-offset) + 'px)';
document.getElementById('image5').style.transform = negOffsetCss;

window.addEventListener('resize', setOffsets);

console.log('offset' + offset);





let counter = 1;
console.log(counter);
const size = 605;
let infoBtn1 = document.querySelector('#infoBtn1');
let infoBtn2 = document.querySelector('#infoBtn2');
let infoBtn3 = document.querySelector('#infoBtn3');
let infoBtn4 = document.querySelector('#infoBtn4');
let infoBtn5 = document.querySelector('#infoBtn5');

let prefixInfo = "#info"
let prefix = "image";

nextBtn.addEventListener('click',() => {
   
    let leftId = 0;
    
    if(counter <= 1){
        console.log('yes');
        leftId = prefix.concat(5);
    } else{
        leftId = prefix.concat(counter-1);
    }
    let frontId = prefix.concat(counter);
    let frontInfo =prefixInfo.concat(counter);
    let rightId = 0;
    if(counter >= 5){
        console.log('yes2');
        rightId = prefix.concat(1);
    } else{
        rightId = prefix.concat(counter+1);
    }
    // let leftId = prefix.concat(counter-1);
    let backId = 0;
    if(counter <= 3){
  
        backId = prefix.concat(counter+2);
    } else{
        backId = prefix.concat(counter-3);
    }
    console.log(leftId + frontId +  rightId + backId);
   
   //Front Image
    document.getElementById(frontId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(frontId).style.transform =  negOffsetCss;
    document.getElementById(frontId).style.opacity =  "0.75";
    document.getElementById(frontId).style.zIndex =  "5";
    $(frontInfo).fadeOut('fast');
    


    //Right Image
    document.getElementById(rightId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(rightId).style.transform =  'scale(1.1)';
    // document.getElementById(rightId).style.transition = "opacity 0.4s ease-in-out";
    document.getElementById(rightId).style.opacity =  "1";
    document.getElementById(rightId).style.zIndex =  "10";

    //Left Image
    document.getElementById(leftId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(leftId).style.transform =  'translateX(' + (0) + 'px)';
    document.getElementById(leftId).style.transform =  'scale(.2)';

    // document.getElementById(leftId).style.transition = "opacity 0.4s ease-in-out";
    // document.getElementById(leftId).style.opacity =  "0";

    //Back Image
    document.getElementById(backId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(backId).style.transform =  offsetCss;


    console.log('next');
    
    if(counter<=4){
    counter++;} else{
        counter = 1;
    }
    swtch=0;

    // infoBtn= document.querySelector(prefixBtn.concat(counter));
    // console.log(infoBtn);

});

//PREVIOUS BUTTON
prevBtn.addEventListener('click',() => {
    let prefix = "image";
    let leftId = 0;
   
    if(counter <= 1){
        console.log('yes');
        leftId = prefix.concat(5);
    } else{
        leftId = prefix.concat(counter-1);
    }
    let frontId = prefix.concat(counter);
    let frontInfo =prefixInfo.concat(counter);
    let rightId = 0;
    if(counter >= 5){
        console.log('yes2');
        rightId = prefix.concat(1);
    } else{
        rightId = prefix.concat(counter+1);
    }
    // let leftId = prefix.concat(counter-1);
    let backId = 0;
    if(counter >= 3){
  
        backId = prefix.concat(counter-2);
    } else{
        backId = prefix.concat(counter+3);
    }
    console.log(leftId + frontId +  rightId + backId);
   
   //Front Image
    document.getElementById(frontId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(frontId).style.transform =  offsetCss;
    document.getElementById(frontId).style.opacity =  "0.75";
    document.getElementById(frontId).style.zIndex =  "5";
    $(frontInfo).fadeOut('fast');
    


    //Left Image
    document.getElementById(leftId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(leftId).style.transform =  'scale(1.1)';
    // document.getElementById(rightId).style.transition = "opacity 0.4s ease-in-out";
    document.getElementById(leftId).style.opacity =  "1";
    document.getElementById(leftId).style.zIndex =  "10";

    //Right Image
    document.getElementById(rightId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(rightId).style.transform =  'translateX(' + (0) + 'px)';
    document.getElementById(rightId).style.transform =  'scale(.2)';

    // document.getElementById(leftId).style.transition = "opacity 0.4s ease-in-out";
    // document.getElementById(leftId).style.opacity =  "0";

    //Back Image
    document.getElementById(backId).style.transition = "transform 0.4s ease-in-out";
    document.getElementById(backId).style.transform =  negOffsetCss;


    console.log('next');
    
    if(counter>=2){
    counter--;} else{
        counter = 5;
    }
    swtch=0;
});

//info buttons
let swtch=0;
infoBtn1.addEventListener('click',() => {
    console.log('fired')
    if (swtch == 1){
        $(prefixInfo.concat(counter)).fadeOut('fast');
        console.log("ibtn1off");
        swtch = 0;
        }
    
    else{
    $(prefixInfo.concat(counter)).fadeIn('fast');
    console.log("ibtn1on");
    swtch = 1;
    }
    
});

infoBtn2.addEventListener('click',() => {
    console.log('fired')
    if (swtch == 1){
        $('#info2').fadeOut('fast');
        console.log("ibtn1off");
        swtch = 0;
        }
    
    else{
    $('#info2').fadeIn('fast');
    console.log("ibtn1on");
    swtch = 1;
    }
    
});

infoBtn3.addEventListener('click',() => {
    console.log('fired')
    if (swtch == 1){
        $('#info3').fadeOut('fast');
        console.log("ibtn1off");
        swtch = 0;
        }
    
    else{
    $('#info3').fadeIn('fast');
    console.log("ibtn1on");
    swtch = 1;
    }
    
});

infoBtn4.addEventListener('click',() => {
    console.log('fired')
    if (swtch == 1){
        $('#info4').fadeOut('fast');
        console.log("ibtn1off");
        swtch = 0;
        }
    
    else{
    $('#info4').fadeIn('fast');
    console.log("ibtn1on");
    swtch = 1;
    }
    
});

infoBtn5.addEventListener('click',() => {
    console.log('fired')
    if (swtch == 1){
        $('#info5').fadeOut('fast');
        console.log("ibtn1off");
        swtch = 0;
        }
    
    else{
    $('#info5').fadeIn('fast');
    console.log("ibtn1on");
    swtch = 1;
    }
    
});




});
//js/main.js
var silder_img = document.querySelector('.silder-img')
var picture=['p1.jpeg' , 'p2.jpg' , 'p3.jpg','p4.jpeg' , 'p5.jpeg' , 'p7.jpeg','p8.jpeg' , 'p9.jpeg' , 'p10.jpeg' , 'picture\p11.jpeg' , 'p13.jpeg','p14.jpeg' , 'p16.jpeg' , 'p18.jpeg','p22.jpeg' , 'p24.jpeg','p28.jpeg' , 'p29.jpeg' , 'p111.jpg'];
var i=0; //current img imdex

function prev(){
    if (i<=0) i=picture.length;
    i--;
    return setImg();
}

function next(){
    if (i>=picture.length-1) i=-1;
    i++;
    return setImg();
}

function setImg(){
    return silder_img.setAttribute('src', 'picture'+picture[i]);
}

 function icon_smile(){
     return '&#128578';
 }
 


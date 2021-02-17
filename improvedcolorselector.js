"use strict";

window.addEventListener("DOMContentLoaded", start);



function start(){
    document.getElementById("chosen_color").addEventListener("input", start);
    const hex = getColorFromUser();
    const rgb = convertHexToRgb(hex);
    const hsl = convertRgbToHsl(rgb.r, rgb.g, rgb.b);
    displayColor(hex);
    displayHexValue(hex);
    displayRgbValues(rgb.r, rgb.g, rgb.b);
    displayHslValue(hsl.h, hsl.s, hsl.l);
    
}

function displayColor(hexValue){
    document.getElementById("color_box").style.backgroundColor = hexValue;
}

function getColorFromUser(){
   const hexValue = document.getElementById("chosen_color").value;
   return hexValue;
}

function convertHexToRgb(hexValue){
let r = Number.parseInt(hexValue.substring(1 , 3), 16);
let g = Number.parseInt(hexValue.substring(3 , 5), 16);
let b = Number.parseInt(hexValue.substring(5 , 7), 16);
return {r, g, b};


}

function convertRgbToHsl(r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    h = Math.round(h)
    l = Math.round(l)
    s = Math.round(s)
  
    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
    return {h, s, l};
   
}

function displayHexValue(hexValue){
    document.getElementById("hex").innerText = "HEX value: " + hexValue;
}

function displayRgbValues(r, g, b){
    document.getElementById("rgb").innerText = "RGB value: " + r + " : " + g + " : " + b;
}

 function displayHslValue(h, s, l){
    document.getElementById("hsl").innerText = "HSL value: "  + h + " : " + s + " : " + l;
 }

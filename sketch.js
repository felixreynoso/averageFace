var imgs = [];
var avgImg;
var numOfImages = 30;

//////////////////////////////////////////////////////////
function preload() { // preload() runs once
  
//Load the dataset of images into the imgs array
for (var i = 0; i < numOfImages; i++)
  imgs.push(loadImage(`assets/${i}.jpg`));   
}
//////////////////////////////////////////////////////////
function setup() {
  createCanvas(imgs[0].width*2, imgs[0].height);
  pixelDensity(1);
  avgImg = createGraphics(imgs[0].width, imgs[0].height);
  avgImg.loadPixels();
  
}
//////////////////////////////////////////////////////////
function draw() {
  background(125);
  image(imgs[frameCount%30],0,0);
    
  for (img of imgs) {
    img.loadPixels();
  }
  
  for (var h = 0; h < imgs[0].height; h++) {
    for (var w = 0; w < imgs[0].width; w++) {
      //calculate the index for the current pixel of avgImage
      let pixelIndex = (imgs[0].width * h + w)*4;
      // initialize three variables to compute the sum of the pixel value at position
      // pixelIndex,for all the images in the imgs array
      [sumR, sumG, sumB] =  [0,0,0];
        
        
      for (img of imgs) {
        sumR += img.pixels[pixelIndex+0];
        sumG += img.pixels[pixelIndex+1];
        sumB += img.pixels[pixelIndex+2];
      }
      avgImg.pixels[pixelIndex+0] = sumR/imgs.length; // mean of red channel values 
      avgImg.pixels[pixelIndex+1] = sumG/imgs.length; // mean of green channel values
      avgImg.pixels[pixelIndex+2] = sumB/imgs.length; // mean of blue channel values
      avgImg.pixels[pixelIndex+3] = 255; // alpha channel set to 255
    }

  }
  avgImg.updatePixels();
  image(avgImg,avgImg.width,0);


//  noLoop();
}
/*
title: Average face

In this project I decided to explore the artistic applications of pixel manipulation. Using the p5.js library and a dataset of 30 face images. I took inspiration from Jason Salavon who is a computer artist who has created a whole series of special moments using similar techniques, his work can be found here -> http://salavon.com/work/SpecialMoments/.

The dataset of face images used in this project is super interesting since they are all computer generated using machine learning, therefore this people have never existed. More information can be found here -> https://generated.photos/

The way to achieve this artistic output of an average face, is to traverse the pixel array of each image, storing the values of each pixel for their Red, Green, Blue and Alpha channels, and then for each pixel, calculating the mean of the values. Then assigning the result to a single pixel in a new canvas. 


*/
title: Average face

In this project I decided to explore the artistic applications of pixel manipulation. Using the p5.js library and a dataset of 30 face images. I took inspiration from Jason Salavon who is a computer artist who has created a whole series of special moments using similar techniques, his work can be found here -> http://salavon.com/work/SpecialMoments/.

The dataset of face images used in this project is super interesting since they are all computer generated using machine learning, therefore this people have never existed. More information can be found here -> https://generated.photos/

The way to achieve this artistic output of an average face, is to traverse the pixel array of each image, storing the values of each pixel for their Red, Green, Blue and Alpha channels, and then for each pixel, calculating the mean of the values. Then assigning the result to a single pixel in a new canvas. 

tags: 
Computer Graphics, web development, front-end, programming
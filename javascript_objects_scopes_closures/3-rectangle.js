#!/usr/bin/node
// Write a class Rectangle that defines a rectangle:
class Rectangle{

  constructor(w,h) {
    
    if((w <= 0) || (h <= 0) || !w || !h){
      return this
    }
    this.width = w;
    this.height = h;

  }
  print () {
    for (let i = 0; i <= this.height; i++) {
      let row = '';
      for (let j = 0; j <= this.width; j++) {
          row += 'X';
      }
      console.log(row);
    }
  }
}

module.exports = Rectangle;



// function print (width,height) {
//   for (let i = 0; i <= height; i++) {
//     let row = '';
//     for (let j = 0; j <= width; j++) {
//         row += 'X';
//     }
//     console.log(row);
//   }
// }

// print(3,4);
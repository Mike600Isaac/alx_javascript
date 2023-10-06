#!/usr/bin/node
//2-rectangle.js
// create a class using a dot notation & an empty object
// using the prototype

// class Rectangle {
//   constructor(w,h) {

//     if( (w || h === 0) || (w || h < 0) ){ 

//     }

//     this.width = w;
//     this.height = h;
//   }
  
// }



// module.exports = Rectangle;






class Rectangle {

	constructor(w, h) {
		// if ((w <= 0) || (h <= 0) || !Number.isInteger(w) || !Number.isInteger(h)) {
		// 	this.width = undefined;
		// 	this.height = undefined;
		// }
		// else {
		// 	this.width = w;
		// 	this.width = h;
		// }
		if ((w <= 0) || (h <= 0) || !h || !w) {
            return this;
          }
        this.width = w;
        this.height = h;
	}
}

module.exports = Rectangle;
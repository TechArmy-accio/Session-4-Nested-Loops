// *****
// *****
// *****
// *****

// rows = 4 
// columns = 5


// for(let row = 1; row<=4; row++){


//     let str = ""
//     for(let col = 1; col<=5; col++){
//         str = str + "*"
//     }
//     console.log(str)

// }


// *
// **
// ***
// ****


// for(let row = 1; row<=4; row++){


//     let str = ""
//     for(let col = 1; col<=row; col++){
//         str = str + "*"
//     }
//     console.log(str)

// }


// *
// ***
// *****
// *******
// *********

// let x = 1
// for(let row = 1; row<=5; row++){


//     let str = ""
//     for(let col = 1; col<= 2*row-1 ; col++){
//         str = str + "*"
//     }
//     console.log(str)

//     // x = x + 2 // 5

// }


//    1
//   12
//  123
// 1234
//12345

let x = 4

for(let row = 1; row<=5; row++){

    let str1 = ""
   for(let space = 1; space <= x; space++){
       str1 = str1 + " "  // space
   }
   x = x - 1

    let str = ""
    for(let col = 1; col<= row ; col++){
          str = str + col // 1
    }
    console.log(str1 + str)

   

}
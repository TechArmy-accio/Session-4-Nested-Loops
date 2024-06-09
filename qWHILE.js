// let n = 8769


// last = n%10  // 9 
// remaining = parseInt(n/10) // 876
// n = remaining

// // 876
// last = n%10 // 6
// remaining = parseInt(remaining/10) // 87 
// n = remaining


// // 87

// last = n%10 // 7
// remaining = parseInt(remaining/10) // 8


// let n = 8769
// // while(n>0){ // n=876, 87, 8
// //     last = n%10  // 9 ,6, 7, 8
// //     console.log(last) // 9, 6, 7, 8
// //     // remaining = parseInt(n/10) // 876, 87, 8, 0
// //     // n = remaining // 87, 8, 0
// //     // n = parseInt(n/10)
// // }


// for(let i = n;  i>0; i= parseInt(i/10)){
//     last = i%10
//     console.log(last)
// }


// let n = 8176 

// => 6,7,8,8 

// 6718 => 8,1,7,6


// 7,8,9 

// 7*10 = 70+8 = 78*10= 780+9 = 789



// let n = 8176 
// let rev = 0

// while(n>0){
//     let last = n%10
//     // console.log(last) // 6, 7, 1, 8
//     rev = rev*10 +last // 6710+8 = 6718
//     n = parseInt(n/10)
// }
// console.log(rev) // 6718


// take a number and count nunber of zeros it have

// let n = 1003000400

// let count = 0
// while(n>0){
//     let last = n%10
//     if(last == 0){
//         count++
//     }

//     n = parseInt(n/10)
// }


// console.log(count)




// 1003000400
// only count ending zeros


let n = 1003000400

let count = 0
while(n>0){
    let last = n%10
    if(last == 0){
        count++
    }
    else if(last!=0){
       break
    }

    n = parseInt(n/10)
}


console.log(count)
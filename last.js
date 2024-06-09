// S = ½ + ⅔ + ¾ + ⅘+ ⅚ + …. n/(n+1)

// n = 3

// 1/2 + 2/3 + 3/4

let n = 3 
let sum = 0
for(let  i =1; i<=n; i++){
  sum = sum +  i/(i+1)
}

console.log(sum.toFixed(3)) // 1.8333333333333333


// 1.321
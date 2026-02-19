function beautifulDays(i, j, k) {
    // Write your code here
    let beautifuls =  0
   const reverseNumber = (num)=>{
    let reversed = [];
    while(num > 0){
        let divided = num % 10
        reversed.push(divided)
        num = Math.floor(num / 10)  
        
    }
    let joinedDigits = reversed.join("")
     return Number(joinedDigits)
   }
 
   for(let start = i; start <= j ; start++){
      let reversedNum = reverseNumber(start)
      let subtracted = start - reversedNum
      if(Number.isInteger(subtracted/ k)){
        beautifuls++
      }
   }
}
beautifulDays(20, 23,6)

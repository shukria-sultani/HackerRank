function angryProfessor(k, a) {
    // Write your code here
   let earlyStudents = 0;
   for(let i = 0; i < a.length; i++){
     if(a[i] <= 0){
        earlyStudents++
     }
   }
   if(earlyStudents === k){
    return "NoYES"
   }
   else{
    return "NO"
   }
}
angryProfessor()
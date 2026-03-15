function chocolateFeast(n, c, m) {
    let chocolate = Math.floor(n /c)
    let warppers = chocolate

    while(warppers >= m){
        let newChocolate =Math.floor(warppers / m)
        chocolate += newChocolate

        warppers = (warppers % m) + newChocolate
    }
   
    return chocolate
}
console.log(chocolateFeast(6, 2, 2))

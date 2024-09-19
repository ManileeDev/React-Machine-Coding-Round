

function firstChar(name){
    let strArr = name.split(" ")
    let first = ""
    // for(let i=0;i<strArr.length;i++){
    //     first+=strArr[i].charAt(0) //strArr[0] = Mani => strArr[0].charAt(0)
    //  }
   console.log(strArr.map(str=>str.charAt(0).toUpperCase()).join("")) //[M,K]
   
}

console.log(firstChar("lee rajesh"))
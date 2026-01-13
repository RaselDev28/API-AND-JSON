let a=0;

const clockID = setInterval(()=>{
    a++;
    console.log(a);

    // clearInterval(clockID)
    if(a>=5){
        clearInterval(clockID)
    }
},3000)

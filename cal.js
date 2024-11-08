function display(num){
    result.value+=num
}

function clearall(){
    result.value=""
}

function backbtn(){
    result.value =result.value.slice(0,-1) 
}

function equal(){
   try{
        result.value = eval(result.value) 
        if(result.value == `undefined`){
            result.value = "error"
            setTimeout(() => {
                result.value =""
            }, 1000);
        }

     }
     catch{
        result.valu`error`
        setTimeout(() => {
            result.value
        }, 1000);
    }
}
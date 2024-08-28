function checkNumber(number){
    return new Promise((resolve,reject)=>{
      if(number>0)
      {
        if(checkNumber%2==0 || checkNumber%2!=0)
            {
                resolve("Number is positive either even or odd");
            }
      }
      else{
        reject("Number is negative");
      }

    });
}


checkNumber(-5).then((message) =>{
    console.log(message);
  }).catch((error)=>{
    console.log(error);
  }).finally(()=>{
    console.log("Bye!!!");
  }); 


  checkNumber(5).then((message) =>{
    console.log(message);
  }).catch((error)=>{
    
  }).finally(()=>{
    console.log("Bye!!!");
  }); 

  checkNumber(6).then((message) =>{
    console.log(message);
  }).catch((error)=>{
    
  }).finally(()=>{
    console.log("Bye!!!");
  }); 
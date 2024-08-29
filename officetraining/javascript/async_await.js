let promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Promise reosolved');
    }, 6000);
});

async function asynfunction(){
    console.log('Before the await is called ...');
    let result = await promise1;
    console.log('After the result....');
    console.log(result);
    console.log("Hello..");
}
asynfunction();

let promise1 = new Promise((reject, resolve)=>{
    setTimeout(() => {
        console.log("promise 1 done")
    }, 6000);
});

let promise2 = new Promise((reject, resolve)=>{
    setTimeout(() => {
        console.log("promise 2 done")
    }, 4000);

});


let promise3 = new Promise((reject, resolve)=>{
    setTimeout(() => {
        console.log("promise 3 done")
    }, 5000);
});

let promise4 = new Promise((reject, resolve)=>{
    setTimeout(() => {
        console.log("promise 4 done")
    }, 12000);
});

let promise5 = new Promise((reject, resolve)=>{
    setTimeout(() => {
        console.log("promise 5 done")
    }, 3000);

});

let promise6 = new Promise((reject, resolve)=>{
    setTimeout(() => {
        console.log("promise 6 done")
    }, 7000);

});

Promise.all(promise1,promise2,promise3,promise4,promise5,promise6).then((result)=>{
console.log(`Resolved  in all: ${result}`);
}).catch((reason)=>{
    console.log(`Rejected in all : ${reason}`)
});


Promise.any(promise1,promise2,promise3,promise4,promise5,promise6).then((result)=>{
    console.log(`Resolved  in any: ${result}`);
    }).catch((reason)=>{
        console.log(`Rejected in any : ${reason}`)
    });

    
const p1 = new Promise( (resolve, reject)  => {
    setTimeout( () => {
        console.log('The first promise has resolved');
        resolve(100);
    }, 4000);
})
 
const p2 = new Promise( (resolve, reject)  => {
    setTimeout( () => {
        console.log('The second promise has resolved');
        resolve(300);
    }, 2000);
})
 
const p3 = new Promise( (resolve, reject)  => {
    setTimeout( () => {
        console.log('The third promise has resolved');
        reject(400);
    }, 6000);
})
 
const p4 = new Promise( (resolve, reject)  => {
    setTimeout( () => {
        console.log('The fourth promise has resolved');
        resolve(200);
    }, 3000);
})
 
Promise.race([p1,p2,p3,p4])
   .then(result => {
      const total = result.reduce( (p,c) => p+c);
      console.log(`Results: ${result}`);
      console.log(`Total: ${total}`)
  })
  .catch(reson=>{
    console.log(`Reject :${reson}`)
  })
  ;
 
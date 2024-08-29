function getArray() {
    return ["Java", " ML", "AI", "HTML", "CSS"]
}
 
let [g1,g2,g3="JSON",g4= "BSON",g5="YAML",g6="Node JS",g7= "React JS"] = getArray();
 
console.log(g3 + " " + g2)
console.log(g6 + " " + g7)
 
let person = {
    name: 'Ravi',
    place : {
        country : "India",
         city: "Chennai"
    },
    Hobbies: ["Cricket", "Tennis","Carrom"]
}
 
let {
       name : f1,
       place :{
          country : b2,
          city : b3
       }
} = person;
 
console.log(f1);
console.log(b2);
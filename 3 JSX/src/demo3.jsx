const myFun = (obj)=>{
    if(!obj.name)
        obj.name = obj.email;
    return `Hello ${obj.name}, your age and salary is ${obj.age} and ${obj.salary} and your email id is ${obj.email}`
}
const obj = {
    name: "",
    age : 56,
    salary : 12345,
    email : "andrew@gmail.com"
}
const msg = <p>{myFun(obj)}</p>
export default msg;
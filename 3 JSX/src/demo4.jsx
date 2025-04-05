function myFun(){
    const num = prompt("Enter number");
    var str='';
    if(isNaN(num))
        str = "Please enter number";
    else{
        for(let i=1;i<=10;i++){
            str+= num+" x "+i+" = "+(num*i)+"\n";
        }
    }
    return str;    
}

const msg = alert(myFun());
export default msg;

// const printTable = ()=>{
//     var res='';
//     var num=parseInt(prompt("Enter Number"));
//     for(let i=1;i<=10;i++){
//         res += num+" x "+i+" = "+(num*i)+"\n";
//     }
//     return res;
// }

// const result = <h1>{alert(printTable())}</h1>
// export default result;
var a = parseInt(prompt("Enter First Number"));
var b = parseInt(prompt("Enter Second Number"));
var c = parseInt(prompt("Enter Third Number"));

const result = <div>
    <h2>Sum : {a+b+c}</h2>
    <h2>Average : {((a+b+c)/3).toPrecision(3)}</h2>
    <h2>Average : {((a+b+c)/3).toFixed(3)}</h2>
</div>

export default result;

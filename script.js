document.getElementById("run").addEventListener("click",()=>{
    let amount = parseFloat(document.getElementById("lumpsum-inv").value)
    console.log(`Amount is ${amount}`)
    let year = parseFloat(document.getElementById("time").value)
    console.log(`Year is ${year}`)
    let rate = parseFloat(document.getElementById("rate-return").value)
    console.log(`Rate is ${rate}`)

    let result  = (amount*((1 + (rate/100))**year)).toFixed(2)
    
    document.getElementById("intro").innerText = `Total amount after ${year} year is ₹${result}`;
});


console.log("hello")


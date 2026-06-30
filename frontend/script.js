// Invoice Number
document.getElementById("invoice").innerHTML =
Math.floor(1000 + Math.random() * 9000);

// Current Date
document.getElementById("date").innerHTML =
new Date().toLocaleDateString();

const qty = document.querySelectorAll(".qty");

qty.forEach(item => {
    item.addEventListener("input", calculate);
});

function calculate(){

    let subtotal = 0;

    qty.forEach((item,index)=>{

        let price = Number(item.dataset.price);
        let quantity = Number(item.value);

        let total = price * quantity;

        document.querySelectorAll(".total")[index].innerHTML = total;

        subtotal += total;

    });

    let gst = subtotal * 0.18;

    let grand = subtotal + gst;

    document.getElementById("subtotal").innerHTML =
    subtotal.toFixed(2);

    document.getElementById("gst").innerHTML =
    gst.toFixed(2);

    document.getElementById("grand").innerHTML =
    grand.toFixed(2);

}

function generateBill(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

document.getElementById("invoiceBox").innerHTML =

`
<h2>Invoice</h2>

<hr>

<p><b>Customer :</b> ${name}</p>

<p><b>Phone :</b> ${phone}</p>

<p><b>Invoice No :</b> ${document.getElementById("invoice").innerHTML}</p>

<p><b>Date :</b> ${document.getElementById("date").innerHTML}</p>

<hr>

<h3>Total Amount : ₹${document.getElementById("grand").innerHTML}</h3>

<p>GST Included (18%)</p>

<h3 style="color:green;">Thank You! Visit Again 😊</h3>

`;

}

function clearBill(){

document.getElementById("name").value = "";

document.getElementById("phone").value = "";

qty.forEach(item=>{
item.value = 0;
});

document.querySelectorAll(".total").forEach(item=>{
item.innerHTML = 0;
});

document.getElementById("subtotal").innerHTML = 0;
document.getElementById("gst").innerHTML = 0;
document.getElementById("grand").innerHTML = 0;

document.getElementById("invoiceBox").innerHTML = "";

}

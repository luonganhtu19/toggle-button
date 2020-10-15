function checkButton(id) {
    let val1=document.getElementById("1");
    let val2=document.getElementById("2");
    let val3=document.getElementById("3")
    let val4=document.getElementById("4");
//alert(val1.checked)
    switch (id){
        case "1":
            if(val1.checked && val2.checked && val3.checked){
                val2.checked=false;
            }
            break;
        case "2":
            if (val1.checked && val2.checked&& val4.checked){
                val3.checked=false;
            }
            break;
        case "3":
            if (val1.checked && val3.checked && val4.checked){
                val4.checked=false;
            }
            break
        case "4":
            if (val2.checked && val3.checked && val4.checked){
                val1.checked=false;
            }
    }
}
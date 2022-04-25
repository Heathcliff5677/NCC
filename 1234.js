function myFunction(){
     //Heathcliff Wang Li
     //1. Modify the HTML document 2. Communicate with the server 3. Store data
     let x = document.getElementById("userInput1").value;
     let y = document.getElementById("userInput2").value;
     let z =parseInt(x)+parseInt(y);
     document.getElementById("demo").innerHTML = z;
    }
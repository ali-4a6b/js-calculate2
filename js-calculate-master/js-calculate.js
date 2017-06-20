function bereken() {
    var operation = document.getElementById("operation").value;
    var cijfers = document.getElementById("numbers").value;
    var apart = cijfers.split(",");
    parseInt(apart);

    var min = 0;
    for (i = 0; i < apart.length; i++) {
        min+=parseFloat(apart[i]);
    }

   var output = parseInt(apart[0]) 
    
    
    
    
    if (operation == "sum") {
        for (i = 1; i < apart.length; i++) {
            output+=parseFloat(apart[i]);
        }
        document.getElementById("result").innerHTML = output;
    } else if (operation == "substract") {
        for (i = 1; i < apart.length; i++) {
            output-=parseFloat(apart[i]);
        }
        document.getElementById("result").innerHTML = output;
    } else if (operation == "multiply") {
        for (i = 1; i < apart.length; i++) {
            output*=parseFloat(apart[i]);
        }
        document.getElementById("result").innerHTML = output;
    } else if (operation == "divide") {
        for (i = 1; i < apart.length; i++) {
            output/=parseFloat(apart[i]);
        }
        	document.getElementById("result").innerHTML = output;
    }


    }
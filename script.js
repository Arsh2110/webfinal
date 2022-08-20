function check() {  

    if(document.getElementById('one').checked) { 
        document.getElementById("reveal").innerHTML 
            = ""  
    } 

    else if(document.getElementById('two').checked) { 
        document.getElementById("reveal").innerHTML 
            = ""
    } 

    else if(document.getElementById('three').checked) { 
            document.getElementById("reveal").innerHTML 
            = "<br> <label for='rate'>Hourly rate</label><input type='text' id='rate' name='rate' placeholder='Type your hourly rate here...' required pattern='[0-9]+'/>"
    } 
}



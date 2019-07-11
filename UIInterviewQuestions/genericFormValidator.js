
<div id="status"></div>
    <form name="testform" id="testform" method="post" action="">
        <p><label for="element1">first name: * <input type="text" name="element1" class="form-element" id="element1" value="" required="true" data-error="missing first name" /></label></p>
        <p><label for="element2">last name: * <input type="text" name="element2" class="form-element" id="element2" value="" required="true" data-error="missing last name" /></label></p>
        <p><label for="element3">email address: * <input type="text" name="element3" class="form-element" id="element3" value="" required="true" data-error="missing email address" /></label></p>
        <p><label for="element4">phone number: * <input type="text" name="element4" class="form-element" id="element4" value="" required="true" data-error="missing phone" /></label></p>
        <input type="button" value="Submit Form" onclick="processForm();" /> <a href="javascript:;" onclick="resetForm();">Reset</a>
    </form>


#status { color: red; font-weight: bold; }
input[type=button] { background-color: #000; border: 0px; color: #fff; padding: 5px; border-radius: 5px; }


/***
 *	Generic Form Validation
 *	
 **/

window.processForm = function () {

    var inputElements = Array.from(document.querySelectorAll('.form-element'));
    var statusDiv = document.getElementById('status');
    var errorDiv = document.createElement('div');
    var proceed = null;

    for (i = 0; i < inputElements.length; i++) {
        if (i === inputElements.length - 1) {
            proceed = true;
        }

        if (inputElements[i].getAttribute("required") == "true" && inputElements[i].value == '') {
            let errorElement = document.createElement('div');
            errorElement.textContent = inputElements[i].getAttribute("data-error");
            errorDiv.appendChild(errorElement);
            proceed = false;
        }
    }

    statusDiv.innerHTML = '';
    if (proceed) {
        alert('Form Submission here.');
    } else {
        statusDiv.appendChild(errorDiv);
    }
}

window.resetForm = function () {
    document.getElementById('testform').reset();
}



// ************************************************************************
// removing all child nodes

var myNode = document.getElementById("foo");
while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
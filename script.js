function checkboxes() {
    var inputElems = document.getElementsByTagName("input")

    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
            document.getElementById("btn").disabled = true;
            document.getElementById("btn").style.backgroundColor = "gray"

            document.getElementById("bt").disabled = false;
            document.getElementById("bt").style.background = "blue";
            break;
        } else {
            document.getElementById("btn").disabled = false;
            document.getElementById("btn").style.backgroundColor = "blue"
            document.getElementById("bt").disabled = true;
            document.getElementById("bt").style.background = "gray";
        }
    }
    addtextbox();
}

function addtextbox() {

    var text = document.getElementById("check3");
    var abc = document.getElementById("box");
    if (text.checked == true) {
        abc.style.display = "block";
    } else {
        abc.style.display = "none";
    }

}
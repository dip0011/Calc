//Display Values
function val(result) {
    form.disp.value = form.disp.value + result.value;
}

//Calculate values
function cal(result) {
    if (form.disp.value == "") {
        alert("Oops! you have mistaken something");
    }
    else {
        try {
            form.disp.value = eval(form.disp.value);
        }
        catch (err) {
            // alert("Oops! you have mistaken something");
            form.disp.value = err.message;
        }
    }
}

// To clear display Double click on Equal sign(=)
function clr(){
    form.disp.value = "";
}
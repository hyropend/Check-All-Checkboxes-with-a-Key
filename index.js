const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
function handleCheck(e) {
    //are we pressin the "shift" key and checkbox is checked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      // loop over every single checkbox
      checkBoxes.forEach(checkBox => {
        console.log(checkBox);
        if (checkBox === this || checkBox === lastChecked) {
          inBetween = true;
        }
  
        if (inBetween) {
          checkBox.checked = true;
        }
      });
    }
  
    lastChecked = this;
}

checkBoxes.forEach(chechBox => chechBox.addEventListener("click", handleCheck));
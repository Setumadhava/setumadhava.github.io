//Create a variable with the link for each webpage you want to hide access to.

var anyVariableName = "LINK TO THE PAGE YOU WANT TO PASSWORD PROTECT GOES HERE";

//Include the variable in the pagesList list and create a password for the page. They must be in the same position in their respective lists.

var pagesList = [anyVariableName];
var passwordList = ["ENTER YOUR PASSWORD HERE"];

document.getElementById("inputBox").onclick = function() {
  document.getElementById("worngpwdiv").style.visibility = "hidden";
  document.getElementById("inputBox").style.borderColor = "#7E7E7E";
  document.getElementById("inputBox").style.borderWidth = "1px";
};

document.getElementById("buttondiv").onclick = function() {
  var formValue = document.getElementById("inputBox").value;

  for (j = 0; j < passwordList.length; j++) {
    if (formValue === passwordList[j]) {
      window.location = pagesList[j];
      document.getElementById("worngpwdiv").style.visibility = "hidden";
      document.getElementById("inputBox").style.borderColor = "#7E7E7E";
      document.getElementById("inputBox").style.borderWidth = "1px";
      break;
    } else {
      document.getElementById("worngpwdiv").style.visibility = "visible";
      document.getElementById("inputBox").style.borderColor = "red";
      document.getElementById("inputBox").style.borderWidth = "2px";
      document.getElementById("inputBox").value = "";

      setInterval(function() {
        document.getElementById("worngpwdiv").style.visibility = "hidden";
        document.getElementById("inputBox").style.borderColor = "#7E7E7E";
        document.getElementById("inputBox").style.borderWidth = "1px";
      }, 3000);
    }
  }
};

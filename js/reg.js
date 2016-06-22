function reg_panel() {
	var nname ,user, email,gender, passw , text;
	nname = document.getElementsByName("name").value;
	user = document.getElementsByName("userid").value;
	email = document.getElementsByName("emailid").value;
	gender = document.getElementsByName("gender").value;
	passw = document.getElementsByName("pass").value;
	if (user == "faisal" && passw=="123") {
		text= "login success";
	}
	else{
		text= "login failed";
	}
	document.getElementById("message").innerHTML = text;
}
function login_panel() {
	var user , pass , text;
	user = document.getElementsByName("userid").value;
	passw = document.getElementsByName("pass").value;
	if (user == "faisal" && passw=="123") {
		text= "login success";
	}
	else{
		text= "login failed";
	}
	document.getElementById("message").innerHTML = text;
}
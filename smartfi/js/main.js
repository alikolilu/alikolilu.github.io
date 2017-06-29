
	var i = 15;
	function time(){
	 document.getElementById("time").innerHTML = i;
	 i--;
	 if (i < 0) {
		document.getElementById('connect').style.visibility = "visible";
		document.getElementById('timer').style.visibility = "hidden";
		document.getElementById('doBtn').setAttribute('name', 'doBtn');
		document.getElementById('doBtnClient').setAttribute('name', 'doBtnClient');
	 }
	}
	time();
	setInterval(time, 1000);
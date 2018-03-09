console.log("yup")

function checkTime(i){
	if (i < 10 ){
		return "0" + i
	} 
	else {
		return i
	}
}


function startTime(){
	var currentTime = new Date()
	//get time; make it human readable
	var hours = checkTime(currentTime.getHours())
	var minutes = checkTime(currentTime.getMinutes())
	var seconds = checkTime(currentTime.getSeconds())
	console.log(hours + ":" + minutes + ":" + seconds)
	//get binary time
	var hoursBi = currentTime.getHours().toString(2)
	var minutesBi = currentTime.getMinutes().toString(2);
	var secondsBi = currentTime.getSeconds().toString(2);
	//ensure all numbers are 6 digits
	//.....

}
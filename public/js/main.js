var vm = new Vue({
	el: "#clock",
	data: {
		hoursArr: [],
		minutesArr: [],
		secondsArr: []
	},
	methods: {
		militarizeTime: function(i){
			if (i < 10 ){
				return "0" + i
			} 
			else {
				return i
			}			
		},
		captureTime: function(){
			var currentTime = new Date()
			//didnt use this, might delete
			var hours = this.militarizeTime(currentTime.getHours())
			var minutes = this.militarizeTime(currentTime.getMinutes())
			var seconds = this.militarizeTime(currentTime.getSeconds())
			console.log(hours + ":" + minutes + ":" + seconds)
			//end deletable
			
			var hoursBi = this.toSix(currentTime.getHours().toString(2))
			var minutesBi = this.toSix(currentTime.getMinutes().toString(2))
			var secondsBi = this.toSix(currentTime.getSeconds().toString(2))
			this.renderSeconds(hoursBi, minutesBi, secondsBi)
		},
		toSix: function(binaryString){
			var numZeroes = 6 - binaryString.length
			var zeroString = ""
			for(var i=0;i<numZeroes; i++){
				zeroString += "0"
			}
			var stringOfSix = zeroString + binaryString
			return stringOfSix
		},
		renderSeconds: function(hours, minutes, seconds){
			this.hoursArr = hours.split("").map(Number)
			this.minutesArr = minutes.split("").map(Number)
			this.secondsArr = seconds.split("").map(Number)
		}
	},
	created: function(){
		setInterval(()=>{
			this.captureTime()
		}, 1000)
		this.captureTime()
	}
})
var vm = new Vue({
	el: "#clock",
	data: {
		hours: {
			one: false,
			two: false,
			four: false,
			eight: false,
			sixteen: true
		},
		minutes: {
			one: false,
			two: false,
			four: false,
			eight: false,
			sixteen: false,
			thirtytwo: false
		},
		seconds: {
			one: false,
			two: false,
			four: false,
			eight: false,
			sixteen: false,
			thirtytwo: false
		}
	},
	methods: {
		checkTime: function(i){
			if (i < 10 ){
				return "0" + i
			} 
			else {
				return i
			}			
		},
		startTime: function(){
			var currentTime = new Date()
			//get time; make it human readable
			var hours = this.checkTime(currentTime.getHours())
			var minutes = this.checkTime(currentTime.getMinutes())
			var seconds = this.checkTime(currentTime.getSeconds())
			console.log(hours + ":" + minutes + ":" + seconds)
			//get binary time
			var hoursBi = currentTime.getHours().toString(2)
			var minutesBi = currentTime.getMinutes().toString(2);
			var secondsBi = currentTime.getSeconds().toString(2);
			console.log("The time in binary is:", hoursBi, minutesBi, secondsBi)
			//ensure all numbers are 6 digits
			//.....
		},
		correctDigits: function(){

		}

	},
	created: function(){

		console.log(this.seconds.one)

		setInterval(()=>{
			this.startTime()
		}, 1000)
	}
})

// console.log("The time in binary is:", newHours, newMins, newSecs)
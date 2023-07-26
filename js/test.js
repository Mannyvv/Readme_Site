var ipAddress = navigator.geolocation

console.log(ipAddress.getCurrentPosition())
$("#test").html(ipAddress.getCurrentPosition())
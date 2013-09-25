var scanCode = function() {
    window.plugins.barcodeScanner.scan(
        function(result) {
        	if(result.cancelled == true){
        		$.mobile.changePage('index.html#snap');
        		alert("Unable to Scan? Please take a Snap and Send it!");
        	}
        	else{        	
        	$('#scan_result').html("<center><p><b>Coupon Code: </b>"+result.text+"</p><br><p><b>Format: </b>"+result.format+"</p></center>");
        	$.mobile.changePage('index.html#success_screen');
        	}
//        alert("Scanned Code: " + result.text 
//                + ". Format: " + result.format
//                + ". Cancelled: " + result.cancelled);
    }, function(error) {
        alert("Scan failed: " + error);
        //$.mobile.changePage('index.html#scan');
    });
}

var capturePhoto = function () {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.DATA_URL });
  }

function onSuccess(imageData) {
	var cameraImage = document.getElementById('myImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = imageURI;
//    var image = document.getElementById('myImage');
//    image.src = "data:image/jpeg;base64," + imageData;
}


function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
      destinationType: destinationType.FILE_URI,
      sourceType: source });
  }

var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
  // Uncomment to view the base64 encoded image data
  // console.log(imageData);

  // Get image handle
  //
  var smallImage = document.getElementById('smallImage');

  // Unhide image elements
  //
  smallImage.style.display = 'block';

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
  // Uncomment to view the image file URI 
  // console.log(imageURI);

  // Get image handle
  //
  var largeImage = document.getElementById('largeImage');

  // Unhide image elements
  //
  largeImage.style.display = 'block';

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  largeImage.src = imageURI;
}





function onFail(message) {
    alert('Camera Error: ' + message);
  }

var getFile = function() {
	
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
	    destinationType: Camera.DestinationType.FILE_URI }); 
}


function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}


var encodeText = function() {
    window.plugins.barcodeScanner.encode(
            BarcodeScanner.Encode.TEXT_TYPE,
            "http://www.mobiledevelopersolutions.com", 
            function(success) {
                alert("Encode success: " + success);
            }, function(fail) {
                alert("Encoding failed: " + fail);
            });
}

var encodeEmail = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.EMAIL_TYPE,
        "a.name@gmail.com", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodePhone = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.PHONE_TYPE,
        "555-227-5283", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodeSMS = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.SMS_TYPE,
        "An important message for someone.", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}


$( document ).ready(function() {

//	$(document).on("submit", function(){
	$( "#login_btn" ).on( "click", function(e) {
		
		var usr_nm= $('#username').val(); //to get the value from text box
		var pwd= $('#password').val();
		//alert("hi");
		if(usr_nm != "" && pwd != ""){
		if(usr_nm == "123" && pwd == "a")
		{

			$.mobile.changePage('index.html#scan');
			//window.location.href='index.html#scan'; // redirect to page
		}
		else{
			
			alert("Authentication Failed! Please Try Again.");
			//document.location.href='#home';					
			
		}
		}
		else{
			alert("Please Enter Username and Password");
		}
		
	});
	
	
	
//	$( "#send" ).on( "click", function(e) {
//		var mCode= $('#code').val(); //to get the value from text box
//		var cameraImage= $('#cameraImage').val();
//	});
//});
	});



var mailTo = function() {
	
	var mCode = document.getElementById('code').value;
	var cameraImage= document.getElementById('cameraImage');	

//	window.plugins.emailComposer.showEmailComposer("Bar Code",'gfghg',["v21.deshmukh@gmail.com"],[],[],true,[""]);
	//window.open('mailto:v21.deshmukh@gmail.com?subject='+mCode,attachment=cameraImage);
	var body = "Coupon Code : <b>"+mCode;
//	alert(body);
//	alert(cameraImage.src);
//	var imageURI = localStorage.getItem('imageURI');
	var image_path=cameraImage.src;
    //alert(image_path);
    //image_path=image_path.replace("file:///storage/","");
	//alert(image_path);
	//"file:///storage/sdcard0/DCIM/Camera/b.jpg"
	window.plugins.emailComposer.showEmailComposerWithCallback(
	          null,
	          "Coupon Code","Coupon Code is: "+mCode,
	           ["v21.deshmukh@gmail.com", "ynpatil@gmail.com"],
	           [],
	           [],
	           true,
	           ["/sdcard0/DCIM/Camera/b.jpg"]
	                );
	
};


function exit() {
    navigator.app.exitApp();
}


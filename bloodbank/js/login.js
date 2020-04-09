var config = {
    apiKey: "AIzaSyCwTXfgEQpDb9R78gWafVPVvq-t-GzPRYI",
    authDomain: "fir-login-799ba.firebaseapp.com",
    databaseURL: "https://fir-login-799ba.firebaseio.com",
    projectId: "fir-login-799ba",
    storageBucket: "fir-login-799ba.appspot.com",
    messagingSenderId: "740614539107"
};
firebase.initializeApp(config);


async function login(){
var lemail = document.getElementById('lemail').value.toLowerCase() ;
var lpassword = document.getElementById('lpassword').value.toLowerCase() ;
var rgEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})$/;

if(!lemail && !lpassword){
		document.getElementById('erroremail').innerText="Email required*";
		document.getElementById('errorpassword').innerText="Password required*";
		}
	else if(!lemail.match(rgEmail)){
		document.getElementById('erroremail').innerText="Please enter a correcrt email*";
		}
		else if(b.email === undefined|| b.email != lemail ){
		document.getElementById('erroremail').innerText="Not Found";
		}
		else if(b.password != lpassword){
			document.getElementById('erroremail').innerText=null;
			document.getElementById('errorpassword').innerText="Wrong Password*";
		}
		else if(b.email==lemail && b.password == lpassword){
			swal(b.email, "Successfully Login", "success");
			function myFunction() {
				window.location.replace('daraz.html');	
			}
			setTimeout(myFunction, 1000);
	}
}

async function singin(){
    let lemail = document.getElementById("lemail").value
    let lpassword = document.getElementById("lpassword").value 

    firebase.auth().signInWithEmailAndPassword(lemail, lpassword)
    .then(function(result){
        swal(lemail, "Successfully Login", "success");
			function myFunction() {
				// window.location.replace('home.html');	
                window.location= './home.html'
			}
			setTimeout(myFunction, 1000);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('errorpassword').innerText=errorMessage;
        console.log(errorMessage)
      });
}

function admin() {
    var aemail = document.getElementById("adminemail").value.toLowerCase();
    var apassword = document.getElementById("adminpassword").value.toLowerCase();
    var rgEmail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})$/;
    
    if(!aemail && !apassword) {
		document.getElementById('erroremail').innerText="Email required*";
		document.getElementById('errorpassword').innerText="Password required*";
    }
        else if(apassword !=='admin@mail.com'&& aemail !== 'admin'  )
        {
            document.getElementById('erroremail').innerText="Not Found";
            }
            else if(apassword !== 'admin')
    {
        document.getElementById('erroremail').innerText="";
        document.getElementById('errorpassword').innerText="Wrong Password*";
        }
        else if (aemail =='admin@mail.com' && apassword == 'admin'){
            // swal(aemail, "Successfully Login", "success");
            function myFunction() {
                window.location.replace('home.html');
                
            }
            setTimeout(myFunction, 1000);
        }

}

firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
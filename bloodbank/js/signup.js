var config = {
    apiKey: "AIzaSyCwTXfgEQpDb9R78gWafVPVvq-t-GzPRYI",
    authDomain: "fir-login-799ba.firebaseapp.com",
    databaseURL: "https://fir-login-799ba.firebaseio.com",
    projectId: "fir-login-799ba",
    storageBucket: "fir-login-799ba.appspot.com",
    messagingSenderId: "740614539107"
};
firebase.initializeApp(config);


function signupVal() {
    var fname = document.getElementById("fname").value.toLowerCase();
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value.toLowerCase();
    var cpassoword = document.getElementById("cpassword").value.toLowerCase();
    var userData = {}
    var rgxemail = /^([a-zA-Z0-9_\.])+\@(([a-z]{5,10})+\.)+([a-z]{2,4})$/
    var rgxname = /^([a-zA-Z]{3,25})/
    var rgxpassword = /^([0-9]{6,8})/

    if (!fname) {

        document.getElementById("errorfname").innerText = "**Please Enter a full Name"
    }
    else if (!fname.match(rgxname)) {
        document.getElementById('errorfname').innerText = "**Enter Correct Fullname ";
    } else {
        document.getElementById('errorfname').innerText = null;
        userData.fname = fname;
    }

    if (!email) {
        document.getElementById("erroremail").innerText = "**Please Enter email"
    }
    else if (!email.match(rgxemail)) {
        document.getElementById('erroremail').innerText = "**Enter a correct email";
    } else {
        document.getElementById('erroremail').innerText = null;
        userData.email = email
    }

    if (!password) {
        document.getElementById("errorpassword").innerText = "**Password requried"
    }
    else if (!password.match(rgxpassword)) {
        document.getElementById('errorpassword').innerText = "**Passoword must be 6-8 digit";
    } else {
        document.getElementById('errorpassword').innerText = null;
        userData.password = password;
    }
}




let check = function () {
    if (document.getElementById('password').value == document.getElementById('cpassword').value) {
        document.getElementById('errorcpassword').style.color = 'green';
        document.getElementById('errorcpassword').innerHTML = 'Match';
    } else {
        document.getElementById('errorcpassword').style.color = 'red';
        document.getElementById('errorcpassword').innerHTML = 'Not matching';
    }
}

let userUid;

function signup() {
    const name = document.getElementById('fname').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const usertype = document.getElementById('usertype').value;
    const bloodtype = document.getElementById('bloodtype').value;
    const genderElement = document.querySelector('input[name="radioOption"]:checked');
    // const imgUrl = "undefined";

    const gender = genderElement.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            userUid = firebase.auth().currentUser.uid;
            let userObj = {
                name,
                usertype,
                bloodtype,
                email,
                address
            }
            firebase.database().ref('users/').set(userObj)
                .then((success) => {
                    let userDetails = {
                        name,
                        address,
                        email,
                        bloodtype,
                        usertype,
                        //   imgUrl,
                        gender
                    }
                    firebase.database().ref(usertype).child(bloodtype).child(userUid).set(userDetails)
                        .then((succ) => {
                            console.log("acc succ")
                            //   window.location.replace='./signin.html';
                        })
                })
        })
//         .then((result) => {
//             // console.log(result)
//             let storageRef = firebase.storage().ref().child(`profile/${file.name}`)
//             storageRef.put(file)
//                 .then((url) => {
//                     url.ref.getDowloadURL()
//                         .then((urlRef) => {
//                             userObj.profile = urlRef;
//                             console.log(userObj)
//                             firebase.database().ref('user/' + success.userData.uid).set(userObj)
//                                 .then(() => {
//                                     window.location.replace('./login.html');
//                                     // console.log("your profile is creates")
//                                 })
//                         })
//                 })

//         })
                        
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            document.getElementById('error1').innerText = errorMessage;
            console.log(errorMessage)
        });
}
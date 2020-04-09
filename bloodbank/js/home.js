var config = {
  apiKey: "AIzaSyCwTXfgEQpDb9R78gWafVPVvq-t-GzPRYI",
  authDomain: "fir-login-799ba.firebaseapp.com",
  databaseURL: "https://fir-login-799ba.firebaseio.com",
  projectId: "fir-login-799ba",
  storageBucket: "fir-login-799ba.appspot.com",
  messagingSenderId: "740614539107"
};
firebase.initializeApp(config);


var x = document.createElement("IMG");
x.setAttribute("src", "../images/logo.jpg");
x.setAttribute("width", "60");
x.setAttribute("height", "60");



function UserDetails() {
  firebase.database().ref('users/').once('value', (data) => {
    let userdata = data.val();
    let userblood = userdata.bloodtype;
    let userType = userdata.usertype;

    // console.log(userType)
    // console.log(userblood);
    console.log(userdata)

    for (let i in userdata) {
      console.log(userdata[i].name)
      console.log(userdata[i].email)
      console.log(userdata[i].bloodtype)
      console.log(userdata[i].usertype)

      }
      for(var i in userdata){
            document.getElementById("data").innerHTML += 
            // "<tr>"+
            // "<td>" + userdata[i].name + "</td> " +
            // "<td>" + userdata[i].email + "</td> " +
            // "<td>" + userdata[i].bloodtype + "</td> " +
            // "<td>" + userdata[i].usertype + "</td> " +
            // +"</tr>"+
            // "</tbody>"

            "<tr>" +
            "<td>" + i + "</td> " +
            "<td>" + userdata[i].name +"</td>" +
            "<td>" +  userdata[i].email +"</td>" +
            "<td>" + userdata[i].bloodtype+"</td>"+ 
            "<td>" + userdata[i].usertype+"</td>" 
            // "<td>" + userdata[i].address + "</td> " +
            +"</tr>"
      }
  })

}


// function donor() {
//   let h1 = document.getElementById('h1');

//   if (utype == "donor") {
//     h1 = h1.innerText = 'Donor'

//   }
// }





function logout() {
  firebase.auth().signOut()
    .then(function () {
      location = "../index.html";
    })
    .catch(function (error) {
      console.log(error.message);
      // An error happened.
    });
}



      //       let search = document.getElementById('selector');

      //       search.addEventListener('change',()=>{
      //           searchBlood();
      //       })


      //     })


      // function getUserInfo(){
      //     firebase.database().ref('users/' + userUid).once('value',(data)=>{
      //         let userdata = data.val();
      //         let userType = userdata.usertype;
      //         let userblood = userdata.bloodtype;
      //         console.log(userType,userblood);
      //     })
      //     .then((success)=>{
      //         firebase.database().ref(userType).child(userblood).child(userUid)
      //         .once('value',(data)=>{
      //             let userdata = data.val();
      //             localStorage.setItem("userBloodInfo",JSON.stringify(userdata));
      //         })            
      //     })     
      //     .catch((error)=>{
      //         console.log(error.message);
      //     })
      //   }

      // function retrieveData(){
      //     let email = getInfo.email;
      //     let userName = getInfo.name;
      //     let address = getInfo.address;
      //     let city = getInfo.city;
      //     let phoneno = getInfo.phoneno;
      //     let gender = getInfo.gender;
      //     let imgUrl = getInfo.imgUrl;
      //     let profileData = document.getElementById('userDetails');

      //     profileData.innerHTML = `
      //     <div class="row">
      //         <div class="col-md-3 text-center">
      //             <img src="${imgUrl}" class="imgMargin" alt="profilepic" id="profilepic" style="height:280px;">
      //                 <a href="../pages/upload.html" class="chngImg"><label>Change Image</label></a>
      //         </div>
      //         <div class="col-md-4">
      //             <div class="userInfo">
      //                 <p><span class="bold">Email:</span> ${email}</p>
      //                 <p><span class="bold">Name:</span> ${userName}</p>
      //                 <p><span class="bold">Gender:</span> ${gender}</p>
      //                 <p><span class="bold">Contact No:</span> ${phoneno}</p>
      //                 <p><span class="bold">Blood Type:</span> ${userblood}</p>
      //                 <p><span class="bold">User Type:</span> ${userType}</p>
      //                 <p><span class="bold">Address:</span> ${address}</p>
      //                 <p><span class="bold">City:</span> ${city}</p>
      //                     <div class="text-right btnCenter">
      //                         <button onclick="editBtn()" class="btn btn-primary imgMargin">Edit Profile</button>
      //                     </div>
      //             </div>
      //         </div>
      //     </div>
      //     `
      // }

      // function editBtn(){
      //     location = '../pages/edit.html';
      // }

      // function retrieveAcceptors(){
      //     let arr = [];
      //     let ids = [];
      //     let i=0;
      //     let folder;
      //     let heading = document.getElementById('heading');
      //     let path = document.getElementById('path');
      //     let availiblity = document.getElementById('availiblity');
      //     if(userType==="acceptor"){
      //         folder = 'doner';
      //         heading.innerText = "Doners";
      //         path.innerText = 'Blood Bank > Doners';
      //         availiblity.innerText = 'Available Doners';
      //     }
      //     else{
      //         folder = 'acceptor';
      //         heading.innerText = "Acceptors";
      //         path.innerText = 'Blood Bank > Acceptors';
      //         availiblity.innerText = 'Available Acceptors';
      //     }
      //     let acceptordata = document.getElementById('Data');

      //     firebase.database().ref(folder)
      //     .once('value',(data)=>{
      //         let userData = data.val();
      //         for(let key in userData){
      //             console.log(key);
      //             for(let key1 in userData[key]){
      //                 // console.log(key1)
      //                 ids.push(key1)
      //                 arr.push(userData[key][key1])
      //             }
      //         }
      //         console.log(arr);
      //         console.log(ids)
      //     })
      //     .then(()=>{
      //         for(let key in arr){
      //             let userUrl = `../pages/details.html?type=${arr[key].usertype}&blood=${arr[key].bloodtype}&id=${ids[i]}`;
      //             userUrl = userUrl.replace('+','%2B');
      //             acceptordata.innerHTML += `
      //                 <div class="col-lg-3 col-md-6 imgMargin ${arr[key].bloodtype} card1">
      //                     <div class="team-item">
      //                         <div class="team-img">
      //                             <img src="${arr[key].imgUrl}" alt="img" style="width:100%;height:100%;">
      //                         </div>
      //                         <div class="team-body">
      //                             <div class="team-title">
      //                                 <a href="${userUrl}">${arr[key].name}</a>
      //                             </div>
      //                             <div class="team-subtitle">${arr[key].bloodtype}</div>
      //                         </div>
      //                     </div>
      //                 </div>
      //             `
      //             i++;
      //         }
      //     })
      // }
      // function retrieveUserDetails(){
      //     let type = getParameterByName('type');
      //     let blood = getParameterByName('blood');
      //     let id = getParameterByName('id');
      //     let email ;
      //     let userName ;
      //     let address ;
      //     let city ;
      //     let phoneno ;
      //     let gender ;
      //     let imgUrl ;
      //      console.log(type,blood,id)

      //     firebase.database().ref(type).child(blood).child(id).once('value',(data)=>{
      //         let userData = data.val();
      //         userName = userData.name;
      //         email = userData.email;
      //         address = userData.address;
      //         city = userData.city;
      //         phoneno = userData.phoneno;
      //         gender = userData.gender;
      //         imgUrl = userData.imgUrl;
      //         console.log(userData)
      //     })
      //     .then(()=>{
      //         if(type==='doner'){
      //             document.getElementById('heading').innerText='Doner Details';
      //             // document.getElementById('path').innerText='Blood Bank > Details';
      //         }
      //         else{
      //             document.getElementById('heading').innerText='Acceptor Details';
      //             // document.getElementById('path').innerText='Blood Bank > Details';
      //         }
      //         let profileData = document.getElementById('userDetails');

      //         profileData.innerHTML = `
      //         <div class="row">
      //         <div class="col-md-3 text-center">
      //         <img src="${imgUrl}" class="imgMargin" alt="profilepic" id="profilepic" style="height:280px;">
      //         </div>
      //         <div class="col-md-4">
      //         <div class="userInfo">
      //         <p><span class="bold">Email:</span> ${email}</p>
      //         <p><span class="bold">Name:</span> ${userName}</p>
      //         <p><span class="bold">Gender:</span> ${gender}</p>
      //         <p><span class="bold">Contact No:</span> ${phoneno}</p>
      //         <p><span class="bold">Blood Type:</span> ${blood}</p>
      //         <p><span class="bold">User Type:</span> ${type}</p>
      //         <p><span class="bold">Address:</span> ${address}</p>
      //         <p><span class="bold">City:</span> ${city}</p>
      //         </div>
      //         </div>
      //         </div>
      //         `
      //     })
      // }

      // function fillData(){
      //     console.log(userType,userblood,userUid)
      //     firebase.database().ref(userType).child(userblood).child(userUid)
      //     .once('value',(data)=>{
      //         let userData = data.val();
      //         document.getElementById('name').value = userData.name;
      //         document.getElementById('address').value = userData.address;
      //         document.getElementById('city').value = userData.city;
      //         document.getElementById('phoneno').value = userData.phoneno;
      //         let type = document.getElementById('usertype');
      //         let blood = document.getElementById('bloodtype');
      //         let gender = document.getElementsByName('radioOption');
      //         setSelectedValue(type,userData.usertype);
      //         setSelectedValue(blood,userData.bloodtype);
      //         setcheckedValue(gender,userData.gender);
      //     })
      // }


      // function setSelectedValue(selectObj, valueToSet) {
      //     console.log(valueToSet);
      //     for (var i = 0; i < selectObj.options.length; i++) {
      //         if (selectObj.options[i].value== valueToSet) {
      //             selectObj.options[i].selected = true;
      //             return;
      //         }
      //     }
      // }

      // function setcheckedValue(selectObj, valueToSet) {
      //     console.log(valueToSet);
      //     for (var i = 0; i < selectObj.length; i++) {
      //         if (selectObj[i].value== valueToSet) {
      //             selectObj[i].checked = true;
      //             return;
      //         }
      //     }
      // }

      // function cancelBtn(){
      //     location='../pages/profile.html';
      // }

      // function updateBtn(){
      //     const name = document.getElementById('name').value;
      //     const address = document.getElementById('address').value;
      //     const city = document.getElementById('city').value;
      //     const phoneno = document.getElementById('phoneno').value;
      //     const usertype = document.getElementById('usertype').value;
      //     const bloodtype = document.getElementById('bloodtype').value;
      //     let email = getInfo.email;
      //     let imgUrl = getInfo.imgUrl;
      //     const genderElement = document.querySelector('input[name="radioOption"]:checked');
      //     if(name !=='' && address!=='' && city!=="" && phoneno!=='' && bloodtype!=="" && genderElement!==null && usertype!==''){

      //         const gender = genderElement.value;
      //         firebase.database().ref(userType).child(userblood).child(userUid).remove()
      //         .then(()=>{
      //             let userDetails = {
      //                 name,
      //                 address,
      //                 city,
      //                 phoneno,
      //                 usertype,
      //                 bloodtype,
      //                 email,
      //                 imgUrl,
      //                 gender
      //             }
      //             firebase.database().ref(usertype).child(bloodtype).child(userUid).set(userDetails)
      //             .then(()=>{
      //                 firebase.database().ref('users/' + userUid)
      //                 .once('value',(data)=>{
      //                     let userData = data.val();
      //                     userData.usertype = usertype;
      //                     userData.bloodtype = bloodtype;
      //                     firebase.database().ref('users/' + userUid).set(userData)
      //                 })
      //                 .then(()=>{
      //                     location = '../pages/loading.html';
      //                 })
      //             })
      //         })
      //         .catch((error)=>{
      //             swal({
      //                 icon: 'error',
      //                 title: 'Error',
      //                 text: `${error.message}`
      //             })
      //             console.log(error.message);
      //         })
      //     }
      //     else{
      //         swal({
      //             icon: 'warning',
      //             title: 'Warning',
      //             text: 'Please fill all fields with proper information!'
      //         })
      //     }
      // }

      // function searchBlood(){
      //     let error = document.getElementById('error');
      //     let searchValue = document.getElementById('selector').value;
      //     let toDisplay = document.getElementsByClassName(searchValue);
      //     let available = document.getElementsByClassName('card1');
      //     let isFound = false;

      //     error.innerHTML = ``;

      //     for(let i=0;i<available.length;i++){
      //         available[i].style.display="none";
      //     }

      //     for(let i=0;i<toDisplay.length;i++){
      //         toDisplay[i].style.display="block";
      //         isFound = true;
      //     }

      //     if(!isFound){
      //         error.innerHTML = `
      //             No One with ${searchValue} blood type
      //         `
      //     }

      // }

      // function bloodInfo(){
      //     let info = document.getElementById('Info');
      //     if(userType==='acceptor'){
      //         if(userblood==='O-'){
      //             info.innerHTML+=`Blood O- can accept blood from O-`
      //         }
      //         else if(userblood==='O+'){
      //             info.innerHTML+=`Blood O+ can accept blood from O- and O+`
      //         }
      //         else if(userblood==='A+'){
      //             info.innerHTML+=`Blood A+ can accept blood from O-, O+, A- and A+`
      //         }
      //         else if(userblood==='A-'){
      //             info.innerHTML+=`Blood A- can accept blood from O- and A-`
      //         }
      //         else if(userblood==='B+'){
      //             info.innerHTML+=`Blood B+ can accept blood from O-, O+, B- and B+`
      //         }
      //         else if(userblood==='B-'){
      //             info.innerHTML+=`Blood B- can accept blood from O- and B-`
      //         }
      //         else if(userblood==='AB+'){
      //             info.innerHTML+=`Blood AB+ can accept blood from O+, O-, A+, A-, B+, B-, AB+ and AB-`
      //         }
      //         else{
      //             info.innerHTML+=`Blood AB- can accept blood from O-, A-, B- and AB-`
      //         }

      //     }
      //     else{

      //         if(userblood==='O-'){
      //             info.innerHTML+=`Blood O- can donate to A+, A-, B+, B-, AB+, AB-, O+ and O-`
      //         }
      //         else if(userblood==='O+'){
      //             info.innerHTML+=`Blood O+ can donate to A+, B+, AB+ and O+`
      //         }
      //         else if(userblood==='A+'){
      //             info.innerHTML+=`Blood A+ can donate to A+ and AB+`
      //         }
      //         else if(userblood==='A-'){
      //             info.innerHTML+=`Blood A- can donate to A+, A-, AB+ and AB-`
      //         }
      //         else if(userblood==='B+'){
      //             info.innerHTML+=`Blood B+ can donate to B+ and AB+`
      //         }
      //         else if(userblood==='B-'){
      //             info.innerHTML+=`Blood B- can donate to B+, B-, AB+ and AB-`
      //         }
      //         else if(userblood==='AB+'){
      //             info.innerHTML+=`Blood AB+ can donate to AB+`
      //         }
      //         else{
      //             info.innerHTML+=`Blood AB- can donate to AB+ and AB-`
      //         }
      //     }
      // }
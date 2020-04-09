var mainDiv = document.getElementById('ttt');

var h2Div = document.createElement('div')
h2Div.setAttribute('class','h2-div')
var h2 = document.createElement('h2')
h2.setAttribute('class','h2')
var h2Text  = document.createTextNode('TIC TAC TOE')

var playBtn =document.createElement('button')
playBtn.setAttribute('id','play')
playText=document.createTextNode('New Game')

h2Div.appendChild(h2)
h2.appendChild(h2Text)
h2Div.appendChild(playBtn)
playBtn.appendChild(playText)

var btnDiv = document.createElement('div')
btnDiv.setAttribute('class','btn-div')

var playBox = document.createElement("table");
playBox.setAttribute("id", "playBox");
playBox.setAttribute("class", "playBox");

var tr1 = document.createElement("tr");
tr1.setAttribute("class", "row1");
var tr2 = document.createElement("tr");
tr2.setAttribute("class", "row2");
var tr3 = document.createElement("tr");
tr3.setAttribute("class", "row3");

var box1 = document.createElement("td");
box1.setAttribute("class", "box");
box1.setAttribute("id", "box1");
box1.setAttribute("onClick", "myboxes('box1')");

var box2 = document.createElement("td");
box2.setAttribute("class", "box");
box2.setAttribute("id", "box2");
box2.setAttribute("onClick", "myboxes('box2')");

var box3 = document.createElement("td");
box3.setAttribute("class", "box");
box3.setAttribute("id", "box3");
box3.setAttribute("onClick", "myboxes('box3')");

var box4 = document.createElement("td");
box4.setAttribute("class", "box");
box4.setAttribute("id", "box4");
box4.setAttribute("onClick", "myboxes('box4')");

var box5 = document.createElement("td");
box5.setAttribute("class", "box");
box5.setAttribute("id", "box5");
box5.setAttribute("onClick", "myboxes('box5')");

var box6 = document.createElement("td");
box6.setAttribute("class", "box");
box6.setAttribute("id", "box6");
box6.setAttribute("onClick", "myboxes('box6')");

var box7 = document.createElement("td");
box7.setAttribute("class", "box");
box7.setAttribute("id", "box7");
box7.setAttribute("onClick", "myboxes('box7')");

var box8 = document.createElement("td");
box8.setAttribute("class", "box");
box8.setAttribute("id", "box8");
box8.setAttribute("onClick", "myboxes('box8')");

var box9 = document.createElement("td");
box9.setAttribute("class", "box");
box9.setAttribute("id", "box9");
box9.setAttribute("onClick", "myboxes('box9')");

tr1.appendChild(box1);
tr1.appendChild(box2);
tr1.appendChild(box3);

tr2.appendChild(box4);
tr2.appendChild(box5);
tr2.appendChild(box6);

tr3.appendChild(box7);
tr3.appendChild(box8);
tr3.appendChild(box9);

playBox.appendChild(tr1);
playBox.appendChild(tr2);
playBox.appendChild(tr3);

btnDiv.appendChild(playBox);


mainDiv.appendChild(h2Div)
mainDiv.appendChild(playBtn) 
mainDiv.appendChild(btnDiv)


var arra1=['X','O','X','O','X','O','X','O','X'];
var counter =0;
var flagX=false; 
var flagO=false
var a=0;
function startgame(count){
        a++;
        if(count==1 && a==1){
            arra1=['X','O','X','O','X','O','X','O','X']

        }
        if(count==2 && a==1){
            arra1=['O','X','O','X','O','X','O','X','O']
            
            
        }
    
}

function myboxes(ids){
    if(document.getElementById(ids).innerHTML==''){
     var x=document.getElementById(ids);
     x.innerHTML=arra1[counter]
     counter++;
     
    var b11 = document.getElementById('box1').innerHTML ;
    var b12 = document.getElementById('box2').innerHTML ;
    var b13 = document.getElementById('box3').innerHTML ;
    var b21 = document.getElementById('box4').innerHTML ;
    var b22 = document.getElementById('box5').innerHTML ;
    var b23 = document.getElementById('box6').innerHTML ;
    var b31 = document.getElementById('box7').innerHTML ;
    var b32 = document.getElementById('box8').innerHTML ;
    var b33 = document.getElementById('box9').innerHTML ;

    if (b11=="X" && b12 =="X" && b13=="X"){
            b11==arra1[0]
            flagX=true;
        }
        else if (b11=="O" && b12 =="O" && b13=="O"){
            b11==arra1[0]
            flagO=true;
        }
    if (b21=="X" && b22 =="X" && b23=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b21=="O" && b22 =="O" && b23=="O"){
        b11==arra1[0]
        flagO=true;
        }
    if (b31=="X" && b32 =="X" && b33=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b31=="O" && b32 =="O" && b33=="O"){
        b11==arra1[0]
        flagO=true;
        }

    if (b11=="X" && b21 =="X" && b31=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b11=="O" && b21 =="O" && b31=="O"){
            b11==arra1[0]
            flagO=true;
        }
    if (b12=="X" && b22 =="X" && b32=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b12=="O" && b22 =="O" && b32=="O"){
        b11==arra1[0]
        flagO=true;
        }
    if (b13=="X" && b23 =="X" && b33=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b13=="O" && b23 =="O" && b33=="O"){
        b11==arra1[0]
        flagO=true;
        }

    if (b11=="X" && b22 =="X" && b33=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b11=="O" && b22 =="O" && b33=="O"){
            b11==arra1[0]
            flagO=true;
        }
    if (b13=="X" && b22 =="X" && b31=="X"){
        b11==arra1[0]
        flagX=true;
    }
        else if (b13=="O" && b22 =="O" && b31=="O"){
        b11==arra1[0]
        flagO=true;
        }

    if(flagX==true){       
            swal("Congratulations.....", "Player X Win !!!")
            .then((value) => {
              swal(location.reload());
            });
        }
        else if(flagO==true){
            swal("Congratulations.....", "Player O Win !!!")
            .then((value) => {
              swal(location.reload());
            });
        }
    else if(counter===9 && flagX==false && flagO==false){
      swal("Match Draw", "Do you wnat try Again!!!!")        
      .then((value) => {
        swal(location.reload());
      });
    }

  }
}

playBtn.addEventListener('click',function(){
    location.reload();
})

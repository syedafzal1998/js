 var cellphone = {
     samsung :{
         models :{
             s2:{
                sim: 'single',
                processor : 'dual core' ,
                canmera : '2px' ,
             },
             s3:{
                sim: 'dual',
                processor : 'quad core' ,
                canmera : '5px' ,
             },
             s4:{
                sim: 'dual',
                processor : 'dual core' ,
                canmera : '8px' ,
             },  
         }
     },
     iphone:{
         models:{

             ip5:{
                 sim: 'singal',
                 processor : '11' ,
                 canmera : '2px' ,
                },
                ip6:{
                    sim: 'dual',
                    processor : '11.1' ,
                    canmera : '5px' ,
                },
                ip7:{
                    sim: 'dual',
                    processor : 'dual 11.2' ,
                    canmera : '8px' ,
                }
            }
        },
    nokia:{
        models:{
            n5:{
                sim: 'dual',
                processor : 'dual 11.2' ,
                canmera : '8px' ,
            },
            n6:{
                sim: 'dual',
                processor : 'dual 11.2' ,
                canmera : '8px' ,
            },
            n7:{
                sim: 'dual',
                processor : 'dual 11.2' ,
                canmera : '8px' ,
            }
        }

    }
 } 

for(var i in cellphone){
    document.getElementById("data").innerHTML += 
    "<th>" + i + "</th> " 
    for(var j in cellphone[i]){
        document.getElementById("data").innerHTML += 
        "<td>" + j + "</td> " 
        +"<td>" +"Sim" +"</td>" +
        "<td>" + "Processor" +"</td>" +
        "<td>" + "Canmera" +"</td>" 
        +"</tr>"
        for(var k in cellphone[i][j]){
            document.getElementById("data").innerHTML += 
            "<tr>" +
            "<td>" + k + "</td> " 
            +"<td>" +cellphone[i][j][k].sim +"</td>" +
            "<td>" + cellphone[i][j][k].processor +"</td>" +
            "<td>" + cellphone[i][j][k].canmera +"</td>" 
            +"</tr>"
        }
    }
}



function searchData() {
    // flag = false ;
    var data = document.getElementById("search").value;
    if(data !==null && data !== undefined && data !==''){
        for(var i in cellphone){
            console.log("i"+i)
            for(var j in cellphone[i]){
                // console.log("j"+j)
                for(var k in cellphone[i][j]){
                    // console.log("k"+k)
                    if(data.toLowerCase()=== k.toLowerCase()){       
                        document.getElementById("data").innerHTML = 
                        "<tr>" +
                        "<td>" + k + "</td> " 
                        +"<td>" +cellphone[i][j][k].sim +"</td>" +
                        "<td>" + cellphone[i][j][k].processor +"</td>" +
                        "<td>" + cellphone[i][j][k].canmera +"</td>" 
                        +"</tr>"
                        // flag = true
                        
                    }
                }
            }
        }
    }
    // if(flag==false){
    //     swal("Not FOUND", "Please Enter a valid model no")
    // }
}
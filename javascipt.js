//prompt()
//document.write(hellow);
//confirm("do you want yo log
function cal(){
    var op1=document.getElementById("f").value
    var op2=document.getElementById("s").value  
    var ope=document.getElementById("ope").value
    
    if(ope=="+"){
        var res=parseInt(op1) + parseInt(op2);
        }
        if(ope=="-"){
            var res=parseInt(op1) - parseInt(op2);
            }
            if(ope=="*"){
                var res=parseInt(op1) * parseInt(op2);
                }
                if(ope=="/"){
                    var res=parseInt(op1) / parseInt(op2);
                    }
                    if(ope=="%"){
                        var res=parseInt(op1) % parseInt(op2);
                        }
    
     document.getElementById("res").value=res
    
}

window.onload=function(){
    
    var quantity=document.getElementsByName("quantity");
    var totalValue=document.getElementById("res");
    var formToCheck=document.getElementById("formToCheck");
    for (i=0;i<quantity.length;i++){
        var e=quantity[i];
        e.addEventListener('change', getQuantityValue,false);
        e.addEventListener('change', getTotalSum,false);
        }
        
        
        function getQuantityValue(){
            var res;
            var spanArray=document.getElementsByTagName("span");
            var q=parseInt(this.value);
            var p=parseInt(this.getAttribute("price"));
            var n=this.getAttribute("id");
            res=q*p;
            for (i=0;i<spanArray.length;i++){
                var spn=spanArray[i];
                var e=spn.getAttribute("name");
                if(e==n){
                    spn.innerHTML=res+"$";
                   spn.setAttribute("totalSum",res);
                }
                
            }
        }
        function getTotalSum(){
            var totalSum=0;
            var spanArray=document.getElementsByTagName("span");
            for(i=0;i<spanArray.length;i++){
                var spn=spanArray[i];
                var spnRes=parseInt(spn.getAttribute("totalSum"));
                if(spnRes>0){
                    totalSum+=spnRes;
                    totalValue.innerHTML=totalSum+"$";
                }
                if(spnRes==0){
totalValue.innerHTML=0+"$";
                }
            }
            
        }
    for(i=0;i<formToCheck.elements.length;i++){
        var isValid=false;
        var e=formToCheck.elements[i];
        var pattern=e.getAttribute("data-val");
        if(e.type!="text")continue;
        if(pattern){
            e.onchange=checkFormdata;
            isValid=true;
            if(isValid){
                form.onsubmit=checkFormData;
            }
        }
    }
        function checkFormdata(){
            var val=this.value;
            var msg=this.dataset.valMsg;
            var varId=this.dataset.valId;
            var name=this.id;
            var pattern=this.dataset.val;
            if(val.search(pattern)==-1){
                document.getElementById(varId).innerHTML=msg;
                document.getElementById(varId).className="error";
            }else{
                document.getElementById(varId).innerHTML="";
                document.getElementById(varId).className="valid";
                setCookie(name,val);
            }
        }
        function checkFormData(){
            var valid=false;
            for (i=0;i<formToCheck.elements.length;i++){
                var e=formToCheck.elements[i];
                if(e.type=="text"&& e.onchange!=null){
                    e.onchange();
                    if(e.className=="error"){
                        valid=true;
                        if(valid){
                            alert("Please type in correct information");
                            return false;
                        
                        }
                    }
                }else{
                    alert("Please type in information");
                }
            }
        }
        function setCookie(name,val){
            document.cookie=name+"="+val+";"
        }
            
        
    }

    



        
            
        
       
        




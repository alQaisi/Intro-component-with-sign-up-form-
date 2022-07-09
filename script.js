const inputsData={fName:"",lName:"",email:"",password:""};
const inputs=document.querySelectorAll("label>input");
const form=document.querySelector("form");
let check=false;

inputs.forEach(input=>input.addEventListener("input",(evt)=>{
    if(check){
        inputs.forEach(input=>{
            input.parentElement.classList.remove("invalid");
            input.value="";
        });
        check=false;
    }
    const {name,value}=evt.target;
    inputsData[name]=value;
}))

form.addEventListener("submit",function(evt){
    check=true;
    const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    evt.preventDefault();
    const data=Object.values(inputsData);
    for(let i=0;i<inputs.length;i++){
        data[i].trim()==""?inputs[i].parentElement.classList.add("invalid"):null;
        if(i==2 && !data[i].match(regex)){
            inputs[i].parentElement.classList.add("invalid")
            inputs[i].value="email@example/com"
        }
        if(i==3){
            data[i]!==""?inputs[i].parentElement.classList.remove("invalid"):inputs[i].parentElement.classList.add("invalid");
        }
    }
    const checkValidation=document.querySelector(".invalid");
    checkValidation==undefined?alert("success"):null;
})
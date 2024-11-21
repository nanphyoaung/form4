

document.addEventListener("DOMContentLoaded",()=>{
const form=document.querySelector("form");
const nextBtn=document.querySelector(".next");
const inputs=document.querySelectorAll(".input1");
const input=document.querySelectorAll(".input");
const submitBtn=document.querySelector(".submit");

        nextBtn.addEventListener("click",()=>{
            inputs.forEach((input)=>{
                if(input.value==""){
                    form.classList.add("active");
                }else{
                    form.classList.remove("active");
                }
            })
        });
        const backBtn=document.querySelector("#back");
        backBtn.addEventListener("click",()=>{
            form.classList.remove("active");
        })
        submitBtn.addEventListener("click",()=>{
            input.forEach((input)=>{
                if(input.value==""){
                    document.getElementById("text").style.display="block";
                }else{
                    document.getElementById("text").style.display="none";
                }
            })

        })
})
   

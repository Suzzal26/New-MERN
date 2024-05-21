const contact=()=>{
    const form=document.getElementById("contactForm")
    const formData=new formData(form);
    const formObject=Object.fromEntries(formData.entries)

    //validation
    const data=validate(formObject);
    if(!data) return false;

    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.style.display = "block";
}



        function sendEmail(){
            var params={
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                phone:document.getElementById("phone").value,
                message:document.getElementById("msg").value,
            };   
            const serviceID= "service_gq6jozv";
            const templateID= "template_7rkpa3a";

        emailjs.send(serviceID,templateID,params).then((response)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("phone").value="";
            document.getElementById("msg").value="";
            alert("Successfully Submited")
        },(error)=>{
            console.log(error)
        })

        }
        


 
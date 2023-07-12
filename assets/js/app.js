let cl =console.log;

const stdinfo = document.getElementById("stdinfo");

const emailControl = document.getElementById("email");
const passwordControl = document.getElementById("password");


let db = {
  email: "sachin14051@gmail.com",
  password:"sachin"
}

const onSubmitHandler =(eve) =>{
  eve.preventDefault();

  return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(emailControl.value === db.email && passwordControl.value === db.password ){
            resolve `login successfully`
           }else{
            reject `username and password error`
           }
        })
  },1000)
  .then((res)=>{
   cl(Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })) 
  })
  .catch((err)=>{
    cl(Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    }))
  })
  .finally(()=>{
    eve.target.reset()
  })
 
}

stdinfo.addEventListener("submit", onSubmitHandler)
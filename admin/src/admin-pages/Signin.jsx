import React,{useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { authenticate, isAuthenticated, signin } from '../auth'
import { ToastContainer, toast } from 'react-toastify'
// import { signin, authenticate, isAuthenticated } from '../auth'

const SignIn = () => {
  const navigate=useNavigate()
  // const {user}=isAuthenticated()

  const [values,setValues]=useState({
    
    email:'',
    password:'',
    error:'',
    success:false,
    redirectTo:false,
    message:''
 
  })
  const {email, password, error, redirectTo,success}=values

    // handling the input data:
    const handleChange=name=>event=>{
      setValues({
        ...values ,
        error:false,
        [name]:event.target.value
      })
    }
    const handleSubmit=e=>{
      e.preventDefault()
      setValues({...values})
      // call the signin function:
      signin({email,password})
      .then(data=>{
        if(data.success==false){
          toast.error(`${data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        else{
          authenticate(data,()=>{
            setValues({...values,success:true,redirectTo:true})
          })
        }
        console.log(data)
      })
    }

      // Redirect by user role:
  const redirectUser = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectParam = searchParams.get('redirect');
    const { user } = isAuthenticated();
    

    if (redirectTo) {
      if (user && user.role === "admin") {
       
          return '/admin/dashboard'; 
       
        // Return the path string for admin dashboard
      } 
      else {
        return '/';
      }
    }
    return null; // Return null if no redirection is needed
  };
 

     // to show error message:
  const showError=()=>(
    error && <div className='alert alert-danger'>{message}</div>
  )
  const showSuccess=()=>(
    success && <div className='alert alert-success'>
      Login Successfully 
   
    </div>
  )


  return (
    <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    
    <div className="container my-5">
  <div className="row d-flex justify-content-center">
  <div className="col-md-5 shadow p-3">
  <form >
    <h1 className="mb-5 text-center">Please Login</h1>
    {showError()}
    {showSuccess()}
    {/* {redirectUser()} */}
    {redirectTo && <>{window.location.href = redirectUser()}</>}

    <div className="form-floating mb-2">
      <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange('email')} value={email} />
      <label htmlFor="email">Email address</label>
    </div>
    <div className="form-floating mb-2">
      <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange('password')} value={password} />
      <label htmlFor="password">Password</label>
    </div>


 
    <div style={{"background-color":"green"}} className="btn btn-warning w-25 py-2" type="submit" onClick={handleSubmit}>Login</div>
  </form>

</div>
</div>
</div>
    </>
  )
}

export default SignIn
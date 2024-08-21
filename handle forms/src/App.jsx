import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit, setError, formState: { errors,isSubmitting } } = useForm();

  const delay =(e)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, e*1000);
    })
  }

  const onSubmit = async(data)=>{
    // await delay(2);

    let r=await fetch("http://localhost:3000/",{method:"POST",body: JSON.stringify(data)})
    let res = await r.text();
    console.log(res);
    console.log(data);
    // if(data.username!=="shubham"){
    //   setError("myform",{message:"credentials are not same"})
    // }
  }
  return (
    <>
    <div className="container">
    {isSubmitting && <div>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", {required:{value:true,message:"This field is required"},minLength:{value:3,message:"Min length is 3"}, maxLength:{value:8,message:"Max length is 8"}})} placeholder='username...' type="text" />
        {errors.username && <div>{errors.username.message}</div>}
        <input {...register("password", {minLength:{value:7,message:"Min length is 7"}})} placeholder='password...' type="password" />
        {errors.password && <div>{errors.password.message}</div>}
        <input disabled ={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div>{errors.myform.message}</div>}
      </form>
      
    </div>
    </>
  )
}
 
export default App

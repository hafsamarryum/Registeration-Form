import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormValidation = () => {
  const [form, setForm] = useState(
    {
      uname: '',
      email: '',
      password: '',
      cpassword: ''
    }
  );

  const handleChange = (e) =>{
    setForm ({...form ,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) =>{

  if (form.uname === "" || form.email === "" || form.password === "" || form.cpassword === "" ){
      toast.error("Please fill the form")
    }
  else if (form.password !== form.cpassword) {
    toast.error("Password and confirm password not match");
  }
  else {
      toast.success("Registration Sucessful!");
  }
      e.preventDefault();
  }
  
  return (
    <>
    <div className='main_container'>
       <div className='form_div'>
       <h2>Registeration Form </h2>
       <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label>Username: </label>
        <input type='text' name='uname' value={form.uname} minLength={5}  onChange={handleChange} autoComplete='off' placeholder='Username' />
       </div>
        <div class="form-group">
        <label>Email:</label>
        <input type='email' name='email' value={form.email} onChange={handleChange} required='Email is required' autoComplete='off' placeholder='email@gmail.com' />
        </div>
        <div class="form-group"> 
        <label>Password:</label>
        <input type='text' name='password' value={form.password} minLength={8} onChange={handleChange} autoComplete='off' placeholder='*******' />
        </div>
        <div class="form-group">
        <label>Confirm Password:</label>
        <input type='text' name='cpassword' value={form.cpassword} onChange={handleChange} autoComplete='off' placeholder='*******' />
        </div>
        <button className='btn' type='submit'>SUBMIT</button>
        <ToastContainer />
       </form>
       </div>
       </div>
    </>
  )
}

export default FormValidation

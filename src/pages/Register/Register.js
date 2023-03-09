import React from 'react'
import { useForm } from 'react-hook-form'
import './register.css'

const Register = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="container">
      <h1>Register</h1>      
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="button" type="submit" />
      </form>
    </div>
  )
}

export default Register

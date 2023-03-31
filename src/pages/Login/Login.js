import React from 'react'
import { useForm } from 'react-hook-form'
import './login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch('name'))
  
  return (
    <div className='container'>

      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='form' >

        <input placeholder='Name' {...register('name', { required: true, minLength: 3, maxLength: 25 })} />
        {errors.name?.type === 'required' && <span>This field is required</span>}
        {errors.name?.type === 'minLength' && <span>The min length is 3</span>}
        {errors.name?.type === 'maxLength' && <span>The max length is 25</span>}
        <input type='email' placeholder='email@email.com' {...register('email', { required: true, })} />
        {errors.email?.type === 'email' && <span>This field is required</span>}
        {errors.email?.type === 'pattern' && <span>The parameters entered are not valid</span>}


        <input type='number' placeholder='Age'  {...register('age', { required: true, min: 18, max: 99 })} />
        {errors.age?.type === 'required' && <span>This field is required</span>}
        {errors.age?.type === 'min' && <span>Min age is 18</span>}
        {errors.age?.type === 'max' && <span>Max age is 99</span>}

        <input className='button' type='submit' />

        <NavLink
          className={({ isActive }) => isActive ? 'modal-link modal-link-active' : 'modal-link'}
          to='/register/'
        >Register
        </NavLink>

      </form>
    </div>
  )
}

export default Login

import { useForm } from 'react-hook-form'
import './register.css'

const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  // const createUser = (data) => {
  //   fetch('http://localhost:8080/api/users', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .then(err => console.log(err))
  // }

  // const createUser = async (body) => {

  //   try {
  //     const response = await fetch('ttp://localhost:8080/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify(body),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     const data = await response.json()
  //     console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const onSubmit = data => {
  //   createUser(data)
  // }

  const onSubmit = data => {
    console.log(data)
  }

  // console.log(watch('example'))
  // console.log(errors)

  return (
    <div className='register__container'>

      <h1 className='register__title'>Registro</h1>

      <form className='register__form' onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder='Este campo es requerido'
          maxLength={40}
          type='text'
          {...register('name', { required: true, minLength: 3})}
        />
        {errors.name && <span>Longitud mínima es 3 caracteres</span>}

        <input
          placeholder='Email'
          maxLength={256}
          type='text'
          {...register('email', { required: true, })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          placeholder='Password' 
          maxLength={25}
          type='text'
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type='submit' value='Registrarse' />

        <input type='reset' value='Reset' />

      </form>
    </div>
  )
}

export default FormRegister

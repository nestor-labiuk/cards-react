import { useForm } from 'react-hook-form'
import './register.css'

const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='register__container'>

      <h1 className='register__title'>Registro</h1>

      <form className='register__form' onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder='Este campo es requerido'
          maxLength={12}
          type='text'{...register('name', { required: true, minLength: 3, maxLength: 12 })}
        />
        {errors.name && <span>Longitud mínima es 3 caracteres</span>}

        <input
          maxLength={12}
          placeholder='Email'
          type='text' {...register('email', { required: true, })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          maxLength={12}
          type='text'
          placeholder='Password' {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type='submit' value='Registrarse' />

        <input type='reset' value='Reset' />

      </form>
    </div>
  )
}

export default FormRegister

import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

export default function PatientForms() {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
}

const onSubmit = async (data) => {
    await fetch('/api/patient-forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
};

return (
    <form onSubmit ={handleSubmit(onSubmit)} className={styles.form}>
    <input placeholder='First Name' {...register('firstName', { required: true })} />
    {errors.firstName && <span>This field is required</span>}
    <input placeholder='Last Name' {...register('lastName', { required: true })} />
    {errors.lastName && <span>This field is required</span>}
    <input placeholder='Phone Number' {...register('phoneNumber', { required: true })} />
    {errors.phoneNumber && <span>This field is required</span>}
    <input placeholder='Adress' {...register('address', { required: true })} />
    {errors.address && <span>This field is required</span>}
    <button type='submit'>Submit</button>
    </form> 
)
'use client';

import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { useState } from 'react';

export default function PatientForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
  setIsLoading(true);
  setSuccessMessage('');
  setErrorMessage('');

    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if(!response.ok) {
        throw new Error ('Request Failed');
      }

      setSuccessMessage('Patient registered sucessfully!');
      reset();
    } catch (error) {
      setErrorMessage('There was an error registering the patient.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        placeholder="First Name"
        {...register('firstName', { required: true })}
      />
      {errors.firstName && (
        <span className={styles.errorMensage}>
          This field is required
        </span>
      )}

      <input
        placeholder="Last Name"
        {...register('lastName', { required: true })}
      />
      {errors.lastName && (
        <span className={styles.errorMensage}>
          This field is required
        </span>
      )}

      <input
        placeholder="Phone Number"
        {...register('phoneNumber', { required: true })}
      />
      {errors.phoneNumber && (
        <span className={styles.errorMensage}>
          This field is required
        </span>
      )}

      <input
        placeholder="Address"
        {...register('address', { required: true })}
      />
      {errors.address && (
        <span className={styles.errorMensage}>
          This field is required
        </span>
      )}

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>

      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}

      {errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
    </form>
  );
}
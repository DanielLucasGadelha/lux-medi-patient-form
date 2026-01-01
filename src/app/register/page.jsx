import PatientForm from '@/components/PatientForm'
import styles from './styles.module.css'

export default function RegisterPage() {
    return (<main className={styles.container}>
        <h1>Register</h1>
        
        <PatientForm />
    </main>)

}
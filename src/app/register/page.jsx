import PatientForms from '@/components/patient-forms/index'
import styles from './styles.module.css'

export default function RegisterPage() {
    return (<main className={styles.container}>
        <h1 className={styles.title}>Patient Register</h1>
        
        <PatientForms />
    </main>)

}
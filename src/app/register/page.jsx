import PatientForms from '@/components/patient-forms/index'
import styles from './styles.module.css'

export default function RegisterPage() {
    return (<main className={styles.container}>
        <div className={styles.cardWrapper}>
        <h1 className={styles.title}>Patient Registration</h1>
        <PatientForms />
      </div>
    </main>)

}
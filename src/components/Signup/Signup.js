import { InputControl } from '../InputControl/InputControl'
import styles from './Signup.module.css'
import { Link } from "react-router-dom"
export const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ineerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl label="Name" placeholder="Enter Your Name" />
        <InputControl label="Email" placeholder="Enter Email address" />
        <InputControl label="Password" placeholder="Enter your password" />

        <div className={styles.footer}>
          <button>Signup</button>
          <p>Already have a account?{""}
            <span>
              <Link to="/login">Login up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
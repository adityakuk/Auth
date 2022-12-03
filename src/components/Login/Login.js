import { InputControl } from '../InputControl/InputControl'
import styles from './Login.module.css'
import {Link} from "react-router-dom"
export const Login = () => {
  return (
    <div className={styles.container}>
        <div className= {styles.ineerBox}>
             <h1 className={styles.heading}>Loging</h1>
             <InputControl label="Email" placeholder="Enter Email address" />
             <InputControl label="Password" placeholder="Enter your password" />
             <div className={styles.footer}>
             <button>Login</button>
             <p>Already have a account?{""}
             <span>
             <Link to="/signup">Sign up</Link>
             </span>
             </p>
             </div>
        </div>
    </div>
  )
}
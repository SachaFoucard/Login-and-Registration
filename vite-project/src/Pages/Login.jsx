
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import '../styles/Login.css'

export default function Login() {

  const navigate = useNavigate();
  
  const { Login } = useContext(UserContext)

  const [mail, SetUseMail] = useState('');
  const [password, SetPassword] = useState('');

  const LoginUser = (e) => {
    e.preventDefault();
    let u = Login(mail, password);
    if (u != undefined) {
      alert(`hello ${u.firstName}`);
      navigate(`/profil/${u.id}`);
    }
    else alert('user not found')
  }
  return (
    <>
      <section className='login'>
        <h1 className='login'>Login</h1>
        <div className='cnt'>
          <div className="colm-form">
            <form onSubmit={(e) => LoginUser(e)}>
              <div className="form-container">
                <div className="form-container">
                  <input type="text" placeholder="Email address" onChange={(e) => SetUseMail(e.target.value)} />
                  <input type="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)} />
                  <button className="btn-login" >Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

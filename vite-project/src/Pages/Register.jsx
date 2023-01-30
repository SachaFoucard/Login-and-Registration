import { useState, useContext, } from 'react'
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigator = useNavigate()

  const {GetForm } = useContext(UserContext)

  const [id, setId] = useState();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const enterUser = (e) => {

    e.preventDefault()
   
    GetForm(parseInt(id), lastName, firstName, mail,image,password)
    //e.target.reset() // reset fields
    setId(' ')
    setLastName('')  // reset the query
    setFirstName('')  // reset the query
    setMail('')  // reset the query
    setPassword('')  // reset the query
    setImage('')  // reset the query
    navigator("/users")
  }

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Register Today</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" onSubmit={enterUser}>
                <div className="col-md-12 ">
                  <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
                </div>
                <div className="col-md-12 ">
                  <input type="text" placeholder="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className="col-md-12">
                  <input type="text" placeholder="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className="col-md-12">
                  <input type="email" placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                </div>
                <div className="col-md-12">
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="col-md-12">
                  <input type="text" placeholder="Link Profil Image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                </div>
                <div className="form-button mt-3">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

import React from 'react'

export default function UserProfil({ id, firstName, LastName, mail, password, image }) {
    return (
        <>

            <h1>Welcome {LastName} {firstName} !</h1>
            <div className='login-profil'>
                <fieldset>
                    <img src={image} width={100} />
                    <h2>{firstName} {LastName}</h2>
                    <p>Your Mail : {mail}</p>
                    <p>Your password :{password}</p>
                </fieldset>
            </div>

        </>
    )
}

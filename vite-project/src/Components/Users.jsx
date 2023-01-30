import { useEffect } from 'react';
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

export default function Users() {

    const { users, setUsers } = useContext(UserContext)

    useEffect(() => {
        setUsers(users)
    }, [users])
{
    console.log(users);
}
    return (
        <>
            <div className='table-Users'>
                <h2 className='list'>USERS LIST</h2>
                <table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Mail</th>
                            <th>Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) =>
                                <tr key={item.id} >
                                    <td>{item.firstName}</td>
                                    <td>{item.LastName}</td>
                                    <td>{item.mail}</td>
                                    <td><img src={item.image} width={100}></img></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
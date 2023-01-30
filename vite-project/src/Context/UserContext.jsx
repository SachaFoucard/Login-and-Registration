import { useState, useEffect, createContext } from 'react';


export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [users, setUsers] = useState([]);

    const GetForm = (id, LastName, firstName, mail, image, password) => {
        let u = check(id, LastName, firstName, mail, image, password);
        if (u) {
            let item =
            {
                id,
                LastName,
                firstName,
                mail,
                image,
                password,
            }
            setUsers((prev) => [...prev, item]) // add new item into the array
            console.log(users);
        }
    }

    const LoadUser = async () => {
        try {
            let res = await fetch("../../public/data/dataUser.json");
            let data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error(err);
        }
    }

    function check(id, f, L, m, i, p) {
        if (id != '' && f != '' && L != '' && m != '' && i != '' && p != '') {
            alert("added !");
            return true;
        }
        else {
            alert("not added, check your fields");
            return false;
        }
    }

    function Login(mail, password) {
        let user = users.find((item) => item.mail == mail && item.password == password)
        return user
    }

    useEffect(() => {
        LoadUser();
    }, []);

    const value = {
        users,
        setUsers,
        check,
        Login,
        GetForm
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

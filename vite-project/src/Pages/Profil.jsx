import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';
import UserProfil from '../Components/UserProfil'

export default function Profil() {

  const { users } = useContext(UserContext)

  const [item, setItem] = useState();

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    FindUser();
  }, []);


  const FindUser = () => {
    setItem(users.find((u) => u.id == id));
    console.log(users);
    console.log("item=>", item);
  }
  return (
    <>
    <UserProfil {...item}/>
    </>
  )

}

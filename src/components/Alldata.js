
import Card from "./Card";
import React, {useContext} from 'react';
//import { users } from './Create';
import {MyContext1} from './Context';

export function Alldata() {

const {
  name,
  email,
  password,
  users
  ,
  
depositD,
withdrawD

} =  useContext(MyContext1);

  return (


<>


        {users.map((user)=>(
        <>
        <Card
          bgcolor="primary"
          header="History users"
      
          body={(           
              <>
              <div>Nombre usuario : {name}</div><br/>
              <div>correo : {email}</div><br/>
              <div>Password : {password}</div><br/>
              </>
              )}
              />
            </>

          ))


      } 


{depositD.map((amount)=>(
        <>
        <Card
          bgcolor="primary"
          header="History deposit"
      
          body={(           
              <>
              <div>Deposito : {amount.deposit}</div><br/>

              </>
              )}
              />
            </>

          ))


      }





{withdrawD.map((amount)=>(
        <>
        <Card
          bgcolor="primary"
          header="History withdraw"
      
          body={(           
              <>
              <div>Retiro : {amount.withdraw}</div><br/>

              </>
              )}
              />
            </>

          ))


      }








</>

    );
}



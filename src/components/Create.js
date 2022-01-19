import React, {useContext } from 'react';
import {MyContext1} from './Context';
import Card from './Card';
import fondo from './video/fondo.mp4';

export function Create() {

  const {

    show, 
        status, 
        name, 
        email, 
        password,
        // users, 
        button,
        HandleEmail,
        handleCreate,
        HandleName,
        clearForm,
        setPassword


   } = useContext(MyContext1);
  
 return(

  <div>
        <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
        >
        <source src={fondo} type="video/mp4" />
        </video>



  <Card
    bgcolor="primary"
    header="Create Account"
    status={status}
    body={show ? (  
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={HandleName} /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={HandleEmail}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-warning" onClick={handleCreate} disabled={button}>Create Account</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
  />
</div>
);

}


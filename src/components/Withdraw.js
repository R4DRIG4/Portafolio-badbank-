import React, { useContext } from 'react';
import Card from './Card';
//import Swal from 'sweetalert2';
import atm from './img/atm.png';
import {MyContext1} from './Context';
import fondo from './video/fondo.mp4';


export function Withdraw()  {

    const {

        balanceMoneda,
        ConfirmacionRetiro,
        button,
        withdraw,
        HandleWithdraw
    
    
       } = useContext(MyContext1);



  

return (

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
      bgcolor= "primary"
      header="Retirar"
      title={(<img src={atm} className="img-fluid" alt="Responsive"/>)}

      body={(  
          <>
          <div>Balance : {balanceMoneda}</div><br/>
          

          <div>Monto a Retirar</div><br/>

          <input type="number" className="form-control" id="Withdraw" placeholder="$ Ingrese Monto" value={withdraw}  onChange={HandleWithdraw}/> 
          <br/>

          <button type="submit" className="btn btn-warning" onClick={ConfirmacionRetiro} disabled={button} >Realizar Transaccion</button>
          </>
          )}
      />
      </div>
  );
}


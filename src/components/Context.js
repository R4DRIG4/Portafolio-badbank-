import React, {createContext, useState} from 'react';
import Swal from 'sweetalert2';

export const MyContext1 = createContext();

export function MyContextProvider1 ({children}){

const [show, setShow]         = useState(true);
const [status, setStatus]     = useState('');
const [name, setName]         = useState('');
const [email, setEmail]       = useState('');
const [password, setPassword] = useState('');
const [users, setUsers]       = useState([]);
const [button, setButton]     = useState(true);

function validate(field, label){
  if (!field) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}

function handleCreate(){
console.log(name,email,password);
if (!validate(name,     'name'))     return;
if (!validate(email,    'email'))    return;
if (!validate(password, 'password')) return;
let newUser = {
  name: name,
  email: email,
  password: password,
};
setUsers(() => users.concat(newUser));

Swal.fire({ title: 'Cuenta creada con exito',
imageUrl: 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/128/2705.png',
imageWidth: 250,
imageHeight: 200,
imageAlt: 'Custom image',
            
   }
  );
setShow(false);
} 


function clearForm(){
setName('');
setEmail('');
setPassword('');
setShow(true);
}


function HandleName (e){
if(e.currentTarget.value.length>0){
    setName(e.currentTarget.value);
    setButton(false)
} else { 
    setName(e.currentTarget.value);
    setButton(true)
  }
}

function HandleEmail (e){
if(e.currentTarget.value.length>0){
    setEmail(e.currentTarget.value);
    setButton(false);
} else { 
    setEmail(e.currentTarget.value);
    setButton(true)
  }
}



//codigo deposit

const [deposit, setDeposit] = useState('');
const [balance, setBalance] = useState(0);
// const [button, setButton]   = useState(true);
let [depositD, setDepositD] = useState([]);
    
  
  // ----------- formato moneda en el formulario-----
const inicial = new Intl.NumberFormat(
'es-CL', 
{
style: 'currency',
currency: 'USD',
            });
const balanceMoneda = inicial.format(balance);
  
  // -----alertas------
function ConfirmacionDeposito() {
        // console.log("el valor de deposit es: " + deposit);
        
        // formato moneda en la alerta del monto a depositar
const inicial= new Intl.NumberFormat(
'es-CL', 
{
style: 'currency',
currency: 'USD',
                // minimunFractionDigits: 1,
});
const moneda= inicial.format(deposit);
  
  
  
Swal.fire({ title: 'Confirmar Transaccion',
            text: "¿Deseas depositar el siguiente monto?: " + moneda,
            showCancelButton: true,
            cancelButtonText: 'Modificar',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
            background:'#000',
  
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                
            const NewBalance = Number(balance); 
            setBalance(NewBalance + deposit);
            setDeposit('');
            setButton(true);
                
Swal.fire({ title: 'Transaccion realizada con exito',
            imageUrl: 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/128/2705.png',
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: 'Custom image',
                        
               }
              );

              let newDeposit = {
                deposit: deposit,
            };
            setDepositD((depositD) => depositD.concat(newDeposit));
  
            } else if (result.isDenied) {
  
Swal.fire('Transaccion Cancelada', '', 'info');
            setDeposit('');
            setButton(true);
            }
        });
    };


    
    
  // ----habilitacion o deshabilitación de boton "Deposit"-----
  function HandleDeposit (e){
    if(e.currentTarget.value <= 0){
            setDeposit('');
            setButton(true)
    } else {
            setDeposit(Number(e.currentTarget.value));
            setButton(false) 
        };
    };


//codigo retiro

const [withdraw, setWithdraw] = useState('');
  //const [balance, setBalance]   = useState('');
  //const [button, setButton]     = useState(true);
  let [withdrawD, setWithdrawD] = useState([]);
  

// ----------- formato moneda en el formulario-----
  // const inicial = new Intl.NumberFormat(
  //     'es-CL', 
  //         {
  //             style: 'currency',
  //             currency: 'USD',
  //         });
  // const balanceMoneda = inicial.format(balance);

// -----alertas------

  function sinSaldo (){
      Swal.fire(
          {   title: 'No tiene saldo para realizar transaccion',
              imageUrl: 'https://hotemoji.com/images/emoji/5/1r2ci3pv38k15.png',
              imageWidth: 300,
              imageHeight: 200,
              imageAlt: 'Custom image',
          });
      setWithdraw('');
      setButton(true);
      }


  function ConfirmacionRetiro() {           
      // formato moneda en la alerta delmonto a depositar
      const inicial = new Intl.NumberFormat(
          'es-CL', 
              {
                  style: 'currency',
                  currency: 'USD',
              // minimunFractionDigits: 1,
              });
      const moneda = inicial.format(withdraw);



          Swal.fire({
          title: 'Confirmar Transaccion',
          text: "¿Deseas retirar el siguiente monto?: " + moneda,
          showCancelButton: true,
          cancelButtonText: 'Modificar',
          showDenyButton: true,
          confirmButtonText: 'Confirmar',
          denyButtonText: `Cancelar`,
          background:'#000',
      }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
              const NewBalance = Number(balance); 
              setBalance(NewBalance - withdraw);
              setWithdraw('');
              setButton(true);

              Swal.fire(
                  {   title: 'Transaccion realizada con exito',
                      imageUrl: 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/128/2705.png',
                      imageWidth: 300,
                      imageHeight: 200,
                      imageAlt: 'Custom image',
                  }
              );

              let newWithdraw = {
                withdraw: withdraw,
            };

            setWithdrawD((withdrawD) => withdrawD.concat(newWithdraw));

          } else if (result.isDenied) {
          Swal.fire('Transaccion cancelada', '', 'info');
          setWithdraw('');
          setButton(true);
          }
      });
  };

  
// ----habilitacion o deshabilitación de boton "Deposit"-----
function HandleWithdraw (e){
      if(balance === 0){
          sinSaldo ();
          setWithdraw('');
      } 
      else {
      if(e.currentTarget.value > 0 || e.currentTarget.value <= balance){
          setWithdraw(Number(e.currentTarget.value));
          setButton(false) 
      };

      if(e.currentTarget.value <= 0){
          setWithdraw('');
          setButton(true)
      } 
      else {
      if(e.currentTarget.value > balance){
          setWithdraw(balance);
          setButton(true)
          }
      }
  }
};

















    const contexto1 = {
        show, 
        status, 
        name, 
        email, 
        password,
        users, 
        button,
        setPassword,
        HandleEmail,
        handleCreate,
        HandleName,
        clearForm,
        balanceMoneda,
        ConfirmacionDeposito,
        deposit,
        HandleDeposit,
        ConfirmacionRetiro,
        withdraw,
        HandleWithdraw,
        withdrawD,
        depositD

      
      
        

    };
  
  
  return(
  
  <MyContext1.Provider value={contexto1}>{children}</MyContext1.Provider>
  )
  
  
  }
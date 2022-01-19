import React from 'react';
import Card from './Card';
import bank from './img/bank.png';
import fondo from './video/fondo.mp4';

export function Home() {
 
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
      bgcolor="primary"
      txtcolor="white"
      header="BadBank"
      title="Bienvenidos al Banco con las mejores tasas del mercado"
      text="Realice sus transacciones de forma segura con BadBank."
      body={(<img src={bank} className="img-fluid" alt="Responsive"/>)} 
      />
      </div>
    );
}


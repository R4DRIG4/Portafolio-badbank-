import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export function Navbar()  {
 
  return (
   
<main>
<nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <Link to="/" className="navbar-brand" data-toggle="tooltip" data-placement="top" title="Home" href="#">BadBank</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <Link to="/Create" button className="btn btn-outline-success me-2" data-toggle="tooltip" data-placement="top" title="Create Account" type="button">Create Account</Link>
    <Link to="/Deposit" button className="btn btn-outline-success me-2" data-toggle="tooltip" data-placement="top" title="Deposit" type="button">Deposit</Link> 
    <Link to="/Withdraw" button className="btn btn-outline-success me-2" data-toggle="tooltip" data-placement="top" title="Withdraw" type="button">Withdraw</Link>
    <Link to="/Alldata" button className="btn btn-outline-success me-2" data-toggle="tooltip" data-placement="top" title="Alldata" type="button">Alldata</Link>
</nav>
<section>
    <Outlet />
</section>

</main>

    );
}


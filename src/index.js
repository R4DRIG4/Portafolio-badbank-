import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Alldata} from './components/Alldata';
import {Create} from './components/Create';
import {Deposit} from './components/Deposit';
import {Home} from './components/Home';
import {Navbar} from './components/Navbar';
import {Withdraw} from './components/Withdraw';
import {MyContextProvider1} from './components/Context';
// import {Create} from './components/Create';

ReactDOM.render(
<BrowserRouter>
<MyContextProvider1>
  <Routes>
    <Route path="/" element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path="Create" element={<Create />} />
    <Route path="Deposit" element={<Deposit />} />
    <Route path="Withdraw" element={<Withdraw />} />
    <Route path="Alldata" element={<Alldata/>} />
    </Route>
  </Routes>

</MyContextProvider1>




</BrowserRouter>, document.getElementById('root'));



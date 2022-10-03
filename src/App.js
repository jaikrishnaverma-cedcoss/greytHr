
import './App.css';
import Nav from './Component/Nav';
import Header from './Component/Header';
import {Route, Routes } from 'react-router-dom';
import HrSoftware from './Component/PAGES/HrSoftware';
import Payrol from './Component/PAGES/Payrol';
import Leave from './Component/PAGES/LeaveManage';
import Attendance from './Component/PAGES/Attendance';
import Employee from './Component/PAGES/Employee';
import Mobile from './Component/PAGES/Mobile';
import Resources from './Component/PAGES/Resources';

function App() {
  return (
    <>
      <div className='col full flexAIC'>
        <Nav />
       
     

      <Routes>
        <Route path="/" index element={ <Header />}></Route>
        <Route path='/hrSoftware' element={<HrSoftware />}></Route>
        <Route path='/payroll-software' element={<Payrol />}></Route>
        <Route path='/leave-management-software' element={<Leave />}></Route>
        <Route path='/attendance-management-software' element={<Attendance/>}></Route>
        <Route path='/employee-self-service-portal' element={<Employee />}></Route>
        <Route path='/mobile-app' element={<Mobile />}></Route>
        <Route path='/resources' element={<Resources title="Resource Library" />}></Route>
        <Route path='/blogs' element={<Resources title="Blogs" />}></Route>
        <Route path='/guides' element={<Resources title="Guides" />}></Route>
        <Route path='/template' element={<Resources title="Templates" />}></Route>
      </Routes>


      </div>
<div className=' flexAIC flexStart btner'>
<button className="xbtn"><i class="fa fa-whatsapp" aria-hidden="true"></i>&nbsp;Feedback</button>
</div>

<div className='flexAIC flexStart mbtner'>
<button className="mbtn"><i class="fa fa-whatsapp" aria-hidden="true"></i></button>
</div>
    </>
  );
}

export default App;

import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="row full flexJCC p1 shadow" >
        <div className="w85 row flexAIC flexSB">
          <div className="row w50 flexSB " >
          <Link to="/"><img src="download.svg" width="110px" alt="" /></Link>
            <div className="w80 row flexAIC flexSA" style={{ alignItems: "flex-end" }}>
              <div className="dropdown">

                <p className='dropbtn'>Product <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                <div class="dropdown-content p2 " style={{ borderRadius: "5px",minWidth:"265px"}}>
                <Link to="/hrSoftware"><p style={{ margin: "10%" }}>HR Software</p></Link>
                <Link to="/payroll-software"> <p style={{ margin: "10%" }}>Payroll Software</p></Link>
                <Link to="/leave-management-software">  <p style={{ margin: "10%" }}>Leave Management</p></Link>
                 <Link to="/attendance-management-software"><p style={{ margin: "10%" }}>Attendance Management</p></Link> 
                 <Link to="/employee-self-service-portal"><p style={{ margin: "10%" }}>Employee Self Service</p></Link> 
                 <Link to="/mobile-app"><p style={{ margin: "10%" }}>Mobile App For Employees</p></Link> 
                </div>
              </div>
           
              <Link to="/customer" style={{textDecoration:"none "}}> <p className='dropbtn' >Customers</p></Link>

             <Link to="/pricing" style={{textDecoration:"none "}}><p className='dropbtn'>Pricing</p> </Link>

              <div className="dropdown">
                <p className='dropbtn'>Resources <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                <div class="dropdown-content p2" style={{ borderRadius: "5px",minWidth:"412px"}}>
           <div className="row full">
<div className="col w50">
  <div className="row flexAIC m3"><img src="im1.png" width="30px" alt="" />
    <Link to="/resources"><p className="m1">Resource Librery</p></Link></div>
    <Link to="/blogs"><p className="sublink">Blogs</p></Link>
    <Link to="/guides"><p className="sublink">Guides</p></Link>
    <Link to="/template"><p className="sublink">Templates</p></Link>
  <div className="row flexAIC m3"><img src="webinars.png" width="30px" alt="" /> <p className="m1">Webinars</p></div>
  <div className="row flexAIC m3"><img src="podcast.png" width="30px" alt="" /> <p className="m1">Podcasts </p></div>
  <div className="row flexAIC m3"><img src="partners.png" width="30px" alt="" /> <p className="m1">Partners </p></div>
  <div className="row flexAIC m3"><img src="academy.png" width="30px" alt="" /> <p className="m1">Academy </p></div>
  <div className="row flexAIC m3"><img src="forums.png" width="30px" alt="" /> <p className="m1">Community </p></div>
  <div className="row flexAIC m3"><img src="im1.png" width="30px" alt="" /> <p className="m1">GreytHR Help</p></div>
</div>
<div className="col w50">

<div className="row flexAIC m3"><img src="Payroll Management.png" width="30px" alt="" /> <p className="m1">Payroll Management </p></div>
  <div className="row flexAIC m3"><img src="Leave Management.png" width="30px" alt="" /> <p className="m1">Leave Management </p></div>
  <div className="row flexAIC m3"><img src="Attendance Management.png" width="30px" alt="" /> <p className="m1">Attendance Management </p></div>
  <div className="row flexAIC m3"><img src="HRMS.png" width="30px" alt="" /> <p className="m1">HRMS </p></div>
  <div className="row flexAIC m3"><img src="Statutory Compliances.png" width="30px" alt="" /> <p className="m1">Statutory Compliances </p></div>
</div>
           </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row flexAIC w50 flexEnd">
           <Link to="signup"  style={{textDecoration:"none "}}><button className="dbtn">GET STARTED FOR FREE</button></Link> 
           <Link to="login"  style={{textDecoration:"none "}}><button className="border-btn">Log In</button></Link> 
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav
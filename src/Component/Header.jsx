import React from 'react'
import AlignCard from './AlignCard'
import Reviews from './Reviews'
import Testomonial from './Testomonial'

const Header = () => {
    return (
        <>
            <nav className="row full flexJCC p1 " >
                <div className="w85 row flexAIC flexSB">
                    <div className="row full" style={{ marginTop: "45px" }}>
                        <div className="col w60  flexJCC">
                            <h1 className='fontBlack m2' style={{ fontSize: "2.9rem", lineHeight: "1.3", marginLeft: "0px", letterSpacing: "1 px" }}>Essential HR Business Tools To Survive And Thrive</h1>
                            <p style={{ color: "#3e3434", fontSize: "1.2rem", lineHeight: "1.35", marginLeft: "0px" }}>The greytHR Platform automates HR processes & empowers employee self-service.
                                Get all-around productivity and engaged employees—the crucial ingredients for growth.
                            </p>
                            <button className="dbtn w40 p2" style={{ marginTop: "25px", fontSize: "1.3rem" }} >START FREE TRIAL</button>
                        </div>
                        <div className="row w40 flexEnd" style={{}}>
                            <img src="greythr-fetures-illustration.webp" className="w99" style={{}} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w85 col flexAIC flexJCC flexSB" style={{ marginTop: "60px", color: "#3e3434", fontSize: "1.23rem" }}>
                <p className='m1'>TRUSTED BY</p>
                <p><span className='highlited'>15,000+</span> BUSINESSES  <span className='highlited'>&15 LAKH+</span> USERS IN <span className='highlited'>150+</span> CITIES</p>
                <img className="w99 m1" style={{marginTop:"100px"}} src="logos-lg.webp" alt="" />
            </div>
            <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
          <AlignCard data={{ class: "", img: "ghr_payroll.svg", headl1: "PAYROLL PROCESSING + STATUTORY", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "ghr_leave_management.svg", headl1: "LEAVE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "ghr_attendance_management.svg", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "ghr_employee_management.svg", headl1: "EMPLOYEE LIFECYCLE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "ghr_mobile.svg", headl1: "MOBILE APP FOR EMPLOYEES", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
        </div>
        <Testomonial />
        <Reviews />
        </>
    )
}

export default Header
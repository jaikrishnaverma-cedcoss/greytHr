import React from 'react'
import AlignCard from '../AlignCard'

const Pricing = () => {
  return (
   <>
     <div className="row full hr" style={{height:"500px",background:"url('downloadflip.svg')"}}>
<div className="row full rowRev" >
    <div className="col w50 flexAIC flexJCC">
        <img src="bannerImg (1).webp" width="320px" alt="" />
    </div>
    <div className="col w50 flexAIC flexJCC">
        <div className="col">
            {/* <h2>Payroll Software</h2> */}
            <p style={{color:"orange",fontSize:"3rem"}}>Pick your plan</p>
            {/* <p style={{color:"orange",fontSize:"3rem"}}>accurate payouts</p> */}
            <p style={{maxWidth:"400px",marginTop:"20px",lineHeight:"2"}}>No matter what the size of your company or the extent of your HR needs, greytHR has a plan that's just right for you.</p>
            <button className="dbtn w50 p2" style={{ marginTop: "25px", fontSize: "1.23rem",background:"orange",borderColor:"orange"}} >Choose Now</button>
        </div>
    </div>
</div>
    </div>
    <div className='col full flexAIC' style={{ margin: "50px 0px" }}>
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "PAYROLL PROCESSING + STATUTORY", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "LEAVE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "ATTENDANCE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "rowRev", img: "1610949179-overview-greythr.avif", headl1: "EMPLOYEE LIFECYCLE MANAGEMENT", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
          <AlignCard data={{ class: "", img: "1610949179-overview-greythr.avif", headl1: "MOBILE APP FOR EMPLOYEES", headl2: "COMPLIANCE", pl1: "Process payroll accurately", pl2: "Disburse payslips with one click", pl3: "100% statutory compliance with PF/ESI/PT/TDS etc." }} />
        </div>
   </>
  )
}

export default Pricing
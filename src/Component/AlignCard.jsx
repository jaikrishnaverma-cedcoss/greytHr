import React from 'react'

const AlignCard = (props) => {
  return (
    <>
      <div className={`row w85 ${props.data.class}`} style={{ margin: "50px 0px" }}>
        <div className="col w40 flexAIC flexJCC">
          <img src={props.data.img} width="100%" alt="" />
        </div>
        <div className="col w60 clr">
          <div className="dbg m1" style={{ marginLeft: "0px", width: "50px", padding: ".5% .4%" }}></div>
          <p className="heading clr" style={{ margin: ".4% 0px" }}>{props.data.headl1}</p>
          <p className="heading clr" style={{ margin: ".4% 0px" }}>{props.data.headl2}</p>
          <div className="col" style={{ marginTop: "25px" }}>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }}>{props.data.pl1}</p>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }}>{props.data.pl2}</p>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }}>{props.data.pl3}</p>
            <p style={{ margin: "1% 0%", fontSize: "1.2rem" }} className="dfont">LEARN MORE ➝</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlignCard
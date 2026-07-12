import React from 'react'
 
const Doctor_card = (props) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.specialization}</p>
                    <p className="card-text">Experience:{props.experience}</p>
                    <p className="card-text">Fees:₹{props.fees}</p>
                </div>
            </div>
        </div>
    )
}

export default Doctor_card

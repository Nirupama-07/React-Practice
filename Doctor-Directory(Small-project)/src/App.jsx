import React from 'react'
import Doctor_card from './components/Doctor_card'

const App = () => {
  return (
    <>
      <h2>Found Your Doctor</h2>
      <div className='doctor-cards'>
        <Doctor_card name="Smirti Agarwal" specialization="Orthopedics" experience="3 Years" fees="30,000"/>
        <Doctor_card name="Paridhi Swain" specialization="Neurology" experience="5 Years" fees="50,000"/>
        <Doctor_card name="Aditya Dash" specialization="Cardiology" experience="2 Years" fees="25,000"/>
        <Doctor_card name="Dheraj Biswal" specialization="Orthopedics" experience="4 Years" fees="40,000"/>
        <Doctor_card name="Priti Lokhande" specialization="Dermatology" experience="1 Years" fees="15,000"/>
        <Doctor_card name="Akriti Nayak" specialization="Pediology" experience="2 Years" fees="25,000"/>
      </div>
      
    </>
  )
}

export default App

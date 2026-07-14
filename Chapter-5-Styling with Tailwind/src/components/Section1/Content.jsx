import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='flex flex-1/3 gap-40'>
      <LeftContent/>
      <RightContent displayImage={props.displayImage}/>
    </div>
  )
}

export default Content

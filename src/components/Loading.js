import React from 'react'
import Spinner from './Spinner.gif'
//import React from 'react'

const Loading=()=> {
  return (
    <div className='text-center'>
        <img src={Spinner} alt="loading gif"></img>
      </div>
  )
}
export default Loading; 


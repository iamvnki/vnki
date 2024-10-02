import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'


export const About = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-6">
          <h1>About me</h1>
        </div>
        <div className="col-6 text-end pt-5">
          <Link to='/'><p className='btn btn-danger'>Go Back</p></Link>
        </div>
      </div>
      
    </div>
  )
}

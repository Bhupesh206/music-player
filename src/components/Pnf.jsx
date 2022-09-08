import React from 'react'
import { NavLink } from 'react-router-dom'

function Pnf() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h5 className="display-3 text-danger">Page not Found</h5>
                <NavLink to ={"/"} className="btn btn-outline-warning">Return to Home</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Pnf
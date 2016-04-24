import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class Patient extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="patient">
        <div className="header">
          <h4>Patient</h4>
        </div>
        <div className="info">
          <h5>Aaron Robb</h5>
          <div className="details">
            <div className="group">
              <div className="detail">
                <span  className="key">DOB: </span> 2/27/1990
              </div>
              <div className="detail">
                <span className="key">Gender: </span> Male
              </div>
              <div className="detail">
                <span className="key">Race: </span>
              </div>

            </div>
            <div className="group">
              <div className="detail">
                <span className="key">Reason for Admittance: </span>
                Lyme Disease
              </div>
              <div className="detail">
                <span className="key">Height: </span>
                 6'1
              </div>
              <div className="detail">
                <span className="key">Weight: </span>
                185 lbs
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Patient.prototype, PureRenderMixin)

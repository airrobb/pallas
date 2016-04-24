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
          <div className="details">
            <div className="group bio">
              <div className="col s7">
                <div className="detail">
                  <h5>Aaron Robb</h5>
                </div>
              <div className="detail">
                02/27/1990, Age 26

              </div>
              <div className="detail">
                Male -- Caucasian
              </div>
              </div>
              <div className="col s4">
                <img src="./img/aaron.png" alt="aaron" />

              </div>

            </div>

            <div className="group vital">
              <div className="col s12">
              <div className="detail">
                <span className="key">Reason for Admittance: </span>
                Lyme Disease
              </div>
              <div className="detail">
                <span className="key">Height: </span>
                 6 ft. 1 inches
              </div>
              <div className="detail">
                <span className="key">Weight: </span>
                185.33 lbs
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Patient.prototype, PureRenderMixin)

import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class Caregiver extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="caregivers">
        <div className="header">
          <h4>Caregivers</h4>
        </div>
        <div className="content">
          <div className="caregiver">
            <div className="col s3">
              <img src="./img/doctor.png" alt="doctor" />
            </div>
            <div className="col s9">
              <h6>Doctor</h6>
              <p>Bill Belichick</p>
              <p>M.D.</p>
            </div>
          </div>
          <div className="caregiver">
            <div className="col s3">
              <img src="./img/nurse.png" alt="doctor" />
            </div>
            <div className="col s9">
              <h6>Nurse</h6>
              <p>Gisele Bundchen</p>
              <p>M.D.</p>
            </div>
          </div>
          <div className="caregiver">
            <div className="col s3">
              <img src="./img/scrub.png" alt="doctor" />
            </div>
            <div className="col s9">
              <h6>Tech</h6>
              <p>Tom Brady</p>
              <p>Scrub Technician</p>
            </div>
          </div>
        </div>
  
      </div>
    )
  }
}

reactMixin(Caregiver.prototype, PureRenderMixin)

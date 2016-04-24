import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class Status extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="status">
        <div className="header">
          <h4>Current Status</h4>
        </div>
        <div className="content">
          <div className="item good">
            Last Visit: 10:25 AM
          </div>
          <div className="item good">
            Last Medication: 10:25 AM
          </div>
          <div className="item warning">
            Pain Level: 5
          </div>
          <div className="item danger">
            Allergies: Penicillin, Amoxicillin, Zithromax
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Status.prototype, PureRenderMixin)

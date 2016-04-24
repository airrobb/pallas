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
      <div className="caregiver">
        <div className="image-wrapper">
          <img src="" />
        </div>
        <div className="info">
          <h4>Caregiver Name</h4>
          <p>Wakaka waka</p>
        </div>
      </div>
    )
  }
}

reactMixin(Caregiver.prototype, PureRenderMixin)

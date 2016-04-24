import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class Patient extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="Patient">
        <h2>Name</h2>
        <div className="random">

        </div>
      <div className="notes">

        </div>
      </div>
    )
  }
}

reactMixin(Patient.prototype, PureRenderMixin)

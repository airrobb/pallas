import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class Event extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, time, person } = this.props
    return (

      <div className="event">
        <h5>{ name } <span className="timestamp">{ time }</span></h5>
        <div className="by-line">{ person }</div>
        <p>Lorem ipsum dolor sit amet, no meis falli sit, cu cum augue nostrum principes, integre luptatum sed ei.</p>
      </div>
    )
  }
}

reactMixin(Event.prototype, PureRenderMixin)

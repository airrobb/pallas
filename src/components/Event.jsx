import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class Event extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="event">
        <h5>Event name <span className="timestamp">12:30 AM</span></h5>
        <p>Event meta lorem ipsum juggle fine motor skills are deteriorating ableist scum</p>
      </div>
    )
  }
}

reactMixin(Event.prototype, PureRenderMixin)

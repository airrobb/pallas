import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class ScheduleItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="schedule-item row">
        <div className="col s6">
          Name of Schedule Item
        </div>
        <div className="col s6">
          Time of Event
        </div>
      </div>
    )
  }
}

reactMixin(ScheduleItem.prototype, PureRenderMixin)

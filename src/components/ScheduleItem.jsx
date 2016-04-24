import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class ScheduleItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="schedule-item">
        <div className="time">
          10:30PM - 11:30PM
        </div>
        <div className="name">
          Some medical thing
        </div>
      </div>
    )
  }
}

reactMixin(ScheduleItem.prototype, PureRenderMixin)

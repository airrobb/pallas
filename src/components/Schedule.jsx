import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { ScheduleItem } from './ScheduleItem'

export class Schedule extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="schedule">
        <div className="header">
          <h4>Schedule</h4>
        </div>
        <div className="content">
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
        </div>
      </div>
    )
  }
}

reactMixin(Schedule.prototype, PureRenderMixin)

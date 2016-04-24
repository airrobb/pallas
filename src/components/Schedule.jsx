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
          <ScheduleItem name="Blood Tests" start="12:30 PM" stop="1:00 PM"/>
          <ScheduleItem name="Spinal Tap" start="1:30 PM" stop="2:30 PM"/>
          <ScheduleItem name="MRI" start="4:30 PM" stop="6:30 PM"/>
          <ScheduleItem name="Dinner" start="7:00 PM" stop="8:00 PM"/>
        </div>
      </div>
    )
  }
}

reactMixin(Schedule.prototype, PureRenderMixin)

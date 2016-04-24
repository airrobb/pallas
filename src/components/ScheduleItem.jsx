import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export class ScheduleItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { start, stop, name} = this.props
    return (
      <div className="schedule-item ">
        <div className="name  col s6">
          { name }
        </div>
        <div className="time col s6">
          { start } - { stop }
        </div>

      </div>
    )
  }
}

reactMixin(ScheduleItem.prototype, PureRenderMixin)

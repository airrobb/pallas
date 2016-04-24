import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Event } from './Event'

export class Feed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const events = new Array(10).fill('x').map((e, i) => {
      return <Event key={i} />
    })
    return (
      <div className="feed">
        <div className="header">
          <h4>Recent Events</h4>
        </div>
        <div className="content">
          { events }
        </div>
      </div>
    )
  }
}

reactMixin(Feed.prototype, PureRenderMixin)

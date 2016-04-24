import React, { Component } from 'react'

import { Event } from './Event'

export class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { events: props.events }
  }
  componentWillMount() {
    this.interval = setInterval(this.newEvent.bind(this), 2000)
  }
  componentWillDismount() {
    clearInterval(this.interval)
  }
  newEvent() {
    const { events } = this.state
    console.log(events)

    const first = events.shift()

    events.push(first)
    console.log(events)

    this.setState({
      events: events
    })
  }
  render() {
    const { events } = this.props
    const eventsArray = []
    events.map((e, i) => {
      eventsArray.push(<Event key={i} name={e.name} time={e.time} person={e.person}/>)
    })
    return (
      <div className="feed">
        <div className="header">
          <h4>Recent Events</h4>
        </div>
        <div className="content">
          { eventsArray.reverse() }
        </div>
      </div>
    )
  }
}

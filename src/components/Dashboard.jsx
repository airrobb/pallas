import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators/dashboard'
import { Feed } from './Feed'
import { Schedule } from './Schedule'
import { Caregiver } from './Caregiver'
import { Patient } from './Patient'
import { Status } from './Status'
//Dashboard

class Dashboard extends Component {
constructor(props) {
  super(props)
}

render() {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col s4 section">
          <Patient />
            <Caregiver />

        </div>
        <div className="col s4 middle section">
          <Schedule />
          <Status />
        </div>
        <div className="col s4 section">
          <Feed events={this.props.events}/>
        </div>
      </div>
    </div>
  )
}
}

reactMixin(Dashboard.prototype, PureRenderMixin)

function mapStateToProps(state) {
return {
    events: state.events
  }
}

export const DashboardContainer = connect(mapStateToProps, actionCreators)(Dashboard)

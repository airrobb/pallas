import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'


//Landing Page Junk Stuff

export class Status extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="status">
        <div className="header">
          <h4>Current Status</h4>
        </div>
        <div className="content">
        </div>
      </div>
    )
  }
}

reactMixin(Status.prototype, PureRenderMixin)

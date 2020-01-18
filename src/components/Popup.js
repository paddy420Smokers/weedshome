import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'
import FormNewsletter from '../components/FormNewsletter'

import './Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = { showPopup: false }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>
        <div className="taCenter">
          <div class="Button" onClick={this.togglePopup.bind(this)}>
            Join Newsletter
          </div>
        </div>

        {this.state.showPopup ? (
          <div className="Popup-Overlay">
            <div
              className="Popup-Background"
              onClick={this.togglePopup.bind(this)}
            ></div>
            <div className="Popup-Inner">
            <h2 className="Popup-headline">Weeds Home Newsletter</h2>
            <p class="Popup-text">Stay up to date with the latest cannabis trends, events and  more.</p>
            <div>
          <FormNewsletter name="Simple Form Ajax" />
        </div>
       <X class="Popup-Close" onClick={this.togglePopup.bind(this)} />
              {children}
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
}
export default Popup

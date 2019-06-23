import React from 'react'
import _ from 'lodash'

import { simulateMrzApiCall } from '../../api/mrz-simulator'

import FormGlobal from './form_global/form-global'
import MrzResult from './mrz-result'

class MainBody extends React.Component {
  state = {
    mrzString: '',
    apiError: ''
  }

  changeState = (value, targetedKey) => {
    this.setState(_.set(_.clone(this.state), `${targetedKey}.value`, value))
  }

  handleApiCall = res => {
    this.setState({ mrzString: res.mrz })
  }
  handleError = err => {
    this.setState({ apiError: err.message })
  }

  triggerApiCall = data => {
    simulateMrzApiCall(data)
      .then(res => this.handleApiCall(res))
      .catch(this.handleError)
  }

  render() {
    return (
      <div className="container-main-body">
        <FormGlobal triggerApiCall={this.triggerApiCall} />
        <MrzResult mrzString={this.state.mrzString} />
      </div>
    )
  }
}

export default MainBody

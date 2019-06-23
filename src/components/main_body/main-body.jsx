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
        <p className="indication">
          Hello, this form allows you to generate a MRZ of type TD3.
        </p>
        <FormGlobal triggerApiCall={this.triggerApiCall} />
        <MrzResult mrzString={this.state.mrzString} />
      </div>
    )
  }
}

export default MainBody

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { simulateMrzApiCall } from '../../api/mrz-simulator'

import FormGlobal from './form_global/form-global'
import MrzResult from './mrz-result'

class MainBody extends React.Component {
  static propTypes = {}

  state = {
    mrzString: '',
    apiError: ''
  }

  changeState = (value, targetedKey) => {
    this.setState(_.set(_.clone(this.state), `${targetedKey}.value`, value))
  }

  handleApiCall = res => {
    console.log('RES=============', res)
    this.setState({ mrzString: res.mrz })
  }
  handleError = err => {
    console.log('ERRROR ===================', err)
    this.setState({ apiError: err.message })
  }

  triggerApiCall = data => {
    console.log('SENT DATA ===========', data)
    simulateMrzApiCall(data)
      .then(res => this.handleApiCall(res))
      .catch(this.handleError)
  }

  render() {
    console.log('THIS.MRZTRING ==========', this.state)
    return (
      <div>
        <FormGlobal triggerApiCall={this.triggerApiCall} />
        <MrzResult mrzString={this.state.mrzString} />
      </div>
    )
  }
}

export default MainBody

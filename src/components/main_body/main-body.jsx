import React from 'react'
import PropTypes from 'prop-types'

import { simulateMrzApiCall } from '../../api/mrz-simulator'

import FormGlobal from './form_global/form-global'

class MainBody extends React.Component {
  static propTypes = {}

  state = {
    mrzResult: ''
  }

  handleFormSubmission = data => {
    simulateMrzApiCall(data)
      .then(res => console.log('RES===', res))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <FormGlobal handleFormSubmission={this.handleFormSubmission} />
      </div>
    )
  }
}

export default MainBody

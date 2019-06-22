import React from 'react'
import PropTypes from 'prop-types'

import FormGlobal from './form_global/form-global'

class MainBody extends React.Component {
  static propTypes = {}

  state = {
    mrzResult: ''
  }

  render() {
    return (
      <div>
        MainBody <FormGlobal />
      </div>
    )
  }
}

export default MainBody

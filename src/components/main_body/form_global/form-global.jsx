import React from 'react'
import PropTypes from 'prop-types'

import FormInput from '../../common/form-input'

class FormGlobal extends React.Component {
  static propTypes = {}
  state = {
    surname: {
      value: '',
      error: null
    },
    givenNames: {
      value: '',
      error: null
    },
    passportNumber: {
      value: '',
      error: null
    },
    country: {
      value: '',
      error: null
    },
    nationality: {
      value: '',
      error: null
    },
    dateOfBirth: {
      value: '',
      error: null
    },
    dateOfExpiration: {
      value: '',
      error: null
    }
  }

  render() {
    return (
      <div>
        <FormInput />
      </div>
    )
  }
}

export default FormGlobal

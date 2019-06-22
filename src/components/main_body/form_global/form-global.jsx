import React from 'react'
import PropTypes from 'prop-types'

import countries from '../../../data/countries'
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
  namesRegex = "^([a-zA-Z]+[ |'|-|-]?)+$"
  passportNumberRegex = '^[a-zA-Z0-9]{9}$'

  render() {
    return (
      <div>
        <FormInput
          placeholder="Surname"
          pattern={this.namesRegex}
          type="text"
        />
        <FormInput
          placeholder="Passport Number ex: AV4562B56"
          pattern={this.passportNumberRegex}
          type="text"
        />
        <FormInput type="date-picker" />
        <FormInput type="select" options={countries} />
      </div>
    )
  }
}

export default FormGlobal

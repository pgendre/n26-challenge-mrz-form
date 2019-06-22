import React from 'react'
import PropTypes from 'prop-types'

import countries from '../../../data/countries'
import FormInput from '../../common/form-input'
import formDescription from './form-description'

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
        <FormInput
          placeholder={formDescription.surname.placeholder}
          pattern={formDescription.surname.regex}
          type="text"
        />
        <FormInput
          placeholder={formDescription.givenNames.placeholder}
          pattern={formDescription.givenNames.regex}
          type="text"
        />
        <FormInput
          placeholder={formDescription.passportNumber.placeholder}
          pattern={formDescription.passportNumber.regex}
          type="text"
        />
        <FormInput type="date-picker" />
        <FormInput type="select" options={countries} />
      </div>
    )
  }
}

export default FormGlobal

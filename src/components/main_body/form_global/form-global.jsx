import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

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

  handleChange = (evt, targetedKey) => {
    this.setState(
      _.set(_.clone(this.state), `${targetedKey}.value`, evt.target.value)
    )
  }

  render() {
    return (
      <div>
        <FormInput
          placeholder={formDescription.surname.placeholder}
          pattern={formDescription.surname.regex}
          value={this.state.surname.value}
          onChange={evt => this.handleChange(evt, 'surname')}
          type="text"
        />
        <FormInput
          placeholder={formDescription.givenNames.placeholder}
          pattern={formDescription.givenNames.regex}
          value={this.state.givenNames.value}
          onChange={evt => this.handleChange(evt, 'givenNames')}
          type="text"
        />
        <FormInput
          placeholder={formDescription.passportNumber.placeholder}
          pattern={formDescription.passportNumber.regex}
          value={this.state.passportNumber.value}
          onChange={evt => this.handleChange(evt, 'passportNumber')}
          type="text"
        />
        <FormInput type="date-picker" />
        <FormInput type="select" options={countries} />
      </div>
    )
  }
}

export default FormGlobal

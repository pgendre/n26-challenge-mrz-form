import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import countries from '../../../data/countries'
import FormInput from '../../common/form-input'
import formDescription from './form-description'
import formValidation from './form-validation'

class FormGlobal extends React.Component {
  static propTypes = {
    handleFormSubmission: PropTypes.func.isRequired
  }

  state = {
    surname: {
      value: '',
      error: ''
    },
    givenNames: {
      value: '',
      error: ''
    },
    passportNumber: {
      value: '',
      error: ''
    },
    issuingCountry: {
      value: '',
      error: ''
    },
    nationality: {
      value: '',
      error: ''
    },
    dateOfBirth: {
      value: '',
      error: ''
    },
    dateOfExpiration: {
      value: '',
      error: ''
    }
  }

  changeState = (value, targetedKey) => {
    this.setState(_.set(_.clone(this.state), `${targetedKey}.value`, value))
  }

  handleChange = (evt, targetedKey) =>
    this.changeState(evt.target.value, targetedKey)

  handleDateChange = (date, targetedKey) => this.changeState(date, targetedKey)

  handleFormValidation = () => {
    console.log('HANDLE FORM VALIDATIOn ===================')
  }

  render() {
    console.log('NEW STATE =', this.state)
    return (
      <div>
        <FormInput
          type="text"
          placeholder={formDescription.surname.placeholder}
          pattern={formDescription.surname.regex}
          value={this.state.surname.value}
          onChange={evt => this.handleChange(evt, 'surname')}
        />
        <FormInput
          type="text"
          placeholder={formDescription.givenNames.placeholder}
          pattern={formDescription.givenNames.regex}
          value={this.state.givenNames.value}
          onChange={evt => this.handleChange(evt, 'givenNames')}
        />
        <FormInput
          type="text"
          placeholder={formDescription.passportNumber.placeholder}
          pattern={formDescription.passportNumber.regex}
          value={this.state.passportNumber.value}
          onChange={evt => this.handleChange(evt, 'passportNumber')}
        />
        <FormInput
          type="select"
          options={countries}
          onChange={evt => this.handleChange(evt, 'issuingCountry')}
          value={this.state.issuingCountry.value}
        />
        <FormInput
          type="select"
          options={countries}
          onChange={evt => this.handleChange(evt, 'nationality')}
          value={this.state.nationality.value}
        />
        <FormInput
          type="date-picker"
          onChange={evt => this.handleDateChange(evt, 'dateOfBirth')}
        />
        <FormInput
          type="date-picker"
          onChange={evt => this.handleDateChange(evt, 'dateOfExpiration')}
        />
        <button onClick={this.handleFormValidation}>Submission</button>
      </div>
    )
  }
}

export default FormGlobal

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import countries from '../../../data/countries'
import FormInput from '../../common/form-input'
import formDescription from './form-description'
import { formValidation } from './form-validation'
import { formatDataForApi } from './format-data'

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
    const { isFormValid, newState } = formValidation(this.state)
    if (!isFormValid) {
      this.setState(newState)
    } else {
      this.props.handleFormSubmission(formatDataForApi(newState))
    }
  }

  displayStringFields = fields =>
    fields.map((field, i) => (
      <FormInput
        key={i}
        type="text"
        placeholder={formDescription[field].placeholder}
        pattern={formDescription[field].regex}
        value={this.state[field].value}
        error={this.state[field].error}
        onChange={evt => this.handleChange(evt, field)}
      />
    ))

  render() {
    return (
      <div>
        {this.displayStringFields(['surname', 'givenNames', 'passportNumber'])}
        <FormInput
          type="select"
          options={countries}
          onChange={evt => this.handleChange(evt, 'issuingCountry')}
          value={this.state.issuingCountry.value}
          error={this.state.issuingCountry.error}
        />
        <FormInput
          type="select"
          options={countries}
          onChange={evt => this.handleChange(evt, 'nationality')}
          value={this.state.nationality.value}
          error={this.state.nationality.error}
        />
        <FormInput
          type="date-picker"
          onChange={evt => this.handleDateChange(evt, 'dateOfBirth')}
          value={this.state.dateOfBirth.value}
          error={this.state.dateOfBirth.error}
        />
        <FormInput
          type="date-picker"
          onChange={evt => this.handleDateChange(evt, 'dateOfExpiration')}
          value={this.state.dateOfExpiration.value}
          error={this.state.dateOfExpiration.error}
        />
        <button onClick={this.handleFormValidation}>Submission</button>
      </div>
    )
  }
}

export default FormGlobal

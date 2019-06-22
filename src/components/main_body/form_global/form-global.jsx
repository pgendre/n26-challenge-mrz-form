import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import countries from '../../../data/countries'
import FormInput from '../../common/form-input'
import formDescription from './utils/form-description'
import { formValidation } from './utils/form-validation'
import { formatDataForApi } from './utils/format-data'

class FormGlobal extends React.Component {
  static propTypes = {
    triggerApiCall: PropTypes.func.isRequired
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

  changeState = (targetedKey, value) => {
    this.setState(_.set(_.clone(this.state), `${targetedKey}.value`, value))
  }

  handleChange = (evt, targetedKey) =>
    this.changeState(targetedKey, evt.target.value)

  handleDateChange = (date, targetedKey) => this.changeState(targetedKey, date)

  handleUserValidation = () => {
    const { isFormValid, newState } = formValidation(this.state)
    if (!isFormValid) {
      this.setState(newState)
    } else {
      this.props.triggerApiCall(formatDataForApi(newState))
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
      <div className="container-form">
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
        <button className="btn" onClick={this.handleUserValidation}>
          Submission
        </button>
      </div>
    )
  }
}

export default FormGlobal

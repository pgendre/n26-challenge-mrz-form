import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class FormInput extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    error: PropTypes.string
  }

  displayLabel = () => this.props.label && <label>{this.props.label}</label>
  displayError = () =>
    this.props.error === '' || (
      <div className="input-error">{this.props.error}</div>
    )

  displayTextInput = () => <input {...this.props} />

  displaySelect = () => (
    <select {...this.props}>
      <option value={''}> -- {this.props.placeholder} -- </option>
      {this.props.options.map(o => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )

  displayDatePicker = () => <DatePicker {...this.props} />

  displayInput = () => {
    switch (this.props.type) {
      case 'text':
        return this.displayTextInput()
      case 'select':
        return this.displaySelect()
      case 'date-picker':
        return this.displayDatePicker()
      default:
        return this.displayTextInput()
    }
  }

  render() {
    return (
      <div className="form-group">
        {this.displayLabel()}
        {this.displayInput()}
        {this.displayError()}
      </div>
    )
  }
}

export default FormInput

import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

class FormInput extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
  }
  constructor(props) {
    super(props)
  }

  displayError = () => this.props.error === '' || <div>{this.props.error}</div>

  displayTextInput = () => <input {...this.props} />

  displaySelect = () => (
    <select {...this.props}>
      <option value={null}> -- </option>
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
      <div>
        {this.displayInput()}
        {this.displayError()}
      </div>
    )
  }
}

export default FormInput

import React from 'react'
import PropTypes from 'prop-types'

class FormInput extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  displayError = () => <div>Error</div>

  displaySelect = () => <select />

  displayTextInput = () => <select />

  displayInput = () => {
    switch (this.props.type) {
      case 'text':
        return this.displayTextInput()
      case 'select':
        return this.displaySelect()
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

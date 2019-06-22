import React from 'react'

class FormInput extends React.Component {
  static propTypes = {
    status: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  }

  state = {
    hasAutoFill: false
  }
}

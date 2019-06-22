import React from 'react'

import PropTypes from 'prop-types'

const MrzResult = ({ mrzString }) => {
  return <div>{mrzString}</div>
}

MrzResult.propTypes = {
  mrzString: PropTypes.string
}

export default MrzResult

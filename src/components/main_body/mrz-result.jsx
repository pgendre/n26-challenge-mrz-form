import React from 'react'

import PropTypes from 'prop-types'

const displayLabel = mzrString =>
  mzrString === '' || <p>The correspondging MRZ of type TD3:</p>
const displayFirstLine = mrzString => <p>{mrzString.split('\n')[0]}</p>
const displaySecondLine = mrzString => <p>{mrzString.split('\n')[1]}</p>

const MrzResult = ({ mrzString }) => {
  return (
    <div>
      {displayLabel(mrzString)}
      {displayFirstLine(mrzString)}
      {displaySecondLine(mrzString)}
    </div>
  )
}

MrzResult.propTypes = {
  mrzString: PropTypes.string
}

export default MrzResult

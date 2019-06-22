// This file enables an API call simulation.
import { generateMrz } from 'mrz-generator'

const simulateMrzApiCall = data => {
  console.log('DATA ==========', data)
  console.log('DATA ==========', generateMrz)
}

export { simulateMrzApiCall }

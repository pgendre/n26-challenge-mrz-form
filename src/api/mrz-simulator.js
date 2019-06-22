// This file enables an API call simulation.
import { generateMrz } from 'mrz-generator'

const simulateMrzApiCall = payload => {
  return new Promise((rslv, rjct) => {
    setTimeout(() => {
      try {
        rslv({ mrz: generateMrz(payload) })
      } catch (e) {
        rjct(e)
      }
    }, 200)
  })
}

export { simulateMrzApiCall }

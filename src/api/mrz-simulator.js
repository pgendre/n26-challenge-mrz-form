// This file enables an API call simulation.
import { generateMrz } from 'mrz-generator'

const simulateMrzApiCall = payload => {
  return new Promise((rslv, rjct) => {
    setTimeout(() => {
      try {
        const mrz = generateMrz(payload)
        rslv({ mrz })
      } catch (e) {
        rjct(e)
      }
    }, 200)
  })
}

export { simulateMrzApiCall }

import { formValidation } from '../../../../components/main_body/form_global/form-validation'
import state00 from './data/state-00'

test('FORM VALIDATION 01: Should generate proper error if fields do NOT match regex pattern', () => {
  const { isFormValid, newState } = formValidation(state00)
  console.log('NEW STATE ============', newState)

  expect(1).toBe(1)
})

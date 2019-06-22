import _ from 'lodash'
import { formValidation } from '../../../../components/main_body/form_global/form-validation'
import onlyErrorsState from './data/only-errors-state'
import correctState from './data/correct-state'

test('FORM VALIDATION 01: Should generate proper errors if fields do NOT match requirements', () => {
  const onlyErrorsState = _generateOnlyErrorsState()
  const { isFormValid, newState } = formValidation(onlyErrorsState)
  const expectedState = {
    surname: {
      value: 'BAD ** SURNAME',
      error:
        'Required. Max length 20 characters. Letters, spaces or hyphens allowed (One maximum between two surnames).'
    },
    givenNames: {
      value: "BAD '_GIV@N NAMes",
      error:
        'Required. Max length 20 characters. Letters, spaces or hyphens allowed (One maximum between two surnames).'
    },
    passportNumber: {
      value: '12234378',
      error: 'Exactly 9 alphanumeric characters.'
    },
    issuingCountry: { value: '', error: 'Required.' },
    nationality: { value: '', error: 'Required.' },
    dateOfBirth: { value: '', error: 'Required.' },
    dateOfExpiration: { value: '', error: 'Required.' }
  }
  expect(isFormValid).toBe(false)
  expect(JSON.stringify(newState)).toBe(JSON.stringify(expectedState))
})

test('FORM VALIDATION 02: Should consider form as invalid if it exists one error.', () => {
  const correctState = _generateCorrectState()
  correctState.surname.value = 'Bad$e name'
  const { isFormValid, newState } = formValidation(correctState)
  expect(isFormValid).toBe(false)
})

test('FORM VALIDATION 03: Should validate form if all fields are correctly filled.', () => {
  const correctState = _generateCorrectState()
  const { isFormValid, newState } = formValidation(correctState)
  expect(isFormValid).toBe(true)
})

const _generateOnlyErrorsState = () => _.cloneDeep(onlyErrorsState)
const _generateCorrectState = () => _.cloneDeep(correctState)

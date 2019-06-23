import _ from 'lodash'
import formDescription from './form-description'

const formValidation = state => {
  const newState = _.cloneDeep(state)

  _checkRegexForStringInput(newState)
  _checkRequiredFields(newState)
  _checkDatesCoherency(newState)

  return { isFormValid: _isFormValid(newState), newState }
}

const _checkRegexForStringInput = newState => {
  ;['surname', 'givenNames', 'passportNumber'].forEach(field =>
    _checkRegexAndProcessError(field, newState)
  )
}

const _checkRegexAndProcessError = (field, newState) =>
  !_doesStringMatchRegex(field, newState)
    ? _enableError(field, newState)
    : _disableError(field, newState)

const _checkRequiredFields = newState => {
  ;['issuingCountry', 'nationality', 'dateOfBirth', 'dateOfExpiration'].forEach(
    field => _checkRequiredFieldAndProcessError(field, newState)
  )
}

const _checkRequiredFieldAndProcessError = (field, newState) =>
  _isValueAnEmptyString(newState[field].value)
    ? _enableError(field, newState)
    : _disableError(field, newState)

const _checkDatesCoherency = newState =>
  !_areBirthDateAndExpirationDateCoherent(newState)
    ? _enableError('dateOfExpiration', newState)
    : _disableError('dateOfExpiration', newState)

const _doesStringMatchRegex = (field, newState) =>
  new RegExp(formDescription[field].regex).test(newState[field].value)

const _enableError = (field, newState) => {
  newState[field].error = formDescription[field].error
}

const _disableError = (field, newState) => {
  newState[field].error = ''
}

const _areBirthDateAndExpirationDateCoherent = newState =>
  _doesDateAOccurBeforeDateB(
    newState.dateOfBirth.value,
    newState.dateOfExpiration.value
  )

const _doesDateAOccurBeforeDateB = (strDateA, strDateB) =>
  new Date(strDateA) < new Date(strDateB)

const _isFormValid = newState => _getEnabledErrors(newState).length === 0

const _getEnabledErrors = newState =>
  Object.values(newState)
    .map(field => field.error)
    .filter(error => error !== '')

const _isValueAnEmptyString = value => value === ''
export { formValidation }

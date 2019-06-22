import _ from 'lodash'
import formDescription from './form-description'

const formValidation = state => {
  const newState = _.cloneDeep(state)

  _validRegexForStringInput(newState)

  if (_.isUndefined(newState.issuingCountry.value))
    _enableError('issuingCountry', newState)

  if (_.isUndefined(newState.nationality.value))
    _enableError('nationality', newState)

  if (_.isUndefined(newState.dateOfBirth.value))
    _enableError('dateOfBirth', newState)

  if (_.isUndefined(newState.dateOfExpiration.value))
    _enableError('dateOfExpiration', newState)

  return newState
}

const _validRegexForStringInput = newState => {
  ;['surname', 'givenNames', 'passportNumber'].forEach(field => {
    _doesStringMatchRegex(field, newState) || _enableError(field, newState)
  })
}

const _doesStringMatchRegex = (field, newState) =>
  new RegExp(formDescription[field].regex).test(newState[field].value)

const _enableError = (field, newState) => {
  newState[field].error = formDescription[field].error
}

const _isFormValid = newState => _getEnabledErrors(newState).lenght > 0
const _getEnabledErrors = newState =>
  Object.values(newState)
    .map(field => field.error)
    .filter(error => error !== '')

export { formValidation }

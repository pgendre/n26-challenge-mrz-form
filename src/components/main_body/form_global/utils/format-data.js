const formatDataForApi = state => ({
  passport: {
    mrzType: 'td3',
    type: 'p',
    issuingCountry: state.issuingCountry.value,
    number: state.passportNumber.value,
    expirationDate: state.dateOfExpiration.value.toString(),
    optionalField1: '',
    optionalField2: ''
  },
  user: {
    surname: state.surname.value,
    givenNames: state.givenNames.value,
    nationality: state.nationality.value,
    dateOfBirth: state.dateOfBirth.value.toString(),
    sex: 'unspecified'
  }
})

export { formatDataForApi }

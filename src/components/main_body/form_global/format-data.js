const formatDataForApi = state => ({
  passport: {
    mrzType: 'td1',
    type: 'p',
    issuingCountry: state.issuingCountry.value,
    number: state.passportNumber.value,
    expirationDate: state.dateOfExpiration.value,
    optionalField1: '',
    optionalField2: ''
  },
  user: {
    surname: state.surname.value,
    givenNames: state.givenNames.value,
    nationality: state.nationality.value,
    dateOfBirth: state.dateOfBirth.value,
    sex: 'unspecified'
  }
})

export { formatDataForApi }

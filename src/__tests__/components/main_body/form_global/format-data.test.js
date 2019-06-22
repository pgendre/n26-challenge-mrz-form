import { formatDataForApi } from '../../../../components/main_body/form_global/format-data'

import correctState from './data/correct-state'

test('FORMAT DATA 01: Should format a correct payload for API.', () => {
  const payloadForApi = formatDataForApi(correctState)
  const expectedPayload = {
    passport: {
      mrzType: 'td1',
      type: 'p',
      issuingCountry: 'D',
      number: 'AB23C3789',
      expirationDate: '11 May 2021 00:00:00 GMT',
      optionalField1: '',
      optionalField2: ''
    },
    user: {
      surname: "Corr'ect-Surname",
      givenNames: "Correcte'given-name",
      nationality: 'D',
      dateOfBirth: '17 Oct 1986 00:12:00 GMT',
      sex: 'unspecified'
    }
  }

  expect(JSON.stringify(payloadForApi)).toBe(JSON.stringify(expectedPayload))
})

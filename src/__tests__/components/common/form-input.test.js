import { shallow } from 'enzyme'

import React from 'react'

import FormInput from '../../../components/common/form-input'

console.log('FORM INPUT ===========', FormInput)
test('FORM INPUT 01 : Should render component', () => {
  let props = {
    type: 'text',
    onChange: () => null
  }
  // type="select"
  // placeholder={formDescription.nationality.placeholder}
  // options={countries}
  // onChange={evt => this.handleChange(evt, 'nationality')}
  // value={this.state.nationality.value}
  // error={this.state.nationality.error}

  const wrapper = shallow(<FormInput {...props} />)
  expect(wrapper).toMatchSnapshot()
})

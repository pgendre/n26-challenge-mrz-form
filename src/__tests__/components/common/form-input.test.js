import React from 'react'

import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

import FormInput from '../../../components/common/form-input'

configure({ adapter: new Adapter() })

test('FORM INPUT 01 : Should render component', () => {
  let props = {
    type: 'select',
    options: [
      { label: 'label A', value: 'value A' },
      { label: 'label B', value: 'value B' }
    ],
    onChange: () => null
  }
  const wrapper = shallow(<FormInput {...props} />)
  expect(wrapper).toMatchSnapshot()
})

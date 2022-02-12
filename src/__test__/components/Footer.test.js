import React from 'react'
// mount sirve para montar los componentes de react
// sobre el dom completo y poder trabajar con este item en especifico
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer'


describe('<Footer />', () => {
	const footer = mount(<Footer />)

	test('Render del component Footer', () => {		
		// Si footer se monto
		expect(footer.length).toEqual(1)
	})

	test('Render del titulo', () => {
		expect(footer.find(".Footer-title").text()).toEqual("Platzi Store")
	})
})

describe('Footer Snapshot', () => {
	test('Comprobar la UI del comonente footer', () => {
		const footer = create(<Footer />)
		// Si no existe la snapshot, la crea
		expect(footer.toJSON()).toMatchSnapshot()

	})
})
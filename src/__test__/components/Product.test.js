import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import ProductMock from '../../__mocks__/ProductMock'
import Product from '../../components/Product'


describe('<Product />', () => {
	test('Render product', () => {
		const product = shallow(
			<ProviderMock>
				<Product />
			</ProviderMock>
		)

		expect(product.length).toEqual(1)
	})

	test('Comprobar el boton de comprar', () => {
		const handleAddToCart = jest.fn()
		const wrapper = mount(
			<ProviderMock>
				<Product 
					product={ProductMock}
					handleAddToCart={handleAddToCart}
				/>
			</ProviderMock>
		)

		wrapper.find('button').simulate('click')
		// Espera que handleAddToButton haya sido llamado una sola vez
		expect(handleAddToCart).toHaveBeenCalledTimes(1)
	})
})
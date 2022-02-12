import reducer from '../../../reducers'
import ProductMock from '../../../__mocks__/ProductMock'


describe('Reducers', () => {
	test('Retornar el estado inicial', () => {
		expect(reducer({}, '')).toEqual({})
	})

	test('ADD_TO_CART', () => {
		// initialState pasa a ser el store del reducer
		const initialState = {
			cart: []
		}
		const payload = ProductMock
		const action = {
			type: 'ADD_TO_CART',
			payload
		}
		
		const expected = {
			cart: [
				ProductMock
			],
		}

		expect(reducer(initialState, action)).toEqual(expected)
	})
})
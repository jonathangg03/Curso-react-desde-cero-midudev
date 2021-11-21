<<<<<<< HEAD
import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
  const { result } = setup()

  act(() => {
    result.current.updateKeyword('batman')
  })

  expect(result.current.keyword).toBe('batman')
})

test('Should use initial value', () => {
  const { result } = setup({
    initialKeyword: 'españa'
  })

  expect(result.current.keyword).toBe('españa')
})

test('should update correctly times when used twice', () => {
  const { result } = setup()

  act(() => {
    result.current.updateKeyword('b')
    result.current.updateKeyword('ba')
  })

  expect(result.current.keyword).toBe('ba')
  expect(result.current.times).toBe(2)
})
=======
import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
  const { result } = setup()

  act(() => {
    result.current.updateKeyword('batman')
  })

  expect(result.current.keyword).toBe('batman')
})

test('Should use initial value', () => {
  const { result } = setup({
    initialKeyword: 'españa'
  })

  expect(result.current.keyword).toBe('españa')
})

test('should update correctly times when used twice', () => {
  const { result } = setup()

  act(() => {
    result.current.updateKeyword('b')
    result.current.updateKeyword('ba')
  })

  expect(result.current.keyword).toBe('ba')
  expect(result.current.times).toBe(2)
})
>>>>>>> 105ad5fcdc4b09aabadcac4c3bd022873e6c9243

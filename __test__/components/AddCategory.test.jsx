import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/';

describe('Test component <AddCategory/>', () => {
  test('- Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={jest.fn()} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'One Punch' } })

    expect(input.value).toBe('One Punch')
  })

  test('- Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'One Punch'
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('- No debe de llamar el onNewCategory si el input está vació', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/';

describe('Test component <AddCategory/>', () => {
  test('- Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={jest.fn()} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'One Punch' } })

    expect(input.value).toBe('One Punch')
  })

  test('- No debe de llamar el onNewCategory si el input está vació', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)

    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display te right text order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display te right text order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display te right text order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display te right text order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display te right text order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    expect(statusText).toBeInTheDocument()

    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})

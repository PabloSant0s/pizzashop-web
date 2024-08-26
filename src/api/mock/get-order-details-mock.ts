import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  const { orderId } = params

  return HttpResponse.json({
    id: orderId,
    createdAt: new Date().toISOString(),
    status: 'pending',
    totalInCents: 20000,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+55 11 99999-9999',
    },
    orderItems: [
      {
        id: 'order-item-1',
        quantity: 2,
        priceInCents: 6000,
        product: {
          name: 'Pizza Pepperoni',
        },
      },
      {
        id: 'order-item-2',
        quantity: 1,
        priceInCents: 8000,
        product: {
          name: 'Pizza Margherita',
        },
      },
    ],
  })
})

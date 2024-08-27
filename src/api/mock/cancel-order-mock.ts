import { http, HttpResponse } from 'msw'

import { CancelOrderParams } from '../cancel-order'

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  '/orders/:orderId/cancel',
  ({ params }) => {
    const { orderId } = params

    if (orderId === 'error-order-id') {
      return HttpResponse.json({ status: 400 })
    }

    return HttpResponse.json({ status: 204 })
  },
)

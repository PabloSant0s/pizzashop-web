import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  const response: GetManagedRestaurantResponse = {
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    description: 'Pizzas deliciosas e saborosas',
    name: 'Pizzaria do Rock',
    createdAt: new Date(),
    updatedAt: null,
  }

  return HttpResponse.json(response)
})

import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    const response: GetProfileResponse = {
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(11) 99999-9999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    }

    return HttpResponse.json(response)
  },
)

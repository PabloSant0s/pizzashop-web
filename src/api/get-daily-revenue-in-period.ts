import { api } from '@/lib/axios'

interface GetDailyRevenueInPeriodParams {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  to,
  from,
}: GetDailyRevenueInPeriodParams = {}) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: { from, to },
    },
  )

  return response.data
}

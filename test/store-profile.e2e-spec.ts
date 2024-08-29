import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Pizzaria do Rock' }).click()
  await page.getByText('Perfil da loja').click()
  await page.getByLabel('Nome').fill('Pablo Shop')
  await page.getByLabel('Descrição').fill('Pablo Shop Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Cancelar' }).click()

  await expect(page.getByRole('button', { name: 'Pablo Shop' })).toBeVisible()
})

import { expect, test } from '@playwright/test'
test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do Estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(55)943564456')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()
})
test('sign up successfully and navigate to login page with email filled', async ({
  page,
}) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do Estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(55)943564456')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  await page.getByRole('button', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
  expect(page.getByLabel('Seu e-mail')).toHaveValue('johndoe@example.com')
})

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do Estabelecimento').fill('Invalid')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(55)943564456')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar o restaurante.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
})

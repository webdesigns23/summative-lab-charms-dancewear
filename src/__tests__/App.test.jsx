import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import App from '../App'

beforeEach(() => {
  global.fetch = vi.fn((url) => {
    if (url.includes('/products')) {
      return Promise.resolve({
        ok: true,
        json: async () => [
          {
            id: 1,
            name: "Jessie Skirt",
            image: "https://www.pngmart.com/files/12/Jessie-Toy-Story-PNG-Transparent-Image.png",
            description:"Jessie Skirt Description",
			category: "Skirt",
			price: 50,
			likes: 0,
          },
        ],
      })
    }
  })
  window.history.pushState({}, '', '/')
})

describe('Charms Dancewear App - Vitest Suite', () => {
  it('renders Home component at root ("/")', async () => {
    render(<App />)
    expect(await screen.findByText(/Learn More About Charms Dancewear/)).toBeInTheDocument()
  })

  it('navigates to About page when clicking About link', async () => {
    render(<App />)
    const navbars = screen.getAllByRole('navigation')
    const navbar = navbars[0]
  
    const aboutLink = within(navbar).getByRole('link', { name: /^About$/i })
    fireEvent.click(aboutLink)
  
    await waitFor(() => {
      expect(screen.getByText("Our Story")).toBeInTheDocument()
    })
  })

  it('displays products list at "/products"', async () => {
    window.history.pushState({}, '', '/products')
    render(<App />)
    expect(await screen.findByText(/Siena/)).toBeInTheDocument()
  })

   it('navigates to ProductForm on "/admin/new"', async () => {
    window.history.pushState({}, '', '/admin/new')
    render(<App />)
    expect(await screen.findByText(/Admin Portal/)).toBeInTheDocument()
  })

  })


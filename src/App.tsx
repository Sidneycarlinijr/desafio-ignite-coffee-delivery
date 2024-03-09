import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './context/CartContext'
import { Router } from './routes/Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import '../src/input.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>

      <GlobalStyles />
      <ToastContainer limit={5} />
    </ThemeProvider>
  )
}

export default App

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainRoutes from './routes/Main'
import { GlobalContextProvider } from './contexts/GlobalContext'

function App() {
  return (
    <GlobalContextProvider>
      <MainRoutes />
    </GlobalContextProvider>
  )
}

export default App

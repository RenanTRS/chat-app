import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <div className="bg-neutral-600 min-h-screen w-full">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App

import { ContextProvider } from './context/ContextProvider';
import Component from './Components/Component';

import './App.css'

function App() {
  return (
    <>
    <ContextProvider>
        <Component/>
    </ContextProvider>

    </>
  )
}

export default App

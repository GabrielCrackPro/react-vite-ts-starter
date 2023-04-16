import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import typesciptLogo from '@assets/typescript.svg'
import '@/App.css'

// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://www.typescriptlang.org' target='_blank'>
          <img src={typesciptLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite React and TypeScript logos to learn more
      </p>
    </div>
  )
}

export default App

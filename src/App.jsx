import './App.css'

export function App({component}) {

  return (
    <div>
      <header>
        <h1 className="title">🎬 Películas</h1>
      </header>
      {component}
    </div>
    
  )
}

import { useState } from 'react'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx
            sad
            asd
            asd</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Home;

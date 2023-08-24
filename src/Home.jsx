import { useContext, useState } from 'react'
import ThemeContext from './theme/ThemeContext';
import "./App.css";

function Home() {
  const [count, setCount] = useState(0);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Hello, world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={toggleTheme}>
          toggle theme {theme ? "TRUE" : "FALSE"}
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

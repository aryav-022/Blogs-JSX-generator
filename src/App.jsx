import { useState, useContext, createContext } from 'react';
import Dashboard from './Dashboard';
import Authentication from './Authentication';

const TokenContext = createContext();

export function useToken() {
  return useContext(TokenContext);
}

function App() {
  const [token, setToken] = useState(true);

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        {token ? <Dashboard /> : <Authentication />}
      </TokenContext.Provider>
    </div>
  )
}

export default App

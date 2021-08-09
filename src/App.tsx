// import React from 'react';
// import './App.css';
import { useLocation } from 'react-router-dom'

const App = () => {
  const search = useLocation().search
  const query = new URLSearchParams(search)
  const appName = query.get('app')
  if (typeof appName === "undefined") {
    return (
      <div>
        <h2> Usage page</h2>
      </div>
    )
  } else {
    return (
      <div>
        App name: {appName}
      </div>
    )
  }
}

export default App

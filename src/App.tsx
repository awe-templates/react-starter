import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { mainRouteList } from './app/routes/main.routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        {mainRouteList.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={React.createElement(
              route.layout,
              null,
              React.createElement(route.component)
            )}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import './App.css';

const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/categoris',
    sidebar: () => <div>categoris!</div>,
    main: () => <h2>Categoris</h2>
  },
  { path: '/locations',
    sidebar: () => <div>locations!</div>,
    main: () => <h2>Locations</h2>
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{ display: 'flex' }}>
            <div style={{
              padding: '10px',
              width: '40%',
              background: '#f0f0f0'
            }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categoris">Categoris</Link></li>
                <li><Link to="/locations">Locations</Link></li>
              </ul>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

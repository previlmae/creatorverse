import React from 'react';
import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import './App.css';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <ShowCreators />
    },
    {
      path: '/creator/:id',
      element: <ViewCreator />
    },
    {
      path: '/new',
      element: <AddCreator />
    },
    {
      path: '/edit/:id',
      element: <EditCreator />
    }
  ]);

  return (
    <div className="App">
      <main>
        {routes}
      </main>
      
      <footer>
        <div className="container">
          <p>
            Built with 💜 by <strong>The Tech Baddie</strong> | Powered by React + Supabase
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
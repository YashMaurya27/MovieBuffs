import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Panel from './components/Panel';
import { Suspense, lazy } from 'react';
import { Space, Spin } from 'antd';

function App() {

  const Panel = lazy(() => import('./components/Panel'));

  return (
    <div className="App">
      <Routes>
        {/* <Route 
          path='/'
          element={<Home />}
        /> */}
        <Route 
          path='/*'
          element={
            <Suspense fallback={
              <Space size="middle">
                <Spin size="large" />
              </Space>
            }>
              <Panel />
            </Suspense>
        }
        />
      </Routes>
    </div>
  );
}

export default App;

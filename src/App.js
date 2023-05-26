import './App.css';
import React, { Fragment} from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { router } from './router'
import DefaultComponent from './Component/DefaultComponent/DefaultComponent';

function App() {
  return (
    <div >
    <Router>
      <Routes>
        {router.map((route) => {
          const Page = route.page
          const Layout = route.isShowHeader ? DefaultComponent : Fragment

          return (
            <Route key={route.path} path={ route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          )
        })}
      </Routes>
    </Router>
  </div>
  );
}

export default App;

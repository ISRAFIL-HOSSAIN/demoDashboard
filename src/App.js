import React from 'react'
import {Route,Routes} from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Dashboard from './components/page/Dashboard';
const App = () => {
  return (
    <MainLayout>
    <Routes>
      
        <Route path="/" element={Dashboard} />
     
    </Routes>
    </MainLayout>
  )
}

export default App
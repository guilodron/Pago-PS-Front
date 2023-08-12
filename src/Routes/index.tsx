import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from '../pages/MainPage'
import DetailsPage from '../pages/DetailsPage'
import CreatePage from '../pages/CreatePage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={MainPage} />
      <Route path='/detail' Component={DetailsPage} />
      <Route path='/create' Component={CreatePage} />
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '@renderer/pages/home'
import { rarrRouteList } from './rarr-routes'
import React from 'react'

export default function SiteRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {rarrRouteList.map((route) => (
          <Route key={route.path} path={route.path} element={React.createElement(route.element)} />
        ))}
      </Route>
    </Routes>
  )
}

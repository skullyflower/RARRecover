import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from '@renderer/pages/home'
import ResentmentsForm from '@renderer/pages/resentments/resentmentForm'
import Stories from '@renderer/pages/literature/stories'
import TheSteps from '@renderer/pages/steps/the-steps'
import AcaTenthStep from '@renderer/pages/acaTenthStep/aca-tenth-step-page'
import SerenityCheckIn from '@renderer/pages/serenityCheckIn/serenityCheckInPage'
import Fears from '@renderer/pages/fears/fears'
import InventoryJoural from '@renderer/pages/journal'

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/inventory" element={<ResentmentsForm />} />
        <Route path="/aca-tenth-step" element={<AcaTenthStep />} />
        <Route path="/serenity" element={<SerenityCheckIn />} />
        <Route path="/fears" element={<Fears />} />
        <Route path="/literature" element={<Stories />} />
        <Route path="/steps" element={<TheSteps />} />
        <Route path="/log" element={<InventoryJoural />} />
      </Route>
    </Routes>
  )
}

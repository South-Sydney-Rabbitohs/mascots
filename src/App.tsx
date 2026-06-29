import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ScrollToTop from '@/components/shared/ScrollToTop'
import HomePage from '@/routes/HomePage'
import ReggieCharacterPage from '@/routes/ReggieCharacterPage'
import JackCharacterPage from '@/routes/JackCharacterPage'
import RubyCharacterPage from '@/routes/RubyCharacterPage'
import ScarlettCharacterPage from '@/routes/ScarlettCharacterPage'
import OliverCharacterPage from '@/routes/OliverCharacterPage'
import ColourInPage from '@/routes/ColourInPage'
import AnytimeMuffinsPage from '@/routes/recipes/AnytimeMuffinsPage'
import ChocSnackBallsPage from '@/routes/recipes/ChocSnackBallsPage'
import NoBakeOatBarsPage from '@/routes/recipes/NoBakeOatBarsPage'

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/reggie" element={<ReggieCharacterPage />} />
        <Route path="/characters/jack" element={<JackCharacterPage />} />
        <Route path="/characters/ruby" element={<RubyCharacterPage />} />
        <Route path="/characters/scarlett" element={<ScarlettCharacterPage />} />
        <Route path="/characters/oliver" element={<OliverCharacterPage />} />
        <Route path="/colouring" element={<ColourInPage />} />
        {/* Healthy Living recipes */}
        <Route path="/healthy-living/anytime-muffins" element={<AnytimeMuffinsPage />} />
        <Route path="/healthy-living/choc-snack-balls" element={<ChocSnackBallsPage />} />
        <Route path="/healthy-living/no-bake-oat-bars" element={<NoBakeOatBarsPage />} />
      </Routes>
    </LanguageProvider>
  )
}

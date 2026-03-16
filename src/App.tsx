import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Index from '@/pages/Index'
import Servicos from '@/pages/Servicos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="servicos" element={<Servicos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

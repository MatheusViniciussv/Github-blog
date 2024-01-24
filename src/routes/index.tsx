import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Post />} path='/post/:id' />
      </Routes>
    </BrowserRouter>
  )
}
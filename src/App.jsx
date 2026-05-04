import AppRoutes from './routes/AppRoutes'

import { Toaster } from "react-hot-toast"

import Admin from './pages/admin/Admin'
import Profile from './pages/profile/Profile'
import Services from './pages/profile/Services'

function App() {

  return (
    <>
      <Toaster />
      <AppRoutes />
      {/* <Admin /> */}
      {/* <Profile />  */}
      {/* <Services /> */}
    </>
  )
}

export default App

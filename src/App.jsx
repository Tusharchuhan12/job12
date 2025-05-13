
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Applyjob from './Pages/Applyjob'
import Application from './Pages/Application'
import Navbar from './Componets/Navbar'
import RecruiterLogin from './Componets/RecruiterLogin'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import Dashbox from './Pages/Dashbox'
import ManageJobs from './Pages/ManageJobs'
import ViewApplication from './Pages/ViewApplication'
import Addjob from './Pages/Addjob'
import 'quill/dist/quill.snow.css'

function App() {
 
  const { showRecuiterLogin }=useContext(AppContext);
  return (
    <div>
      { showRecuiterLogin && <RecruiterLogin/>}
         <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/applyjob/:id' element={<Applyjob></Applyjob>}/>
      <Route path='/applications' element={<Application></Application>}/>
      <Route path='/dashborad' element={<Dashbox></Dashbox>}>
          <Route path='add-job' element={<Addjob/>} />     
          <Route path='manage-jobs' element={<ManageJobs/>} />     
          <Route path='view-applications' element={<ViewApplication />} />     
      </Route>
      </Routes> 
      
    </div>
  )
}

export default App

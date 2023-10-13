import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'
import App from './App'
import Navbar from './components/Navbar'
import Components from './Pages/Components'
import JSX from './Pages/JSX'
import Props from './Pages/Props'
import Memo from './Pages/Memos'
import Refs from './Pages/Refs'
import Portals from './Pages/Portals'
import HOC from './Pages/HOC'
import ErrorBoundary from './Pages/ErrorBoundary'
import Renderprops from './Pages/RenderProps'
import Context from './Pages/Context'
const AppRouter = () =>{
    return(
        <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/components' element={<Components/>} />
        <Route path='/jsx' element={<JSX/>} />
        <Route path='/props' element={<Props/>} />
        <Route path='/memo' element={<Memo/>}/>
        <Route path='/refs' element={<Refs/>}/>
        <Route path='/portals' element={<Portals/>}/>
        <Route path='/hoc' element={<HOC/>}/>
        <Route path='/error-boundary' element={<ErrorBoundary/>}/>
        <Route path='/render-props' element={<Renderprops/>}/>
        <Route path='/context' element={<Context/>}/>
        </Routes>
        </Router>
    )
}

export default AppRouter
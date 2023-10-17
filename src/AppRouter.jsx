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
import Http from './Pages/Http'
import Hooks from './Pages/Hooks'
import UseStates from './Pages/Hooks/UseStates'
import UseEffects from './Pages/Hooks/UseEffects'
import UseContext from './Pages/Hooks/UseContext'
import UseReducers from './Pages/Hooks/UseReducers'
import Test from './Pages/Test'
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
        <Route path='/http' element={<Http/>}/>
        <Route path='/hooks' >
            <Route path='' element={<Hooks/>} />
            <Route path='usestate' element={<UseStates/>} />
            <Route path='useeffect' element={<UseEffects/>} />
            <Route path='usecontext' element={<UseContext/>} />
            <Route path='usereducer' element={<UseReducers/>} />
        </Route>
        <Route path='/test' element={<Test/>} />
        </Routes>
        </Router>
    )
}

export default AppRouter
import React,{useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

//import Loading from './components/Loading'
const App=()=> {
  const  apiKey='a5c65878d0f54607a452d2b7ef2d9914'
  const [progress,setProgress] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <LoadingBar color={'red'} progress={progress}
    onLoaderFinished={() => setProgress(100)} />
      <Routes>
      <Route exact path='/'               element={<News setProgress={setProgress}  apiKey={ apiKey} key="general"       country="us" category="general"/>      }/>
      <Route exact path='/business'       element={<News setProgress={setProgress}  apiKey={ apiKey} key="business"      country="us" category="business"/>     }/> 
      <Route exact path='/entertainment'  element={<News setProgress={setProgress}  apiKey={ apiKey} key="entertainment" country="us" category="entertainment"/>}/>
      <Route exact path='/general'        element={<News setProgress={setProgress}  apiKey={ apiKey} key="general"       country="us" category="general"/>      }/> 
      <Route exact path='/health'         element={<News setProgress={setProgress}  apiKey={ apiKey} key="health"        country="us" category="health"/>       }/>
      <Route exact path='/science'        element={<News setProgress={setProgress}  apiKey={ apiKey} key="science"       country="us" category="science"/>      }/>
      <Route exact path='/sports'         element={<News setProgress={setProgress}  apiKey={ apiKey} key="sports"        country="us" category="sports"/>       }/>
      <Route exact path='/technology'     element={<News setProgress={setProgress}  apiKey={ apiKey} key="technology"    country="us" category="technology"/>   }/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
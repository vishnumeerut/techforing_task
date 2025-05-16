
import { useState } from 'react'
import AllRoutes from './All_Routes/AllRoutes'
import './App.css'
import Header from './component/Header/Header'
import UserContext from './context/user'
function App() {

    const [usertoken, setUserToken] = useState({token:""})
    return (
      <div>
        <UserContext.Provider value={{usertoken, setUserToken}}>
              <Header />
        <AllRoutes />
        </UserContext.Provider>

      </div>
    )
}

export default App

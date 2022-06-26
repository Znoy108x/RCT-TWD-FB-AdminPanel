import Home from "./pages/Home"
import Login from "./pages/Login"
import New from "./pages/New"
import Single from "./pages/Single"
import List from "./pages/List"
import {BrowserRouter as Router , Routes , Route , Navigate} from "react-router-dom"
import {AuthContext} from "./context/AuthContext"
import {useContext} from "react"

function App() {
  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to="/login"/>
  }
  return (
    <Router>
      <Routes>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/" 
        element={
        <RequireAuth>
          <Home/>
          </RequireAuth>
          }/>
        <Route path ="users">
          <Route index element={
          <RequireAuth>
          <List/>
          </RequireAuth>
          }/>
          <Route path=":userId" element={
          <RequireAuth>
          <Single/>
          </RequireAuth>
          }/>
          <Route path="new" element={
          <RequireAuth>
          <New title={"New User"}/>
          </RequireAuth>
          }/>
        </Route>
        <Route path ="products">
          <Route index element={
          <RequireAuth>
          <List/>
          </RequireAuth>
          }/>
          <Route path=":productId" element={
          <RequireAuth>
          <Single/>
          </RequireAuth>
          }/>
          <Route path="new" element={
          <RequireAuth>
          <New title={"New Product"}/>
          </RequireAuth>
          }/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
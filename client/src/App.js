import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { check } from './http/userAPI';
import { Context } from './index';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {  
      if (!data) {
        user.setUser({})
        user.setIsAuth(false)
      } else {        
        user.setUser(data)
        user.setIsAuth(true)
      }
    })
    .catch((error) => {
        console.log(error.response?.data.message ?? 'Authentication check failed') 
      }
    )
    .finally(() => setLoading(false))
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;

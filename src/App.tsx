import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter basename='/worthyd-presentations/'>
        <AppRoutes />
      </BrowserRouter>
    </>

  )
}

export default App

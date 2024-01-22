//import './App.css'
import "@mantine/core/styles.css";


import { AppRouter } from './routes/routes'
import { AuthWrapper } from './wrappers/AuthWrapper'
import { UserContextProvider } from "./context/UserContext";
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <AuthWrapper>
      <UserContextProvider>
        <MantineProvider>
          <AppRouter/>
        </MantineProvider>
      </UserContextProvider>
    </AuthWrapper>
  )
}

export default App

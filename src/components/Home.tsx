import React, {useContext} from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { Navigate, Outlet, Link } from "react-router-dom"
import { UserContext } from "../context/UserContext";
import { AppShell, NavLink, Button, Modal } from "@mantine/core";
import classes from './Home.module.css'
import { UserAvatar } from "./UserAvatar";
import { useDisclosure } from "@mantine/hooks";
import { Profile } from "./profile/Profile";

const navigation = [
  {
    path: '/image-commands',
    label: 'Image Commands'
  },
  {
    path: '/text-commands',
    label: 'Text Commands'
  }
]

export const Home : React.FC = () => {

  const { token, loginInProgress, logOut } = useContext(AuthContext)

  const { logoutUser } = useContext(UserContext)

  const [opened, { open, close }] = useDisclosure(false);

  if (loginInProgress) {
    return null
  }

  if (!token) {
    return (
      <Navigate to={'/login'}/>
    )
  }

  const logoutFunction = () => {
    logOut()
    logoutUser()
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
          <div onClick={open}>
            <UserAvatar />
          </div>

          <Button onClick={logoutFunction}>
            Logout
          </Button>

      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navigation.map((item) => (
          <NavLink component={Link} to={item.path} label={item.label} variant="subtle"/>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>

      <Modal opened={opened} onClose={close} title="Profile">
        <Profile/>
      </Modal>
    </AppShell>
  );
}


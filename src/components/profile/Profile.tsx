import useAxios from "axios-hooks"
import { useContext } from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { Roles } from "./Roles"
import { Card, Text, Group } from "@mantine/core"
import classes from './Profile.module.css';
import { UserAvatar } from "../UserAvatar"
import { UserContext } from "../../context/UserContext"

const COYOTES_DISCORD_ID = "360903377216864267"

export const Profile: React.FC = ({ }) => {

    const { token } = useContext(AuthContext)

    const { user } = useContext(UserContext)

    const [{ data, loading, error }] = useAxios({
        url: 'https://discord.com/api/users/@me/guilds/' + COYOTES_DISCORD_ID + '/member',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    if (loading) {
        return <>Loading</>
    }

    if (error) {
        return <>Error</>
    }

    return (
        <Card>
            <Card.Section
                h={140}
                style={{
                    backgroundColor: 'blue'
                }}
            />
            <UserAvatar
                size={80}
                radius={80}
                mx="auto"
                mt={-30}
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={500} mt="sm">
                {user.global_name}
            </Text>
            <Group mt="md" justify="center" gap={30}>
                <Roles roles={data.roles}/>
            </Group>
        </Card>
    )
}
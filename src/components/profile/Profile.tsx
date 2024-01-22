import useAxios from "axios-hooks"
import { useContext } from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { Roles } from "./Roles"
import { Card, Grid, Text, Group, Button } from "@mantine/core"
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
        <Card withBorder padding="xl" radius="md" className={classes.card}>
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
            <Button fullWidth radius="md" mt="xl" size="md" variant="default">
                Follow
            </Button>
        </Card>
    )

    return (
        <Grid style={{ display: 'flex' }}>
            <Grid.Col span={12}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Roles roles={data.roles} />
                </Card>
            </Grid.Col>
        </Grid>


    )
}
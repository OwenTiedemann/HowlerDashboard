import { Avatar, AvatarProps } from "@mantine/core"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export const UserAvatar: React.FC<AvatarProps> = (props) => {

    const { userId, user } = useContext(UserContext)

    return (
        <Avatar
            src={`https://cdn.discordapp.com/avatars/${userId}/${user.avatar}.png`}
            {...props}
        />
    )
}
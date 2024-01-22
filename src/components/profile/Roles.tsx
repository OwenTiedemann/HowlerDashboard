import { Badge } from "@mantine/core"
import useAxios from "axios-hooks"
import hexToRgba from 'hex-to-rgba';

type RolesProps = {
    roles: Array<string>
}

export const Roles : React.FC<RolesProps> = ({roles}) => {

    const [{ data, loading, error}] = useAxios({
        url: 'http://127.0.0.1:5000/utils/roles',
        params: {
            roles: roles
        }
    })

    if (loading) {
        return <>Loading...</>
    }

    if (error) {
        return <>Error</>
    }


    return (
        <>
            {data.map((role: any) => {

                if (role.color === 0) {
                    role.color = 808080
                }

                return (
                    <Badge color={hexToRgba(String(role.color), 1)}>{role.name}</Badge>
                )
            })}
        </>
    )
}
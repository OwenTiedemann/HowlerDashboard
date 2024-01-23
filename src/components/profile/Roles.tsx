import { Badge } from "@mantine/core"
import useAxios from "axios-hooks"
type RolesProps = {
    roles: Array<string>
}

export const Roles : React.FC<RolesProps> = ({roles}) => {

    const [{ data, loading, error}] = useAxios({
        url: import.meta.env.VITE_HOWLER_API_URL + '/api/utils/roles',
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
                return (
                    <Badge size="xs" color={role.color}>{role.name}</Badge>
                )
            })}
        </>
    )
}
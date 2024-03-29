import React from "react"
import useAxios from "axios-hooks"
import { Grid } from "@mantine/core";
import { TextCommand } from "./TextCommand";


export const TextCommands : React.FC = () => {
    
    const [{ data, loading, error}] = useAxios({
        url: import.meta.env.VITE_HOWLER_API_URL + '/api/text_commands'
    })

    if (loading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <>{JSON.stringify(error)}</>
    }

    return (
        <Grid>
            {data.map((command: any) => (
                <TextCommand command={{name: command.name, text_response: command.text_response}}/>
            ))}
        </Grid>
    )
}
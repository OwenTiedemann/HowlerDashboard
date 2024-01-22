import React from "react"
import useAxios from "axios-hooks"
import { ImageCommand } from "./ImageCommand"
import { Grid } from "@mantine/core";


export const ImageCommands : React.FC = () => {
    
    const [{ data, loading, error}] = useAxios({
        url: import.meta.env.VITE_HOWLER_API_URL + '/image_commands'
    })

    if (loading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <>{JSON.stringify(error)}</>
    }

    return (
        <Grid>{data.map((command: any) => (
            <ImageCommand command={command}/>
        ))}</Grid>
    )
}
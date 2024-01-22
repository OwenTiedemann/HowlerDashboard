import React from "react"
import useAxios from "axios-hooks"
import { ImageCommand } from "./ImageCommand"
import { Grid } from "@mantine/core";


export const ImageCommands : React.FC = () => {
    
    const [{ data, loading, error}] = useAxios({
        url: 'http://127.0.0.1:5000/image_commands'
    })

    if (loading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <>{error}</>
    }

    return (
        <Grid>{data.map((command: any) => (
            <ImageCommand command={command}/>
        ))}</Grid>
    )
}
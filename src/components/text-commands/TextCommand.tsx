import { Grid, Card, Group, Badge, Text, Button, Box, Container, Code, Center, CopyButton } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";
import { CommandCopyButton } from "../CommandCopyButton";


type TTextCommand = {
    name: string;
    text_response: string;
}

type TextCommandProps = {
    command: TTextCommand
}


export const TextCommand: React.FC<TextCommandProps> = ({ command }) => {

    return (
        <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Center h={100}>
                        <Code block w={'100%'} h={'100%'}>

                            {`${command.text_response}`}
                        </Code>
                    </Center>
                </Card.Section>

                <Group justify="space-between" mt={'md'} mb={'xs'}>
                    <Group>
                        <CommandCopyButton name={command.name}/>

                        <Text fw={500}>{command.name}</Text>

                    </Group>
                    <Badge color="blue">Text</Badge>
                </Group>
            </Card>
        </Grid.Col>

    )
}
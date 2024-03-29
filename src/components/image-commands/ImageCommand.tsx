import { Badge, Card, Grid, Group, Image, Text } from "@mantine/core"
import { CommandCopyButton } from "../CommandCopyButton";

type TImageCommand = {
    name: string;
    image_url: string;
}

type ImageCommandProps = {
    command: TImageCommand
}

export const ImageCommand : React.FC<ImageCommandProps> = ({command}) => {

    return (
        <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={command.image_url}
                        alt={command.name}
                        height={150}
                    />
                </Card.Section>

                <Group justify="space-between" mt={'md'} mb={'xs'}>
                    <Group>
                        <CommandCopyButton name={command.name}/>
                        <Text fw={500}>{command.name}</Text>

                    </Group>
                    <Badge color="blue">Image</Badge>
                </Group>
            </Card>
        </Grid.Col>

    )
}
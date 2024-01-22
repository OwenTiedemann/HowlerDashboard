import { CopyButton, Button } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";

type CommandCopyButtonProps = {
    name: string;
}

export const CommandCopyButton: React.FC<CommandCopyButtonProps> = ({ name }) => {
    return (
        <CopyButton value={`howler ${name}`}>
            {({ copy }) => (
                <Button size='compact-sm' color={'white'} onClick={copy}>
                    <IconCopy
                        color='gray'
                        size={20}
                    />
                </Button>
            )}
        </CopyButton>
    )
}
import { Button, Flex, NumberInput, Stack, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

interface openSettingsModalProps {
  counter: number;
}

export default function openSettingsModal({ counter }: openSettingsModalProps) {
  modals.open({
    title: <Title order={3}>Counter Settings</Title>,
    children: (
      <Stack>
        <Flex align="center" justify="space-around">
          <Text>Set Count </Text>
          <NumberInput min={0} defaultValue={counter} />
        </Flex>
        <Button
          color="black"
          onClick={() => {
            modals.closeAll();
          }}
        >
          Update Settings
        </Button>
      </Stack>
    ),
    centered: true,
  });
}

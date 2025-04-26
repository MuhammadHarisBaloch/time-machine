import { Stack, Flex, NumberInput, Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";

interface UpdateCounterModalProps {
  counter: number;
  onUpdateCounter: (newCounter: number) => void;
}

export default function UpdateCounterModal({
  counter,
  onUpdateCounter,
}: UpdateCounterModalProps) {
  const [newCounter, setNewCounter] = useState<string | number>(counter);

  return (
    <Stack>
      <Flex align="center" justify="space-around">
        <Text>Set Count </Text>
        <NumberInput
          onChange={setNewCounter}
          min={0}
          defaultValue={counter}
          value={newCounter}
        />
      </Flex>
      <Button
        color="black"
        onClick={() => {
          onUpdateCounter(+newCounter);
          modals.closeAll();
        }}
      >
        Update Settings
      </Button>
    </Stack>
  );
}

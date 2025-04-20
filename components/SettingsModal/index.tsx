import { Button, Flex, NumberInput, Stack, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";
import UpdateCounterModal from "../Counter/UpdateCounterModal";

interface openSettingsModalProps {
  counter: number;
  onUpdateCounter: (newCounter: number) => void;
}

export default function openSettingsModal({
  counter,
  onUpdateCounter,
}: openSettingsModalProps) {
  modals.open({
    title: <Title order={3}>Counter Settings</Title>,
    children: (
      <UpdateCounterModal counter={counter} onUpdateCounter={onUpdateCounter} />
      // <Stack>
      //   <Flex align="center" justify="space-around">
      //     <Text>Set Count </Text>
      //     <NumberInput
      //       value={newCounter}
      //       onChange={setNewCounter}
      //       min={0}
      //       defaultValue={counter}
      //     />
      //   </Flex>
      //   <Button
      //     color="black"
      //     onClick={() => {
      //       onUpdateCounter(+newCounter);
      //       modals.closeAll();
      //     }}
      //   >
      //     Update Settings
      //   </Button>
      // </Stack>
    ),
    centered: true,
  });
}

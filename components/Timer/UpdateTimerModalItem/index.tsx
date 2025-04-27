import { Button, Flex, NumberInput, Stack } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";

interface UpdateTimerModalItemProps {
  onUpdateTimer: (newTimer: number) => void;
}
export default function UpdateTimerModalItem({
  onUpdateTimer,
}: UpdateTimerModalItemProps) {
  const [hours, setHours] = useState<string | number>("0");
  const [minutes, setMinutes] = useState<string | number>("0");
  const [seconds, setSeconds] = useState<string | number>("0");

  return (
    <Stack>
      <Flex gap="lg">
        <NumberInput value={hours} onChange={setHours} label="Hours" min={0} />
        <NumberInput
          value={minutes}
          onChange={setMinutes}
          label="Minutes"
          min={0}
        />
        <NumberInput
          value={seconds}
          onChange={setSeconds}
          label="Seconds"
          min={0}
        />
      </Flex>
      <Button
        bg="black"
        onClick={() => {
          modals.closeAll();
          const timer = +hours * 3600 + +minutes * 60 + +seconds;
          console.log(timer);
          onUpdateTimer(timer);
        }}
      >
        Update Timer
      </Button>
    </Stack>
  );
}

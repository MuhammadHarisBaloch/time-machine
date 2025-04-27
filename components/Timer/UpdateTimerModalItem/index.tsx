import { Stack, Flex, NumberInput, Button } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";

export default function UpdateTimerModalItem() {
  const [hours, setHours] = useState<string | number>("");
  const [minutes, setMinutes] = useState<string | number>("");
  const [seconds, setSeconds] = useState<string | number>("");

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
        }}
      >
        Update Timer
      </Button>
    </Stack>
  );
}

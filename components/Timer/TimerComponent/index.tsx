import { Group } from "@mantine/core";
import TimerDigit from "../TimerDigit";

interface UpdateTimerProps {
  timer: number;
}

export default function TimerComponent({ timer }: UpdateTimerProps) {
  return (
    <Group align="center" justify="space-between">
      <TimerDigit timer={timer} unit="Hours" />
      <TimerDigit timer={timer} unit="Minutes" />
      <TimerDigit timer={timer} unit="Seconds" />
    </Group>
  );
}

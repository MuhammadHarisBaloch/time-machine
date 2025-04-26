import { Stack, Title, Text } from "@mantine/core";
function formatTimer(timer: number) {
  return Math.trunc(timer).toString().padStart(2, "0");
}

function calculateUnit(timer: number, unit: string) {
  const hour = timer / 3600;
  const minute = (timer % 3600) / 60;
  const second = (timer % 3600) % 60;
  console.log(minute);

  if (unit == "Hours") {
    return formatTimer(hour);
  }
  if (unit == "Minutes") {
    return formatTimer(minute);
  }
  if (unit == "Seconds") {
    return formatTimer(second);
  }
}

interface TimerDigitProps {
  unit: string;
  timer: number;
}

export default function TimerDigit({ timer, unit }: TimerDigitProps) {
  return (
    <>
      <Stack gap={0} align="center">
        <Title order={5} fz="17rem" fw={300}>
          {calculateUnit(timer, unit)}
        </Title>
        <Text>{unit}</Text>
      </Stack>
      <Title fz="10rem">:</Title>
    </>
  );
}

import { Stack, Text, Title } from "@mantine/core";
function formatTimer(timer: number) {
  return Math.trunc(timer).toString().padStart(2, "0");
}

function calculateUnit(timer: number, unit: string) {
  if (unit == "Hours") {
    const hour = timer / 3600;
    return formatTimer(hour);
  }

  if (unit == "Minutes") {
    const minute = (timer % 3600) / 60;
    return formatTimer(minute);
  }

  const second = (timer % 3600) % 60;
  return formatTimer(second);
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
      {unit !== "Seconds" && <Title fz="10rem">:</Title>}
    </>
  );
}

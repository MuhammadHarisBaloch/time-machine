import { Button, Stack } from "@mantine/core";
export default function Home() {
  return (
    <Stack h="100vh" align="center" justify="center">
      <Button w="200px">Counter</Button>
      <Button w="200px">Stop</Button>
      <Button w="200px">Lap</Button>
    </Stack>
  );
}

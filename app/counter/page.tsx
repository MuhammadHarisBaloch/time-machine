import { Flex, Stack, Title } from "@mantine/core";
import CounterControls from "../../components/Counter/Controls";
import RoundedButton from "../../components/Counter/RoundedButton";

export default function Counter() {
  return (
    <Stack>
      <CounterControls />
      <Flex align="center" justify="space-between" p="lg">
        <RoundedButton text="-" />
        <Title order={3} fz="28rem" fw={300}>
          0
        </Title>
        <RoundedButton text="+" />
      </Flex>
    </Stack>
  );
}

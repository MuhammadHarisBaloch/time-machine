"use client";
import { Flex, Stack, Title } from "@mantine/core";
import CounterControls from "../../components/Counter/Controls";
import RoundedButton from "../../components/Counter/RoundedButton";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <Stack>
      <CounterControls />
      <Flex align="center" justify="space-between" p="lg">
        <RoundedButton
          text="-"
          onClick={() => {
            if (counter != 0) {
              setCounter(counter - 1);
            }
          }}
        />
        <Title order={3} fz="28rem" fw={300}>
          {counter}
        </Title>
        <RoundedButton
          text="+"
          onClick={() => {
            setCounter(counter + 1);
          }}
        />
      </Flex>
    </Stack>
  );
}

"use client";
import { Flex, Overlay, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import CounterControls from "../../components/Counter/Controls";
import RoundedButton from "../../components/Counter/RoundedButton";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [openOverlay, setOpenOverlay] = useState(true);

  return (
    <Stack>
      <CounterControls
        onReloadClick={() => {
          setCounter(0);
        }}
      />
      <Flex align="center" justify="space-between" p="lg">
        <RoundedButton
          text="-"
          onClick={() => {
            if (counter == 0) return;
            setCounter(counter - 1);
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
      {openOverlay ? (
        <Overlay
          color="#000"
          backgroundOpacity={0.85}
          onClick={() => {
            setOpenOverlay(false);
          }}
        >
          <Stack>
            <Title order={2}>Simple Counter</Title>
            <Text></Text>
          </Stack>
        </Overlay>
      ) : (
        <></>
      )}
    </Stack>
  );
}

"use client";

import { Flex, Stack, Title } from "@mantine/core";
import { useState } from "react";
import CounterControls from "../../components/Counter/Controls";
import InfoOverlay from "../../components/Counter/InfoOverlay";
import RoundedButton from "../../components/Counter/RoundedButton";
import openSettingsModal from "../../components/Counter/SettingsModal";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <Stack h="100vh">
      <CounterControls
        onInfoClick={() => {
          setOpenOverlay(true);
        }}
        onReloadClick={() => {
          setCounter(0);
        }}
        onSettingClick={() => {
          openSettingsModal({
            counter,
            onUpdateCounter: (newCounter) => {
              setCounter(newCounter);
            },
          });
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
      <InfoOverlay
        opened={openOverlay}
        onClose={() => {
          setOpenOverlay(false);
        }}
      />
    </Stack>
  );
}

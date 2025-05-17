"use client";
import { Box, Button, Flex, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
  IconRestore,
} from "@tabler/icons-react";

export default function TimerInput() {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!isTimerStarted) return;
    const interval = setInterval(() => {
      setTimer((prevValue) => {
        return prevValue + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerStarted]);
  return (
    <>
      <Stack py="xl" align="center" w="100vw" h="100vh" justify="space-between">
        <Box></Box>
        <Flex align="center" justify="center">
          <Text fz="10rem">{timer}</Text>
          {/* <Text fz="6rem">:</Text>
          <Text fz="10rem">0</Text> */}
        </Flex>
        <Flex gap="lg">
          <Button
            leftSection={
              isTimerStarted ? (
                <IconPlayerPauseFilled size={14} />
              ) : (
                <IconPlayerPlayFilled size={12} />
              )
            }
            color="black"
            w="100px"
            onClick={() => {
              setIsTimerStarted(!isTimerStarted);
            }}
          >
            {isTimerStarted ? "Pause" : "Start"}
          </Button>
          <Button
            leftSection={<IconRestore size={14} />}
            onClick={() => {
              setTimer(0);
              setIsTimerStarted(false);
            }}
            color="black"
            w="100px"
          >
            Reset
          </Button>
        </Flex>
      </Stack>
    </>
  );
}

"use client";
import { Box, Button, Flex, Stack, Text } from "@mantine/core";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconRestore,
} from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";

export default function stopwatch() {
  const [isTimerStarted, setIsTimerStarted] = useState(false); // controls time start and stop
  const [timer, setTimer] = useState(0); // contains numberOfSeconds but x2
  const [miliSeconds, setMiliSeconds] = useState(0); // contains miliSeconds in 60ms

  //starts the timer adds seconds to it.
  useEffect(() => {
    if (!isTimerStarted) return;
    const interval = setInterval(() => {
      setMiliSeconds((prevValue) => {
        if (prevValue === 60) {
          setTimer((prevValue) => prevValue + 1);
          return 0;
        }
        return prevValue + 1;
      });
    }, 16.67);
    return () => clearInterval(interval);
  }, [isTimerStarted]);

  //calculate hours
  const hours = useMemo(() => {
    return Math.trunc(timer / 7200);
  }, [timer]);

  //calculate minutes
  const minutes = useMemo(() => {
    return Math.trunc(timer / 120) % 60;
  }, [timer]);

  //calculate seconds
  const seconds = useMemo(() => {
    return Math.trunc((timer / 2) % 3600) % 60;
  }, [timer]);

  //to formatTimer
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <Stack py="xl" align="center" w="100vw" h="100vh" justify="space-between">
      <Box />
      <Flex align="flex-end">
        {hours > 0 && <Text fz="10rem">{formatNumber(hours)}:</Text>}
        {(hours > 0 || minutes > 0) && (
          <Text fz="10rem">{formatNumber(minutes)}:</Text>
        )}
        <Text fz="10rem">{formatNumber(seconds)}</Text>
        <Text fz="2rem" mb="2rem" w={40}>
          {miliSeconds}
        </Text>
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
            setMiliSeconds(0);
            setIsTimerStarted(false);
          }}
          color="black"
          w="100px"
        >
          Reset
        </Button>
      </Flex>
    </Stack>
  );
}

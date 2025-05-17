"use client";
import {
  AppShell,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconRestore,
  IconClipboardFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function stopwatch() {
  const [isTimerStarted, setIsTimerStarted] = useState(false); // controls time start and stop
  const [timer, setTimer] = useState(7500); // contains numberOfSeconds but x2
  const [miliSeconds, setMiliSeconds] = useState(0); // contains miliSeconds in 60ms
  const [laps, setLaps] = useState<string[]>([]);

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
    }, 10);
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
    <>
      <Grid w="100%" p="xl">
        <Grid.Col span={4}>
          <Box component={Link} href="/">
            <IconArrowLeft className="hover-expand" color="black" size={30} />
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack
            py="xl"
            align="center"
            w="100%"
            h="100%"
            justify="space-between"
          >
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
                  setLaps([]);
                }}
                color="black"
                w="100px"
              >
                Reset
              </Button>
              <Button
                onClick={() => {
                  setLaps([
                    ...laps,
                    `${formatNumber(hours)} : ${formatNumber(
                      minutes
                    )} : ${formatNumber(seconds)}`,
                  ]);
                  console.log(laps);
                }}
                leftSection={<IconClipboardFilled size={14} />}
                color="black"
                w="100px"
              >
                Lap
              </Button>
            </Flex>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack align="flex-end" justify="flex-start">
            <Center>
              <Stack align="center">
                <Title order={1}>Laps</Title>
                {laps.map((lap, index) => {
                  return (
                    <Flex key={index} gap="8rem">
                      <Text fz="md" fw="bold">
                        Lap {index + 1}
                      </Text>
                      <Text fz="lg" fw="bold">
                        {lap}
                      </Text>
                    </Flex>
                  );
                })}
              </Stack>
            </Center>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
}

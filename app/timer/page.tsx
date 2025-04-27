"use client";
import openUpdateTimerModal from "@/components/Timer/openUpdateTimerModal";
import TimerComponent from "@/components/Timer/TimerComponent";
import { Box, Button, Flex, Stack, UnstyledButton } from "@mantine/core";
import { IconArrowLeft, IconReload } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RoundedButton from "../../components/Counter/RoundedButton";

const defaultTimerChangeValue = 600;
export default function TimerPage() {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [timer, setTimer] = useState(defaultTimerChangeValue);

  useEffect(() => {
    if (!isTimerStarted) return;
    const interval = setInterval(() => {
      setTimer((prevValue) => {
        if (prevValue <= 0) {
          clearInterval(interval);
          setIsTimerStarted(false);
          return 0;
        }
        return prevValue - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerStarted]);

  return (
    <Stack h="100vh">
      <Flex align="center" justify="space-between">
        <Box component={Link} href="/" m="lg">
          <IconArrowLeft className="hover-expand" color="black" size={30} />
        </Box>
        <UnstyledButton
          onClick={() => {
            openUpdateTimerModal((newTimer) => {
              setIsTimerStarted(false);
              setTimer(newTimer);
            });
          }}
          fz="1.5rem"
        >
          Click on timer to edit!
        </UnstyledButton>
        <Box m="lg">
          <IconReload
            onClick={() => {
              setTimer(defaultTimerChangeValue);
              setIsTimerStarted(false);
            }}
            className="hover-expand pointer"
            size={30}
          />
        </Box>
      </Flex>

      <Flex align="center" justify="space-between" p="lg">
        <Button
          className="hover-expand pointer"
          variant="outline"
          color="black"
          fz="lg"
          size="lg"
          radius="xl"
          disabled={timer === 0}
          onClick={() => {
            setIsTimerStarted((prevValue) => !prevValue);
          }}
        >
          {isTimerStarted ? "Stop" : "Start"}
        </Button>
        <TimerComponent timer={timer} />
        <Stack>
          <RoundedButton
            text="+"
            onClick={() => {
              setTimer((prevValue) => prevValue + defaultTimerChangeValue);
            }}
          />
          <RoundedButton
            text="-"
            onClick={() => {
              setTimer((prevValue) =>
                prevValue >= defaultTimerChangeValue
                  ? prevValue - defaultTimerChangeValue
                  : 0
              );
            }}
          />
        </Stack>
      </Flex>
    </Stack>
  );
}

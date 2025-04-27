"use client";
import TimerComponent from "@/components/Timer/TimerComponent";
import { Box, Button, Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RoundedButton from "../../components/Counter/RoundedButton";
import openUpdateTimerModal from "@/components/Timer/openUpdateTimerModal";

export default function TimerPage() {
  const [timer, setTimer] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevValue) => {
        if (prevValue <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevValue - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack h="100vh">
      <Flex align="center" justify="space-between">
        <Box component={Link} href="/" m="lg">
          <IconArrowLeft className="hover-expand" color="black" size={30} />
        </Box>
        <UnstyledButton onClick={openUpdateTimerModal} fz="1.5rem">
          Click on timer to edit!
        </UnstyledButton>
        <Box />
      </Flex>

      <Flex align="center" justify="space-between" p="lg">
        <Button
          className="hover-expand pointer"
          variant="outline"
          color="black"
          fz="lg"
          size="lg"
          radius="xl"
        >
          Start
        </Button>
        <TimerComponent timer={timer} />
        <Stack>
          <RoundedButton text="+" />
          <RoundedButton text="-" />
        </Stack>
      </Flex>
    </Stack>
  );
}

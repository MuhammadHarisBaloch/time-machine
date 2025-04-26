"use client";
import { Box, Button, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import RoundedButton from "../../components/Counter/RoundedButton";
import { useState } from "react";
import UpdateTimer from "@/components/Timer/TimerComponent";
import TimerComponent from "@/components/Timer/TimerComponent";

// function formatTimer(timer: number) {
//   if (timer < 10) {
//     return `0${timer}`;
//   }
//   return timer;
// }

// function formatTimer(timer: number) {
//   return timer.toString().padStart(2, "0");
// }

export default function TimerPage() {
  // const [seconds, setSeconds] = useState(57);
  // const [minutes, setMinutes] = useState(30);
  // const [hours, setHours] = useState(1);

  const [timer, setTimer] = useState(4892);

  return (
    <Stack h="100vh">
      <Flex align="center" justify="space-between">
        <Box component={Link} href="/" m="lg">
          <IconArrowLeft className="hover-expand" color="black" size={30} />
        </Box>
        <Text fz="1.5rem">Click on timer to edit!</Text>
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


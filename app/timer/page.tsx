"use client";
import TimerComponent from "@/components/Timer/TimerComponent";
import { Box, Button, Flex, Stack, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import RoundedButton from "../../components/Counter/RoundedButton";

export default function TimerPage() {
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

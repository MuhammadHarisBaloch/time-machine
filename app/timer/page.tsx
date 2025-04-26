"use client";
import { Box, Button, Flex, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import RoundedButton from "../../components/Counter/RoundedButton";

export default function TimerPage() {
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
        <Title order={3} fz="28rem" fw={300}>
          0
        </Title>
        <Stack>
          <RoundedButton text="+" />
          <RoundedButton text="-" />
        </Stack>
      </Flex>
    </Stack>
  );
}

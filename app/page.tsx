"use client";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";
export default function Home() {
  return (
    <Stack h="100vh" align="center" justify="center">
      <Button component={Link} href="/counter" w="200px">
        Counter
      </Button>
      <Button w="200px">Blah</Button>
      <Button w="200px">Blah</Button>
    </Stack>
  );
}

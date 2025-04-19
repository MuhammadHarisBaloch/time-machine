import { Button } from "@mantine/core";
import Link from "next/link";

export default function Counter() {
  return (
    <Button component={Link} href="/">
      Back
    </Button>
  );
}

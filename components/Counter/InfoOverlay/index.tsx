import {
  Affix,
  Button,
  Overlay,
  Stack,
  Title,
  Transition,
  Text,
} from "@mantine/core";
import PopHeart from "../PopHeart";
import RoundedButton from "../RoundedButton";
import Link from "next/link";

interface InfoOverlayProps {
  opened: boolean;
  onClose: () => void;
}

function InfoOverlay({ opened, onClose }: InfoOverlayProps) {
  return (
    <Transition
      mounted={opened}
      transition="fade"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <Overlay
          style={styles}
          color="#000"
          backgroundOpacity={0.95}
          onClick={onClose}
        >
          <Affix position={{ top: 25, right: 25 }}>
            <RoundedButton text="x" color="white" size={50} borderWidth={0.5} />
          </Affix>
          <Stack align="center" justify="center" h="100vh" c="white">
            <Title>Simple Counter</Title>
            <Text ta="center">
              A simple tool for counting things and keeping <br /> track of
              numbers.{" "}
              <Text
                td="underline"
                component={Link}
                href="https://www.google.com"
              >
                Learn more
              </Text>
            </Text>
            <Button
              color="red"
              miw={180}
              h={60}
              fw={700}
              fz="lg"
              radius="md"
              px="lg"
              rightSection={<PopHeart />}
            >
              Buy me a coffee
            </Button>
            <Text>By Muhammad Haris 😍</Text>
          </Stack>
        </Overlay>
      )}
    </Transition>
  );
}

export default InfoOverlay;

import { Affix, Button, Overlay, Stack, Transition } from "@mantine/core";
import PopHeart from "../PopHeart";
import RoundedButton from "../RoundedButton";

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
          backgroundOpacity={0.85}
          onClick={onClose}
        >
          <Affix position={{ top: 25, right: 25 }}>
            <RoundedButton text="x" color="white" size={50} borderWidth={0.5} />
          </Affix>
          <Stack>
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
          </Stack>
        </Overlay>
      )}
    </Transition>
  );
}

export default InfoOverlay;

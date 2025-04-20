import { Affix, Overlay, Transition } from "@mantine/core";
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
            <RoundedButton text="x" />
          </Affix>
        </Overlay>
      )}
    </Transition>
  );
}

export default InfoOverlay;

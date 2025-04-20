import { Flex } from "@mantine/core";
import {
  IconArrowLeft,
  IconExclamationCircleFilled,
  IconReload,
  IconSettingsFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import openSettingsModal from "../../SettingsModal";

interface CounterControlsProps {
  onReloadClick?: () => void;
  onSettingClick?: () => void;
  onInfoClick?: () => void;
}

function CounterControls({
  onReloadClick,
  onSettingClick,
  onInfoClick,
}: CounterControlsProps) {
  return (
    <Flex px="lg" pt="lg">
      <Link href="/">
        <IconArrowLeft className="hover-expand" color="black" size={30} />
      </Link>
      <Flex gap="lg" justify="center" w="100vw">
        <IconExclamationCircleFilled
          className="hover-expand pointer"
          size={30}
          onClick={onInfoClick}
        />
        <IconSettingsFilled
          onClick={() => {
            openSettingsModal({ counter: 40 });
          }}
          className="hover-expand pointer"
          size={30}
        />
        <IconReload
          onClick={onReloadClick}
          className="hover-expand pointer"
          size={30}
        />
      </Flex>
    </Flex>
  );
}

export default CounterControls;

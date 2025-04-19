import { Flex } from "@mantine/core";
import {
  IconArrowLeft,
  IconExclamationCircleFilled,
  IconReload,
  IconSettingsFilled,
} from "@tabler/icons-react";
import Link from "next/link";

interface CounterControlsProps {
  onReloadClick?: () => void;
  onSettingClick?: () => void;
}

function CounterControls({
  onReloadClick,
  onSettingClick,
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
        />
        <IconSettingsFilled
          onClick={onSettingClick}
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

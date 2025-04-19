import { Flex } from "@mantine/core";
import Link from "next/link";
import {
  IconSettingsFilled,
  IconReload,
  IconExclamationCircleFilled,
  IconArrowLeft,
} from "@tabler/icons-react";
export default function Counter() {
  return (
    <Flex px="lg" pt="lg">
      <Link href="/">
        <IconArrowLeft color="black" size={30} />
      </Link>
      <Flex gap="lg" justify="center" w="100vw">
        <IconExclamationCircleFilled size={30} />
        <IconSettingsFilled size={30} />
        <IconReload size={30} />
      </Flex>
    </Flex>
  );
}

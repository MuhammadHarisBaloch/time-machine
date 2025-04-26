import { Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import UpdateCounterModal from "../UpdateCounterModal";

interface openSettingsModalProps {
  counter: number;
  onUpdateCounter: (newCounter: number) => void;
}

export default function openSettingsModal({
  counter,
  onUpdateCounter,
}: openSettingsModalProps) {
  modals.open({
    title: <Title order={3}>Counter Settings</Title>,
    children: (
      <UpdateCounterModal counter={counter} onUpdateCounter={onUpdateCounter} />
    ),
    centered: true,
  });
}

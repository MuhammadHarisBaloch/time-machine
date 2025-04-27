"use client";
import { modals } from "@mantine/modals";
import UpdateTimerModalItem from "../UpdateTimerModalItem";

export default function openUpdateTimerModal(
  onTimerUpdate: (newTimer: number) => void
) {
  return modals.open({
    title: "Update Timer",
    children: (
      <UpdateTimerModalItem
        onUpdateTimer={(newTimer) => {
          onTimerUpdate(newTimer);
        }}
      />
    ),
  });
}

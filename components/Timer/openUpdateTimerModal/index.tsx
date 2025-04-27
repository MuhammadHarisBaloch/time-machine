"use client";
import { Button, Flex, NumberInput, Stack } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";
import UpdateTimerModalItem from "../UpdateTimerModalItem";

export default function openUpdateTimerModal() {
  return modals.open({
    title: "Update Timer",
    children: <UpdateTimerModalItem />,
  });
}

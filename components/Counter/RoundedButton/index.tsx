import { Stack, Text } from "@mantine/core";

interface RoundedButtonProps {
  text: string;
  onClick?: () => void;
}

function RoundedButton({ text, onClick }: RoundedButtonProps) {
  return (
    <Stack
      className="hover-expand pointer"
      w={65}
      h={65}
      bg="white"
      align="center"
      justify="center"
      pb="xs"
      style={{
        borderRadius: 50,
        border: "1px solid black",
      }}
      onClick={onClick}
    >
      <Text ta="center" fz="3rem" fw={400}>
        {text}
      </Text>
    </Stack>
  );
}

export default RoundedButton;

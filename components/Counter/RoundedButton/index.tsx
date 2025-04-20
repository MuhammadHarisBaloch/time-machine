import { Stack, Text } from "@mantine/core";

interface RoundedButtonProps {
  text: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

function RoundedButton({
  text,
  size = 65,
  color = "black",
  onClick,
}: RoundedButtonProps) {
  return (
    <Stack
      className="hover-expand pointer"
      w={size}
      h={size}
      bg="transparent"
      align="center"
      justify="center"
      pb="xs"
      style={{
        borderRadius: 50,
        border: "1px solid ",
        borderColor: color,
      }}
      onClick={onClick}
    >
      <Text c={color} ta="center" fz="3rem" fw={400}>
        {text}
      </Text>
    </Stack>
  );
}

export default RoundedButton;

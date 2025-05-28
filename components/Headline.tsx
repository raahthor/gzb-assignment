import { Center, Text } from "@chakra-ui/react";

export default function Headline() {
  return (
    <Center bg="blue.950" p="2.5">
      <Text textStyle="xs">
        ALL BOOKS AT LEAST{" "}
        <Text as="span" textStyle="xs" fontWeight="bold">
          50% OFF*
        </Text>{" "}
        LIST PRICES EVERY DAY
      </Text>
    </Center>
  );
}

"use client";
import { Box, Flex, Checkbox, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function RadioButton() {
  const [checked, setChecked] = useState(false);
  return (
    <Flex
      bgColor="orange.100"
      border="2px solid"
      borderColor="orange.300"
      p="15px"
      alignItems="center"
      gap="20px"
    >
      <Box
        w="20px"
        h="20px"
        minWidth="20px"
        borderRadius="full"
        border="4px solid"
        borderColor="white"
        bg={checked ? "blue.400" : "transparent"}
        cursor="pointer"
        onClick={() => setChecked(!checked)}
      />
      <Image src="/turbo.png" height={20} width={70} alt="My Icon" />
      <Text color="gray.900">Free Delivery</Text>
      <Text color="gray.700"> April 18-19 2025</Text>
    </Flex>
  );
}

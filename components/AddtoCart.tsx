import { Box, Text, Flex, NumberInput } from "@chakra-ui/react";

export default function AddtoCart() {
  return (
    <Flex gap="10px">
      <NumberInput.Root defaultValue="0" min={0} width="80px">
        <NumberInput.Control borderColor="gray.300" />
        <NumberInput.Input
          height="55px"
          pl="17px"
          fontWeight="bold"
          color="gray.600"
          border="2px solid"
          borderColor="gray.300"
        />
      </NumberInput.Root>
      <Box
        borderRadius="md"
        bgColor="yellow.500"
        as="button"
        width="full"
        p="10px"
        cursor="pointer"
        _hover={{bgColor:"yellow.400"}}
      >
        <Text fontWeight="bold" fontSize="sm" color="black">
          ADD TO CART-AED 47.99
        </Text>
        <Text fontSize="2xs" color="black">
          PRICE INCLUSIVE OF VAT
        </Text>
      </Box>
    </Flex>
  );
}

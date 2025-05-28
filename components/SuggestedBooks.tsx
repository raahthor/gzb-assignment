import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function SuggestedBooks() {
  const imageSources: string[] = [
    "/bookCovers/1.webp",
    "/bookCovers/2.webp",
    "/bookCovers/3.webp",
    "/bookCovers/4.webp",
  ];
  return (
    <Flex direction="column" gap={3} py={2} w="100px" alignItems="center">
      {imageSources.map((src, index) => (
        <Box
          key={index}
          w="80px"
          h="80px"
          position="relative"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          _hover={{ borderColor: "blue.400" }}
          cursor="pointer"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      ))}
    </Flex>
  );
}

import { Box, Center, Input, InputElement, InputGroup } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Searchbar() {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        h="1px"
        bg="gray.300"
        w="100%"
        zIndex={0}
        top={"50%"}
      ></Box>
      <Center px={20} zIndex={1}>
        <InputGroup
          startElement={
            <Box ml={4}>
              <IoSearch size={25} color="black" />
            </Box>
          }
          endElement={
            <Box mr={4}>
              <FaMicrophone size={20} color="black" />
            </Box>
          }
        >
          <Input
            fontSize="md"
            px={20}
            backgroundColor="gray.100"
            color="gray.700"
            borderRadius="4xl"
            height="60px"
            borderColor={"white"}
            borderWidth={8}
            shadow="sm"
            placeholder="Search book title, Author, Keyword or ISBN"
          />
        </InputGroup>
      </Center>
    </Box>
  );
}

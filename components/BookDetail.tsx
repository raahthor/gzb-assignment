import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SuggestedBooks from "./SuggestedBooks";
import PriceDetails from "./PriceDetails";

export default function BookDetail() {
  return (
    <>
      <Flex w="full" h="600px" justifyContent="center" gap="4" mt="5" mb="24">
        <SuggestedBooks />

        <Flex p="5px" w="35%">
          <Box w="430px" h="590px" position="relative" overflow="hidden">
            <Image
              src="/bookcovers/main.png"
              alt="book cover 5"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Flex>
        <PriceDetails />
        <Flex w="100px"></Flex>
      </Flex>
    </>
  );
}

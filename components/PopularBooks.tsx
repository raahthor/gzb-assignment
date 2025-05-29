"use client";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { Button, Image } from "@chakra-ui/react";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PopularBooks() {
  return (
    <Flex direction="column" my="14">
      <Flex justifyContent="space-between" alignItems="center">
        <Box h="1px" border="1px dotted" w="43%" borderColor="gray.300"></Box>
        <Text letterSpacing="widest" fontSize="md" color="gray.600">
          POPULAR BOOKS
        </Text>
        <Box h="1px" border="1px dotted" w="43%" borderColor="gray.300"></Box>
      </Flex>
      <Center color="black" fontWeight="bold" fontSize="3rem">
        Enjoy Up to 80% Off
      </Center>
      <Carousel />
      <Center>
        <Link
          fontSize="1.8rem"
          color="blue.500"
          borderBottom="2px dotted"
          borderColor="blue.400"
          _hover={{
            borderColor: "blue.600",
            color: "blue.600",
            textDecoration: "none",
          }}
        >
          VIEW ALL
        </Link>
      </Center>
    </Flex>
  );
}

const images: string[] = [
  "/bookCovers/5.webp",
  "/bookCovers/6.webp",
  "/bookCovers/7.webp",
  "/bookCovers/8.webp",
  "/bookCovers/9.webp",
  "/bookCovers/10.webp",
  "/bookCovers/4.webp",
];

function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  }

  return (
    <Box py="10" px="24">
      <Flex position="relative">
        <Button
          position="absolute"
          left="0"
          top="35%"
          zIndex="1"
          borderRadius="full"
          boxShadow="md"
          bg="white"
          onClick={() => scroll("left")}
        >
          <IoIosArrowBack />
        </Button>

        <Flex
          ref={scrollRef}
          overflowX="auto"
          scrollBehavior="smooth"
          gap={5}
          px={10}
          py={4}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {images.map((src, idx) => (
            <Flex key={idx} direction="column" align="center" cursor="pointer">
              <Box
                minW="200px"
                h="330px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xs"
                flexShrink={0}
                mb="4"
              >
                <Image
                  src={src}
                  alt={`image-${idx}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
              <Flex
                align="center"
                color="black"
                fontWeight="bold"
                lineHeight="shorter"
              >
                AED{" "}
                <Text lineHeight="shorter" fontSize="3xl" mx="1">
                  66
                </Text>{" "}
                63
              </Flex>
              <Text
                textDecoration="line-through"
                color="gray.500"
                lineHeight="shorter"
                fontSize="xs"
                fontWeight="bold"
              >
                AEd323 fd
              </Text>
              <Text fontWeight="bold" color="red.500" fontSize="lg">
                59% OFF
              </Text>
            </Flex>
          ))}
        </Flex>

        <Button
          position="absolute"
          right="0"
          top="35%"
          zIndex="1"
          borderRadius="full"
          boxShadow="md"
          bg="white"
          onClick={() => scroll("right")}
        >
          <IoIosArrowForward />
        </Button>
      </Flex>
    </Box>
  );
}

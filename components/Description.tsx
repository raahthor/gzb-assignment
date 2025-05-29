import { Box, Flex, HStack, Link, Tabs, VStack, Text } from "@chakra-ui/react";
import React, { JSX } from "react";
import { LuUser, LuFolder, LuSquareCheck } from "react-icons/lu";

export default function Description() {
  return (
    <>
      <Tabs.Root defaultValue="members" mb="8" px="28">
        <Tabs.List borderBottom="1px solid" borderColor="gray.200">
          <Tabs.Trigger
            mr="10"
            fontSize="lg"
            color="gray.500"
            value="members"
            _selected={{
              borderBottom: "4px solid",
              borderColor: "orange.500",
            }}
          >
            Book Details
          </Tabs.Trigger>
          <Tabs.Trigger
            mr="10"
            fontSize="lg"
            color="gray.500"
            value="projects"
            _selected={{
              borderBottom: "4px solid",
              borderColor: "orange.500",
            }}
          >
            Reviews
          </Tabs.Trigger>
          <Tabs.Trigger
            mr="10"
            fontSize="lg"
            color="gray.500"
            value="tasks"
            _selected={{
              borderBottom: "4px solid",
              borderColor: "orange.500",
            }}
          >
            Author
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <Flex gap={10} px="24">
        <Flex direction="column" width="50%">
          <Text fontSize="2xl" color="black" fontWeight="bold" mb={4}>
            Book Description
          </Text>
          <VStack align="start" gap={5} color="gray.700">
            <Text>
              From the bestselling author of <em>Never Let Me Go</em> and{" "}
              <em>The Remains of the Day</em>, a stunning new novel that asks,
              what does it mean to love?
            </Text>
            <Text>
              Klara and the Sun, the first novel by Kazuo Ishiguro since he was
              awarded the Nobel Prize in Literature, tells the story of Klara,
              an Artificial Friend with outstanding observational qualities,
              who, from her place in the store, watches carefully the behavior
              of those who come in to browse, and of those who pass on the
              street outside. She remains hopeful that a customer will soon
              choose her.
            </Text>
            <Text>
              Klara and the Sun is a thrilling book that offers a look at our
              changing world through the eyes of an unforgettable narrator, and
              one that explores the fundamental question: what does it mean to
              love?
            </Text>
          </VStack>
        </Flex>

        <Flex direction="column" fontSize="sm" width="50%">
          <Text fontSize="2xl" color="black" fontWeight="bold" mb={4}>
            Product Details
          </Text>
          <VStack align="stretch" gap={0}>
            <Detail label="Print Length" value="160 Pages" />
            <Detail label="Language" value="English" />
            <Detail label="Publisher" value="Grove Press Black Cat" />
            <Detail label="Date Published" value="13 Apr 2021" />
            <Detail label="ISBN" value="9781524711474" />
            <Detail
              label="Author"
              value={
                <>
                  <Link href="#" color="blue.500">
                    Charles Duhigg
                  </Link>{" "}
                  &{" "}
                  <Link href="#" color="blue.500">
                    Jack Mayer
                  </Link>
                </>
              }
            />
            <Detail label="Book Format" value="Paperback" />
            <Detail label="Country of Origin" value="United Kingdom" />
            <Detail label="Genre" value="Literary Fiction, Science Fiction" />
            <Detail label="Weight" value="0.65 lbs (294 g)" />
            <Detail

              label="Dimensions"
              value="5.2 x 0.8 x 8 inches (13.2 x 2 x 20.3 cm)"
            />
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
type DetailProps = {
  label: string;
  value: string | JSX.Element;
};
const Detail = ({ label, value }: DetailProps) => (
  <HStack
    borderBottom="1px solid"
    borderColor="gray.300"
    py={3}
  >
    <Text fontSize="md" color="gray.600" w="180px">{label}</Text>
    <Box fontWeight="bold" color="black">
      {value}
    </Box>
  </HStack>
);

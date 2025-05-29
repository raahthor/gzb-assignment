import { Box, Button, Flex, Link, RatingGroup, Text } from "@chakra-ui/react";
import { CiBookmark } from "react-icons/ci";
import { FaClock, FaTruck } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import RadioButton from "./RadioButton";
import AddtoCart from "./AddtoCart";

export default function PriceDetails() {
  return (
    <Flex w="35%" direction="column" justifyContent="space-between">
      <Flex w="full" alignItems="center" justifyContent="space-between">
        <Text color="gray.500" fontSize="sm">
          By:
          <Link mx="1" color="blue.500" textDecoration="underline">
            Charles Duhing
          </Link>
          &
          <Link mx="1" color="blue.500" textDecoration="underline">
            Jack Mayer
          </Link>
        </Text>
        <Button
          w="80px"
          h="28px"
          backgroundColor="blue.200"
          borderRadius="xl"
          _hover={{ bgColor: "blue.300" }}
        >
          <CiBookmark /> <Text mr="4px">Save</Text>
        </Button>
      </Flex>
      <Text fontWeight="bold" fontSize="3xl" lineHeight="normal" color="black">
        The Power of Habit: Why We do What We Do in Life and Business
      </Text>
      <Text color="gray.600" fontSize="sm">
        Paperback / 7 January 2014
      </Text>
      <Flex alignItems="center" gap="10px">
        <RatingGroup.Root
          count={5}
          defaultValue={4.5}
          size="md"
          colorPalette="orange"
        >
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <Text color="gray.600" fontSize="sm">
          (146 Reviews)
        </Text>
        <GoQuestion size={20} color="black" />
      </Flex>
      <Box border="2px dotted" borderColor="gray.300"></Box>
      <Flex justifyContent="space-between" align="flex-start">
        <Flex minW="235px" justifyContent={"space-between"}>
          <Flex>
            <Text textStyle="lg" fontWeight="bold" color="black">
              AED
            </Text>
            <Text
              as="span"
              textStyle="4xl"
              px="4px"
              color="black"
              fontWeight="bold"
              position="relative"
              top="-5px"
            >
              53
            </Text>
            <Text textStyle="lg" fontWeight="bold" color="black">
              36
            </Text>
          </Flex>
          <Text
            position="relative"
            top="2px"
            fontSize="12.5px"
            color="gray.600"
          >
            List Price{" "}
            <Text as="span" textDecoration="line-through">
              AED 89.32
            </Text>
          </Text>
        </Flex>
        <Text
          position="relative"
          top="2px"
          borderRadius="xl"
          backgroundColor="red.100"
          py="1px"
          px="10px"
          fontSize="sm"
          fontWeight="bold"
          color="red.600"
        >
          40% OFF
        </Text>
      </Flex>
      <Flex alignItems="center">
        <FaClock color="green" size={14} />
        <Text fontSize="sm" ml="10px" color="gray.600">
          Sale ends in 2 days
        </Text>
      </Flex>
      <Box border="2px dotted" borderColor="gray.300"></Box>
      <Flex alignItems="center">
        <FaCircleExclamation color="red" size={14} />
        <Text fontSize="sm" ml="10px" color="red.600" fontWeight="bold">
          Only 1 left in stock - order soon
        </Text>
      </Flex>
      <Flex backgroundColor="blue.100" p="15px" alignItems="center" gap="12px">
        <FaTruck size={25} color="blue" />
        <Box>
          <Text color="blue.900" fontSize="lg" lineHeight="normal">
            Fast Delivery
          </Text>
          <Text color="blue.500" lineHeight="normal">
            Free shipping on orders over $35
          </Text>
        </Box>
      </Flex>
      <RadioButton />
      <AddtoCart />
    </Flex>
  );
}

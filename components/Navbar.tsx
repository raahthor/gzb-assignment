import { Button, Link, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <Flex align="center" py="6" justifyContent="space-between">
        <Link
          minWidth={70}
          ml={8}
          mr="2"
          href={"https://www.gzb.ae/"}
          target="_blank"
        >
          <Image height={60} width={120} src="/logo.svg" alt="gzb logo" />
        </Link>
        <Flex
          gap="5"
          justifyContent="space-between"
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Button fontSize="sm" color="gray.600">
            LITERATURE & FICTIONAL
            <IoIosArrowDropdown />
          </Button>
          <Button fontSize="sm" color="gray.600">
            MIND, BODY, & SPIRIT
            <IoIosArrowDropdown />
          </Button>
          <Button fontSize="sm" color="gray.600">
            FAMILY & LIFESTYLE
            <IoIosArrowDropdown />
          </Button>
          <Button fontSize="sm" color="gray.600">
            CHILDREN & YOUNG ADULT
            <IoIosArrowDropdown />
          </Button>
          <Button fontSize="sm" color="gray.600">
            MORE
            <IoIosArrowDropdown />
          </Button>
        </Flex>
        <Flex
          align="center"
          justifyContent="space-between"
          width={200}
          minWidth={150}
          mr={8}
          ml="2"
        >
          <Text fontWeight="bold" textStyle="sm" color="blue.900">
            <Link
              href="#"
              mr="1"
              color="blue.900"
              _hover={{ color: "blue.500" }}
            >
              Login
            </Link>
            /
            <Link
              ml="1"
              href="#"
              color="blue.900"
              _hover={{ color: "blue.500" }}
            >
              Register
            </Link>
          </Text>
          <Button backgroundColor="yellow.500" borderRadius="4xl">
            <FaShoppingCart color="white" />
          </Button>
        </Flex>
      </Flex>
      <Searchbar />
    </>
  );
}

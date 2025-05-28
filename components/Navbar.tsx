import { Avatar, Button, Link, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import DropdownMenu from "./DropdownMenu";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <>
      <Flex align="center" py="6" justifyContent="space-between">
        <Link minWidth={70} mx={8} href={"https://www.gzb.ae/"} target="_blank">
          <Image height={60} width={120} src="/logo.svg" alt="gzb logo" />
        </Link>
        <Flex gap="5" justifyContent="space-between">
          <Button color="gray.600">
            LITERATURE & FICTIONAL
            <Icon>
              <IoIosArrowDropdown />
            </Icon>
          </Button>
          <Button color="gray.600">
            MIND, BODY, & SPIRIT
            <Icon>
              <IoIosArrowDropdown />
            </Icon>
          </Button>
          <Button color="gray.600">
            FAMILY & LIFESTYLE
            <Icon>
              <IoIosArrowDropdown />
            </Icon>
          </Button>
          <Button color="gray.600">
            CHILDREN & YOUNG ADULT
            <Icon>
              <IoIosArrowDropdown />
            </Icon>
          </Button>
          <Button color="gray.600">
            MORE
            <Icon>
              <IoIosArrowDropdown />
            </Icon>
          </Button>
        </Flex>
        <Flex align="center" justifyContent="space-between" width={200} minWidth={150} mx={8}>
          <Text fontWeight="bold" textStyle="sm">
            <NextLink href="#">
              <Link mr="1" color="blue.900" _hover={{ color: "blue.500" }}>
                Login /
              </Link>
            </NextLink>
            <NextLink href="#">
              <Link color="blue.900" _hover={{ color: "blue.500" }}>
                Register
              </Link>
            </NextLink>
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

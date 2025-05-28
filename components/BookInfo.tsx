import { Box, Flex, Text } from "@chakra-ui/react";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  FaLanguage,
  FaBuilding,
  FaRegCalendar,
  FaBarcode,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Details {
  icon: IconType;
  info: string;
}
export default function BookInfo() {
  const details: Details[] = [
    { icon: IoDocumentTextOutline, info: "416 Pages" },
    { icon: FaLanguage, info: "English" },
    { icon: FaBuilding, info: "Random House Trade" },
    { icon: FaRegCalendar, info: "7 Jan 2014" },
    { icon: FaBarcode, info: "9878987656545678" },
    { icon: FaBarcode, info: "9878987656545678" },
  ];
  return (
    <>
      <Flex px="7%" mb="30px" justifyContent="space-evenly">
        {details.map((item, ind) => {
          const Icon = item.icon;
          return (
            <Flex
              key={ind}
              h="75px"
              w="170px"
              border="2px solid"
              borderRadius="md"
              borderColor="gray.200"
              direction="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Icon size={25} color="gray" />
              <Text color="gray.700" fontSize="xs">
                {item.info}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}

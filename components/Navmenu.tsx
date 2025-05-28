import { Breadcrumb, Flex } from "@chakra-ui/react";
import { MdHomeFilled } from "react-icons/md";

export default function Navmenu() {
  return (
    <Flex py={8} pl="105px">
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link _hover={{ color: "gray.900" }} href="#">
              <MdHomeFilled size={15} />
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link _hover={{ color: "gray.900" }} href="#">
              Arts & Music
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink color="gray.900">
              Books
            </Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </Flex>
  );
}

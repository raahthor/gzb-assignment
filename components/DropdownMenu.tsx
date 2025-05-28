import { Menu, Button, Portal } from "@chakra-ui/react";

export default function DropdownMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button color="gray.600" size="sm">
          LITERATURE & FICTIONAL
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

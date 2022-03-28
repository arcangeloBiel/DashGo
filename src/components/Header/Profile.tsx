import { Flex, Box, Text, Avatar } from "@chakra-ui/react";


export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="center">
        <Text>Jaca</Text>
        <Text color="gray.300" fontSize="small">
          Jaca@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="JACA RIBEIRO"
        src="https://github.com/diego3g.png"
      />
    </Flex>
  );
}

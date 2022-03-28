import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfielData?: boolean;
}

export function Profile({ showProfielData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfielData && (
        <Box mr="4" textAlign="center">
          <Text>Jaca</Text>
          <Text color="gray.300" fontSize="small">
            Jaca@gmail.com
          </Text>
        </Box>
      )}
      

      <Avatar
        size="md"
        name="JACA RIBEIRO"
        src="https://github.com/diego3g.png"
      />
    </Flex>
  );
}

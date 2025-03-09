import { Box, Skeleton, Stack, Text } from "@chakra-ui/react";


const ThinkingSkeleton = () => {
  return (
    <Box  w={"full"} justifyContent={"flex-start"} p={3}>
      <Text color={"fg.subtle"}>Thinking...</Text>
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" />
        <Skeleton height="5" width="80%" />
      </Stack>{" "}
    </Box>
  );
};

export default ThinkingSkeleton;

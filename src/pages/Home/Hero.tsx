import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
   const navigate = useNavigate()
  return (
    <Flex
      background={`url(https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      h={"calc(100vh - 64px)"}
    >
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: "100px" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={useColorModeValue("white", "gray.200")}
          >
            Bienvenidos a <br />
            <Text as={"span"} color={"yellow.500"}>
              Game Stop
            </Text>
          </Heading>
          <Text color={"grey"} fontSize={"lg"} maxW={"3xl"} align={"center"}>
            una web para encontrar los mejores videojuegos, mejores ofertas y
            ademas contamos chistes: Chuck Norris sleeps whit a pillow under his gun
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => navigate("/games")}
            >
              Empiza ahora
            </Button>
            <Button
              color={"white"}
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}

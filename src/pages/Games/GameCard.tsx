import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Game } from "./useGames";

type Props = {
  game: Game;
};
export default function GameCard({ game }: Props) {
  return (
    <div
      onClick={() => {
        window.location.href = `https://www.cheapshark.com/redirect?dealID=${game.dealID}`;
      }}
      style={{ cursor: "pointer" }}
    >
      <Box
        maxW={"445px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image alt={"blog image"} h={"210px"} src={game.thumb} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {game.isOnSale == "1" ? "En oferta" : "Precio normal"}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {game.title}
          </Heading>
          <Text color={"gray.500"}>Critica: {game.steamRatingText}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{game.metacriticScore}</Text>
            <Text color={"gray.500"}>
              {game.normalPrice} - Ahora: {game.salePrice}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

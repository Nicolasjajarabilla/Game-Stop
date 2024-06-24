import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./useGames";

type Props = {}

function Games({}: Props) {
   const {data, isLoading} = useGames();
  return (
    <SimpleGrid p={20} columns={[2, null, 3]} spacing="40px">
        {isLoading && <p>Cargando...</p>}
        {data?.map(game => <GameCard key={game.dealID} game={game} />)}
    </SimpleGrid>
  )
}

export default Games;
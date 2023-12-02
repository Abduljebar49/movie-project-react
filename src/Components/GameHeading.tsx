import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
interface Props{
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
    const title = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name||''} Games`
  return (
    <Heading marginY={5} fontSize='5xl' marginLeft={2} as='h1'>
      {title}
    </Heading>
  )
}

export default GameHeading
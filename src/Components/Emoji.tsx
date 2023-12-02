import bullsEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
    rating:number
}
const Emoji = ({rating}:Props) => {
    const emojiMap:{[key:number]:ImageProps} = {
        3: {boxSize:'25px',src: meh, alt: 'meh'},
        4: {boxSize:'25px',src: thumbsUp, alt: 'recommended'},
        5: {boxSize:'35px',src: bullsEye, alt: 'exceptional'},
    }
  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji
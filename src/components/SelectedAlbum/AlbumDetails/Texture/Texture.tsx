import { TextureImage, TextureContainer, TextureTitle } from './Texture.style'
import personTexture from '../../../../assets/personTexture.png';
import textTexture from '../../../../assets/textTexture.png';

export const Texture = () => {
  return(
    <TextureContainer>
      <TextureImage src={personTexture} alt="personTexture" />
      <TextureTitle>PERSON</TextureTitle>
      <TextureImage src={textTexture} alt="textTexture" />
      <TextureTitle>TEXT</TextureTitle>
    </TextureContainer>
  )
}
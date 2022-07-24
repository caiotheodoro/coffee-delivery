import { Items } from "./Items";
import { IntroContainer, TitleContainer } from "./styles";
import coffeeImage from "../../../../assets/coffee.png";

export function Intro() {

  return (
    <IntroContainer>
      <div className={'cover'} />
      <div className={'content'}>
        <div>
          <TitleContainer>
            <h1> Encontre o café perfeito para qualquer hora do dia</h1>
            <p> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora </p>
          </TitleContainer>
          <Items />
        </div>
        <img src={coffeeImage} alt="Café" />
      </div>
    </IntroContainer>
  )
}

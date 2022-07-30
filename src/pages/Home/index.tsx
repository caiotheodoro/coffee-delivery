import { CoffeeListContainer, CoffeesList, HomeContainer, IntroContainer, TitleContainer } from "./styles";
import coffeeImage from "../../assets/coffee.png";
import { coffees } from "../../utils/coffees";
import { Items } from "./components/Items";
import { CoffeeCard } from "./components/CoffeCard";
import { useContext } from "react";
import { CartContext } from "../../contexts/CoffeesContext";
import { Coffee } from "../../reducers/cart/reducer";

export function Home() {

  const {handleAddCoffeeToCart} = useContext(CartContext)

  const handleAddCoffee = (coffee: Coffee) => {
    handleAddCoffeeToCart(coffee)
  }

  return (
    <HomeContainer>
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
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeesList>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id}  {...coffee} handleAddCoffee={handleAddCoffee} />
          ))}

        </CoffeesList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}

import { coffees } from "../../../../utils/coffees";
import { CoffeeCard } from "./CoffeCard";
import { CoffeeListContainer, CoffeesList } from "./styles";


export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <h1>Nossos cafés</h1>
            <CoffeesList>
                {coffees.map(coffee => (
                    <CoffeeCard key={coffee.id}  {...coffee}  />
                ))}


            </CoffeesList>

        </CoffeeListContainer>
    )
}
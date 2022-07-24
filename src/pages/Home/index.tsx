import { CoffeeList } from "./components/CoffeeList";
import { CoffeeListContainer } from "./components/CoffeeList/styles";
import { Intro } from "./components/Into/indes";
import { HomeContainer} from "./styles";

export function Home() {

  return (
    <HomeContainer>
     <Intro />
     <CoffeeList />
    </HomeContainer>
  )
}

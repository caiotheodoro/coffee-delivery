import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Coffee } from "../../../../reducers/cart/reducer";
import { CartButton, CoffeeCardContainer, CounterButton } from "./styles";

interface CoffeeCardProps {
    id:number;
    name: string;
    src: string;
    description: string;
    price: number;
    tags: string[];
    handleAddCoffee: (coffee: Coffee) => void;
}

export function CoffeeCard({name,src,description,price,tags,handleAddCoffee,id}:CoffeeCardProps) {
    const [amount, setAmount] = useState(1);
    
    function handleAdd() {
        setAmount((state) => state + 1) 
       
    }

    function handleRemove() {
        amount > 0 &&  setAmount((state) => state - 1);
    }

    const handleAddCoffeToCart = () => {
        
        handleAddCoffee({id,name,src,price,amount})
        setAmount(1);
    }

    return (
        <CoffeeCardContainer>
            <img src={`src/assets/coffees/Type=${src}.png`} alt={name} width={"120px"} height={"auto"} />
            <div className={"tags"}>
                { tags.map(tag => {
                    return (
                        <span key={tag}>{tag}</span>
                    )
                })}
            </div>
            <div className={"text"}>
                <h1>{name}</h1>
                <p>
                    {description}
                </p>
            </div>
            <div className={"price"}>
                <h1>R$ <span>{price}</span></h1>
                <CounterButton><Minus size={18} weight="fill" onClick={handleRemove} /> {amount} <Plus size={18} weight="fill" onClick={handleAdd} /></CounterButton>
                <CartButton onClick={handleAddCoffeToCart}>
                    <ShoppingCart size={22} weight="fill" />
                </CartButton>
            </div>
        </CoffeeCardContainer>
    )
}
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CartButton, CoffeeCardContainer, CounterButton } from "./styles";

interface CoffeeCardProps {
    id:number;
    name: string;
    src: string;
    description: string;
    price: string;
    tags: string[];
}

export function CoffeeCard({name,src,description,price,tags}:CoffeeCardProps) {
    const [counter, setCounter] = useState(0);
    
    function handleAdd() {
        setCounter((state) => state + 1) 
       
    }

    function handleRemove() {
        counter > 0 &&  setCounter((state) => state - 1);
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
                <CounterButton><Minus size={18} weight="fill" onClick={handleRemove} /> {counter} <Plus size={18} weight="fill" onClick={handleAdd} /></CounterButton>
                <CartButton>
                    <ShoppingCart size={22} weight="fill" />
                </CartButton>
            </div>
        </CoffeeCardContainer>
    )
}
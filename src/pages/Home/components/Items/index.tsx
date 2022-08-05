import { Item, ItemsContainer } from "./styles";
import { Package, ShoppingCart, Timer, Coffee } from "phosphor-react";
export function Items(){
    return (
        <ItemsContainer>
            <Item itemColor="yellowDark">
              <span>
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </Item>
            <Item itemColor="baseText">
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </Item>
            <Item itemColor="yellowDark">
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </Item>
            <Item itemColor="purple">
              <span>
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </Item>
          </ItemsContainer>
    )
}
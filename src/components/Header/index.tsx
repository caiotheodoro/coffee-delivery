import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '/assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CoffeesContext'
export function Header() {
  const {numOfItems} = useContext(CartContext)
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        setIsScrolled (true);
    } else {
        setIsScrolled (false);
    }
}
, { passive: true });

  return (
    <HeaderContainer className={`${isScrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" title="Localização" >
      <span>
        <img src={logo} alt="" width="84.95px" height={'40px'} />
      </span>
        </NavLink>
      <nav>
        <NavLink to="/" title="Localização">
          <LocationButton>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
          </LocationButton>
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <CartButton >
            {numOfItems > 0 ? <span>{numOfItems}</span> : null}
            
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
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
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

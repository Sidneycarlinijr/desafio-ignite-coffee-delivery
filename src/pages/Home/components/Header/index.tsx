import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeCupImage,
  DescriptionContainer,
  HeaderContainer,
  Item,
  ItemIcon,
  ItemsContainer,
} from './styles'

import coffeeDeliveryCupImg from '../../../../assets/coffee-delivery-cup.svg'

export function Header() {
  return (
    <HeaderContainer>
      <DescriptionContainer>
        <h1>Encontre a cortina perfeita para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ItemsContainer>
          <Item>
            <ItemIcon variant="cart">
              <ShoppingCart weight="fill" />
            </ItemIcon>
            Compra Simples e segura
          </Item>

          <Item>
            <ItemIcon variant="packing">
              <Package weight="fill" />
            </ItemIcon>
            Embalagem mantém o café intacto
          </Item>

          <Item>
            <ItemIcon variant="time">
              <Timer weight="fill" />
            </ItemIcon>
            Entrega rápida e rastreada
          </Item>

          <Item>
            <ItemIcon variant="coffee">
              <Coffee weight="fill" />
            </ItemIcon>
            O café chega fresquinho até você
          </Item>
        </ItemsContainer>
      </DescriptionContainer>

      <CoffeeCupImage src={coffeeDeliveryCupImg} />
    </HeaderContainer>
  )
}

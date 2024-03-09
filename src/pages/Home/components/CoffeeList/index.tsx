import {
  AddToCartButton,
  BuyContainer,
  CoffeeCard,
  CoffeeCardActions,
  CoffeeCardsContainer,
  CoffeeListContainer,
  CoffeeTypes,
  DecrementButton,
  IncrementButton,
  PriceContainer,
  SelectQuantityContainer,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useCart } from '../../../../context/CartContext'

import { toast } from 'react-toastify'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imgUrl: string
  type: []
  quantity: number
}

export function CoffeeList() {
  const [products, setProducts] = useState<Product[]>([])
  const { addItem } = useCart()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://my-json-server.typicode.com/geovaneborba/rocketseat-ignite-desafios/products',
        {
          method: 'GET',
        }
      ).then((response) => response.json())

      console.log(response)

      setProducts([
        {
          id: '1',
          name: 'Cortina Teste 1',
          description: 'Cortina Teste 1 Descrição',
          price: 9.95,
          stock: 10,
          // imgUrl: '/expresso-tradicional.svg',
          type: ['cortina'],
          quantity: 1,
        },
        {
          id: '2',
          name: 'Cortina Teste 1',
          description: 'Cortina Teste 1 Descrição',
          price: 9.95,
          stock: 10,
          // imgUrl: '/expresso-tradicional.svg',
          type: ['blackout'],
          quantity: 1,
        },
        {
          id: '3',
          name: 'Cortina Teste 1',
          description: 'Cortina Teste 1 Descrição',
          price: 9.95,
          stock: 10,
          // imgUrl: '/expresso-tradicional.svg',
          type: ['blackout'],
          quantity: 1,
        },
      ])
    }
    fetchData()
  }, [])

  function handleIncrement(product: Product) {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return { ...prevProduct, quantity: prevProduct.quantity + 1 }
        }
        return prevProduct
      })
    )
  }

  function handleDecrement(product: Product) {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id && prevProduct.quantity > 1) {
          return { ...prevProduct, quantity: prevProduct.quantity - 1 }
        }
        return prevProduct
      })
    )
  }

  return (
    <CoffeeListContainer>
      <h2 className="text-center">Nossos produtos</h2>

      <CoffeeCardsContainer>
        {products.map((product) => (
          <CoffeeCard key={product.id}>
            {product.imgUrl && (
              <img src={product.imgUrl} alt="Café Expresso Tradicional" />
            )}
            <CoffeeTypes>
              {product.type.map((type, index) => (
                <span key={index}>{type}</span>
              ))}
            </CoffeeTypes>

            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <BuyContainer>
              <PriceContainer>
                R$
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: 2,
                  }).format(product.price)}
                </span>
              </PriceContainer>

              <CoffeeCardActions>
                <SelectQuantityContainer>
                  <DecrementButton
                    onClick={() => {
                      handleDecrement(product)
                    }}
                  >
                    <Minus weight="fill" />
                  </DecrementButton>

                  <span>{product.quantity}</span>

                  <IncrementButton
                    onClick={() => {
                      handleIncrement(product)
                    }}
                  >
                    <Plus weight="fill" />
                  </IncrementButton>
                </SelectQuantityContainer>

                <AddToCartButton
                  onClick={() => {
                    addItem({
                      ...product,
                      quantity: product.quantity === 0 ? 1 : product.quantity,
                    })

                    toast.success(
                      `${product.name} foi adicionado ao carrinho!`,
                      {
                        position: 'top-right',
                        theme: 'light',
                        draggable: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                      }
                    )
                  }}
                >
                  <ShoppingCart weight="fill" />
                </AddToCartButton>
              </CoffeeCardActions>
            </BuyContainer>
          </CoffeeCard>
        ))}
      </CoffeeCardsContainer>
    </CoffeeListContainer>
  )
}

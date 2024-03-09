import { CoffeeList } from './components/CoffeeList'
import { Header } from './components/Header'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      {/* <Header /> */}

      <CoffeeList />
    </HomeContainer>
  )
}

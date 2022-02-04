import styled from 'styled-components'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import { GlobalStyles } from './assets/global'
const Container = styled.div`
  display: flex;
  gap: 2rem;
  grid-template: 4rem 1fr;
`

export function App() {
  return (
    <Container>
      <Menu/>
      <Home/>
      <GlobalStyles/>
    </Container>
  )
}
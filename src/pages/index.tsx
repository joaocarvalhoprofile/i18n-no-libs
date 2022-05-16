import { Button, Checkbox, Container, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Header } from '../components/Header'
import { useSession } from '../core/hooks/useGlobalSession'

export default function Home() {
  const [isActive, setIsActive] = useState(false)
  const { i18n } = useSession()

  function handleActiveUser() {
    setIsActive(!isActive)
  }

  return (
    <>
      <Header />
      <Container>
        <VStack>
          <Container maxW='md' bg='blue.600' color='white'>
            {i18n?.profile?.my_name_is} João Carvalho
          </Container>
          <Container maxW='550px' bg='purple.600' color='white'>
            {i18n?.profile?.function} Engenheiro de Software
          </Container>
          <Container maxW='container.sm' bg='green.400' color='#262626'>
            {i18n?.profile?.description} Especialista em Nodejs and reactjs
          </Container>

          <Stack spacing={3}>
            <Checkbox defaultChecked>{i18n?.profile?.status}</Checkbox>
            <Button
              colorScheme='blue'
              onClick={handleActiveUser}
            >
              {isActive ? 'Ativo' : 'Inativo'}
            </Button>
          </Stack>
        </VStack>
      </Container>
    </>

  )
}

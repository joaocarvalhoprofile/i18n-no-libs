import { Center, Select, Stack } from "@chakra-ui/react"

import { LanguageTypes } from "../../../locales/lang"
import { useSession } from "../../core/hooks/useGlobalSession"

export function Header() {
  const { handleSelectLanguageType } = useSession()

  function handleSelectLanguage(e) {
    const languageType = e.target.value
    handleSelectLanguageType(languageType)
  }

  return (
    <Center bg='tomato' h='60px' color='white'>
      <Stack>
        <Select
          onChange={(e) => handleSelectLanguage(e)}
        >
          {Object.entries(LanguageTypes).map(([key, value]) => {
            return (
              <option key={key} value={value.id}>
                {value.name}
              </option>
            )
          })}
        </Select>
      </Stack>
    </Center >
  )
}

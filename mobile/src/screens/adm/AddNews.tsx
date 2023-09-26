import { NewsDTO } from '@dtos/NewsDTO'
import { api } from '@services/api'
import { useState } from 'react'
import { View } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { GradientButton } from '@components/GradientButton'

export function AddNews() {
  const [isLoading, setIsLoading] = useState(false)

  const { control, handleSubmit, setValue } = useForm<NewsDTO>({
    defaultValues: {
      title: '',
      body: '',
      link: '',
    },
  })

  async function handleAddNews({ title, body, link }: NewsDTO) {
    try {
      setIsLoading(true)
      await api.post(`/create-news`, {
        title,
        body,
        link,
      })
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{ padding: 40, alignItems: 'center', gap: 50 }}>
          <Controller
            control={control}
            name="title"
            render={({ field: { value, onChange } }) => (
              <Input
                multiline
                mode="outlined"
                label="Título"
                placeholder="Digite um nome"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="body"
            render={({ field: { value, onChange } }) => (
              <Input
                multiline
                numberOfLines={10}
                mode="outlined"
                label="Corpo"
                placeholder="Digite um título"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="link"
            render={({ field: { value, onChange } }) => (
              <Input
                mode="outlined"
                label="Link"
                placeholder="Digite o link"
                returnKeyType="next"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <GradientButton>Salvar</GradientButton>
        </View>
      )}
    </View>
  )
}

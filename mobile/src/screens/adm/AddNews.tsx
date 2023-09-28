import { api } from '@services/api'
import { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { GradientButton } from '@components/GradientButton'
import { AdmNavigatorRoutesProps } from '@routes/adm.routes'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type AddNews = {
  title: string
  body: string
  link?: string
}

const addNewsSchema = yup.object({
  title: yup.string().required('Notícia precisa de um título.'),
  body: yup.string().required('Notícia precisa de um corpo.'),
  link: yup.string(),
})

export function AddNews() {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<AdmNavigatorRoutesProps>()

  const { colors } = useTheme()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddNews>({
    resolver: yupResolver(addNewsSchema),
    defaultValues: {
      title: '',
      body: '',
      link: '',
    },
  })

  async function handleAddNews({ title, body, link }: AddNews) {
    try {
      setIsLoading(true)
      await api.post(`/create-news`, {
        title,
        body,
        link,
      })

      navigation.navigate('news')
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  function handleDeleteNewsContent() {
    setValue('title', '')
    setValue('body', '')
    setValue('link', '')
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            padding: 40,
            alignItems: 'center',
            gap: 50,
          }}
        >
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
                errorMessage={errors.title?.message}
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
                errorMessage={errors.body?.message}
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
          <View style={styles.buttonContainer}>
            <GradientButton fullHeight onPress={handleDeleteNewsContent}>
              Apagar
            </GradientButton>
            <GradientButton fullHeight onPress={handleSubmit(handleAddNews)}>
              Salvar
            </GradientButton>
          </View>
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 50,
  },
})

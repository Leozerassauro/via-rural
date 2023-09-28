import { Header } from '@components/Header'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Dialog,
  Divider,
  IconButton,
  Portal,
  Text,
  useTheme,
} from 'react-native-paper'
import { api } from '@services/api'
import { Fragment, useCallback, useState } from 'react'
import { NewsDTO } from '@dtos/NewsDTO'
import { BlurView } from 'expo-blur'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@components/Input'
import { GradientRoundedButton } from '@components/GradientRoundedButton'
import Entypo from '@expo/vector-icons/Entypo'
import { AdmNavigatorRoutesProps } from '@routes/adm.routes'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { GradientButton } from '@components/GradientButton'
import { openURL } from 'expo-linking'

export function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [newsList, setNewsList] = useState<NewsDTO[]>([])
  const [editDialog, setEditDialog] = useState(false)
  const [deleteDialog, setDeleteDialog] = useState(false)
  const [editFieldsDialog, setEditFieldsDialog] = useState(false)
  const [newsId, setNewsId] = useState('')
  const [newsData, setNewsData] = useState<NewsDTO>({} as NewsDTO)
  const navigation = useNavigation<AdmNavigatorRoutesProps>()
  const { control, handleSubmit, setValue } = useForm<NewsDTO>({
    defaultValues: {
      title: '',
      body: '',
      link: '',
    },
  })

  const openEditDialog = (data: NewsDTO) => {
    setEditDialog(true)
    setNewsId(data.id)
    setNewsData(data)
  }

  const hideEditDialog = () => setEditDialog(false)

  const openDeleteDialog = (data: NewsDTO) => {
    setDeleteDialog(true)
    setNewsId(data.id)
  }

  const hideDeleteDialog = () => setDeleteDialog(false)

  const openEditFieldsDialog = () => {
    setValue('title', newsData.title)
    setValue('body', newsData.body)
    setValue('link', newsData.link)
    setEditFieldsDialog(true)
  }

  const hideEditFieldsDialog = () => {
    hideEditDialog()
    setEditFieldsDialog(false)
  }

  const { colors } = useTheme()

  async function getNews() {
    try {
      setIsLoading(true)
      const { data } = await api.get('/get-news')

      setNewsList(data.news)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getNews()
    }, []),
  )

  async function handleDeleteNews(id: string) {
    try {
      setIsLoading(true)
      await api.delete(`/delete-news/${id}`)

      setNewsList((prevState) => prevState.filter((item) => item.id !== id))

      hideDeleteDialog()
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  async function handleEditNews({ title, body, link }: NewsDTO) {
    try {
      setIsLoading(true)
      await api.patch(`/edit-news/${newsId}`, {
        title,
        body,
        link,
      })

      const updatedNewsList = newsList.map((news) =>
        news.id === newsId ? { ...news, title, body, link } : news,
      )
      setNewsList(updatedNewsList)

      hideEditFieldsDialog()
    } catch (error) {
      console.log('Deu errado')
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
        <ScrollView
          persistentScrollbar={true}
          contentContainerStyle={{
            padding: 50,
            paddingBottom: 200,
            gap: 15,
            alignItems: 'center',
          }}
        >
          {newsList.map((news) => (
            <Fragment key={news.id}>
              <View style={styles.cardHeader}>
                <IconButton
                  icon="pencil-outline"
                  size={28}
                  onPress={() => openEditDialog(news)}
                />
                <Text
                  variant="headlineSmall"
                  style={{ flex: 1, textAlign: 'left' }}
                >
                  {news.title}
                </Text>
                <IconButton
                  icon="trash-can-outline"
                  size={28}
                  onPress={() => openDeleteDialog(news)}
                />
              </View>
              <Text variant="bodyLarge" style={{ textAlign: 'justify' }}>
                {news.body}
              </Text>
              {news.link && (
                <GradientButton onPress={() => openURL(news.link)}>
                  Ver notícia completa
                </GradientButton>
              )}
              <Divider bold style={{ width: '100%', marginBottom: 15 }} />
            </Fragment>
          ))}
        </ScrollView>
      )}
      <GradientRoundedButton
        icon={() => <Entypo name="plus" size={32} color={colors.background} />}
        onPress={() => navigation.navigate('addNews')}
      />
      <Portal>
        {editDialog && (
          <BlurView style={{ flex: 1 }} intensity={5} tint="light">
            <Dialog
              visible={editDialog}
              onDismiss={hideEditDialog}
              style={{
                backgroundColor: colors.background,
                borderWidth: 2,
                borderColor: colors.primary,
              }}
            >
              <Dialog.Actions style={{ flex: 1, paddingTop: 10 }}>
                <IconButton icon="close" onPress={hideEditDialog} />
              </Dialog.Actions>
              <Dialog.Content>
                <Text variant="bodyLarge">
                  Você quer <Text variant="titleLarge">editar</Text> essa
                  postagem?
                </Text>
              </Dialog.Content>
              <Dialog.Actions style={{ justifyContent: 'space-evenly' }}>
                <Button
                  mode="contained"
                  style={{
                    paddingHorizontal: 25,
                    paddingVertical: 8,
                  }}
                  onPress={openEditFieldsDialog}
                >
                  Sim
                </Button>
                <Button
                  mode="contained"
                  style={{ paddingHorizontal: 25, paddingVertical: 8 }}
                  onPress={hideEditDialog}
                >
                  Não
                </Button>
              </Dialog.Actions>
            </Dialog>
          </BlurView>
        )}
      </Portal>
      <Portal>
        {deleteDialog && (
          <BlurView style={{ flex: 1 }} intensity={5} tint="light">
            <Dialog
              visible={deleteDialog}
              onDismiss={hideDeleteDialog}
              style={{
                backgroundColor: colors.background,
                borderWidth: 2,
                borderColor: colors.primary,
              }}
            >
              <Dialog.Actions style={{ flex: 1, paddingTop: 10 }}>
                <IconButton icon="close" onPress={hideDeleteDialog} />
              </Dialog.Actions>
              <Dialog.Content>
                <Text variant="bodyLarge">
                  Você quer <Text variant="titleLarge">excluir</Text> essa
                  postagem?
                </Text>
              </Dialog.Content>
              <Dialog.Actions style={{ justifyContent: 'space-evenly' }}>
                <Button
                  mode="contained"
                  style={{
                    paddingHorizontal: 25,
                    paddingVertical: 8,
                  }}
                  onPress={() => handleDeleteNews(newsId)}
                >
                  Sim
                </Button>
                <Button
                  mode="contained"
                  style={{ paddingHorizontal: 25, paddingVertical: 8 }}
                  onPress={hideDeleteDialog}
                >
                  Não
                </Button>
              </Dialog.Actions>
            </Dialog>
          </BlurView>
        )}
      </Portal>
      <Portal>
        {editFieldsDialog && (
          <BlurView style={{ flex: 1 }} intensity={5} tint="light">
            <Dialog
              visible={editFieldsDialog}
              onDismiss={hideEditFieldsDialog}
              style={{
                backgroundColor: colors.background,
                borderWidth: 2,
                borderColor: colors.primary,
              }}
            >
              <Dialog.Actions style={{ flex: 1, paddingTop: 10 }}>
                <IconButton icon="close" onPress={hideEditFieldsDialog} />
              </Dialog.Actions>
              <Dialog.Title style={{ textAlign: 'center' }}>
                Editar postagem
              </Dialog.Title>
              <Dialog.Content>
                <Controller
                  control={control}
                  name="title"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      multiline
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
                      label="Link"
                      placeholder="Digite o link"
                      returnKeyType="next"
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />
              </Dialog.Content>
              <Dialog.Actions style={{ justifyContent: 'space-evenly' }}>
                <Button
                  mode="contained"
                  style={{
                    paddingHorizontal: 25,
                    paddingVertical: 8,
                  }}
                  onPress={handleSubmit(handleEditNews)}
                >
                  Salvar
                </Button>
              </Dialog.Actions>
            </Dialog>
          </BlurView>
        )}
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  surface: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

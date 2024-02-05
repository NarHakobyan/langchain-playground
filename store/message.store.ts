export const useMessageStore = defineStore('postFilterStore', () => {
  const messages = ref<Array<{message: string, sender: 'AI' | 'USER'}>>()

  async function sendMessage(text: string) {
    messages.value.push({ message: text, sender: 'USER' })

    await useFetch('/messages', {
      method: 'POST',
      body: JSON.stringify({ text }),
    })
  }

  return {
    messages,
    sendMessage,
  }
})

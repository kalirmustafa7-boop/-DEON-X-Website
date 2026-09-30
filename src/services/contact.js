const endpoint = 'https://api.web3forms.com/submit'
const accessKey = 'ba9ca8b6-4568-4841-b13d-d7678bbf7998'

export async function submitContact(payload) {
  const formData = new FormData()

  formData.append('access_key', accessKey)
  formData.append('name', payload.name)
  formData.append('email', payload.email)
  formData.append('message', payload.message)

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()

  if (!response.ok || !data.success) {
    const error = new Error('Contact request failed.')
    error.code = 'REQUEST_FAILED'
    throw error
  }

  return data
}
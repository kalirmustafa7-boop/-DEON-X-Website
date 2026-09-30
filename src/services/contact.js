const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

export async function submitContact(payload) {
  if (!endpoint) {
    const error = new Error('Contact endpoint is not configured.')
    error.code = 'NOT_CONFIGURED'
    throw error
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = new Error('Contact request failed.')
    error.code = 'REQUEST_FAILED'
    throw error
  }

  if (response.status === 204) return null
  return response.json()
}

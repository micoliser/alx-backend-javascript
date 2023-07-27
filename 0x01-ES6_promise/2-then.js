export default async function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .then(() => console.log('Got a response from the API'));
}

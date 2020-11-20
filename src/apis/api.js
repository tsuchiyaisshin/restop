import service from '../utils/service'

export const api = {
  async getRoute(origin) {
    await service
      .post('http://localhost:8080/getRoute', origin, {
        withCredentials: true,
      })
      .then(result => {
        window.console.log(result)
      })
      .catch(result => {
      })
  },
}

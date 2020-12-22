import service from '../utils/service'

export const api = {
  async getRoute(origin) {
    return await service
      .post('http://localhost:8080/getRoute', origin, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
      .catch(result => {})
  },
  async saveUser(name) {
    return await service
      .post('http://localhost:8080/user/save', {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
      .catch(result => {})
  },
  async updateUser(name) {
    return await service
      .post('http://localhost:8080/user/update', {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
      .catch(result => {})
  },
  async saveRoute() {},
}

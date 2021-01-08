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
  async saveUser(body) {
    return await service
      .post('http://localhost:8080/user/save', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
      .catch(result => {})
  },
  async updateUser(body) {
    return await service
      .post('http://localhost:8080/user/update', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
      .catch(result => {})
  },
  async getUser(body) {
    return await service
      .post('http://localhost:8080/user/get', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
      .catch(result => {
        this.saveUser(body)
      })
  },
  async getSpot(body) {
    return await service
      .post('http://localhost:8080/spot/get', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
  },
  async saveSpot(body) {
    return await service
      .post('http://localhost:8080/spot/save', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
  },
  async updateSpot(body) {
    return await service
      .post('http://localhost:8080/spot/update', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
  },
  async deleteSpot(body) {
    return await service
      .post('http://localhost:8080/spot/update', body, {
        withCredentials: true,
      })
      .then(result => {
        return result.data
      })
  },
  async saveRoute() {},
}

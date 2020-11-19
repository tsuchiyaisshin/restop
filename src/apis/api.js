import service from '../utils/service'

export const api = {
  async getRoute() {
    const params = new URLSearchParams()

    await service.get(
      'http://localhost:8080/getRoute',
      params,
      {
        withCredentials: true
      }
    ).then((result) => {
      window.console.log(result)
      window.console.log('成功')
    }).catch((result) => {
      window.console.log(result)
      window.console.log('失敗')
    })
  }
}

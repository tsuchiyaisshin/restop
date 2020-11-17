import service from "../utils/service";

export const api = {
  async getRoute () {
    const res = await service.get('@develop/getRoute/', {

    })
  }
}

// import { AppState } from '../AppState'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { api } from './AxiosService'
// import { api } from './AxiosService'
class VisitsService {
  async addNew(rawVisit) {
    console.log('visit service raw visit', rawVisit)
    try {
      const res = await api.post('api/visits', rawVisit)
      console.log(res.data)
      Pop.toast('success', 'success')
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }

  async getVisitsByMyRestaurantId(id) {
    try {
      const res = await api.get('api/myRestaurants/' + id + '/visits')
      console.log(res.data)
      AppState.visits = res.data
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const visitsService = new VisitsService()

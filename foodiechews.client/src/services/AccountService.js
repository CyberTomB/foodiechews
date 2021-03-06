import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { validateLocation } from '../utils/Validator'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
      logger.log('active location:', res.data.activeLocation)
      if (res.data.activeLocation) {
        Object.assign(AppState.lastActive, res.data.activeLocation)
      } else {
        Object.assign(AppState.lastActive, { city: '', state: '' })
        await this.addCity(AppState.activeLocation)
      }
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(rawAccount) {
    try {
      logger.log('This is your RawAccount', rawAccount)
      const res = await api.put('/account/' + rawAccount.id, rawAccount)
      logger.log('This is the account after edit:', res.data)
      AppState.account = res.data
    } catch (err) {
      logger.error('Failed Account Edit', err)
    }
  }

  async addCity(loc) {
    if (!(loc.city === AppState.lastActive.city && loc.state === AppState.lastActive.state)) {
      if (await validateLocation(loc)) {
        const foundLoc = AppState.account.location.find(l => {
          return (loc.city === l.city && loc.state === l.state)
        })
        if (!foundLoc) {
          AppState.account.location.push(loc)
        }
        AppState.lastActive = loc
        AppState.account.activeLocation = loc
        const res = await api.put('/account/' + AppState.account.id, AppState.account)
        AppState.account = res.data
        if (res.data) {
          return true
        }
        return false
      }
      return false
    }
    return true
  }

  async removeCity(loc) {
    const activeLoc = AppState.account.activeLocation
    AppState.account.location = AppState.account.location.filter(l =>
      (!(l.city === loc.city && l.state === loc.state))
    )
    if (loc.city === activeLoc.city && loc.state === activeLoc.state) {
      logger.log('In the if:', AppState.account.location)
      // NOTE funny too learn this: had activeLoc get re-assigned but that didn't work
      // Had to call AppState.account.activeLocation to make this work
      AppState.account.activeLocation = AppState.account.location[0]
      AppState.lastActive = AppState.account.activeLocation
    }
    logger.log('Past the if:', AppState.account.location)
    const res = await api.put('/account/' + AppState.account.id, AppState.account)
    AppState.account = res.data

    if (res.data) {
      return true
    }
    return false
  }

  async getAllMyRestaurants() {
    try {
      const res = await api.get('api/profiles/' + AppState.account.id + '/myRestaurants')
      AppState.myRestaurants = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const accountService = new AccountService()

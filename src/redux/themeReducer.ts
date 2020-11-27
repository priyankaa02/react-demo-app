import * as Actions from './themeActions'
import { defaultTheme } from '../themes'

const initialState = {
  theme: defaultTheme,
}

export const themeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload })
    default:
      return state
  }
}

import ilListData from '../data/ilList.json'
import Methods from '.'

const ilList = function ilList(this: Methods) {
  return {
    status: true,
    data: ilListData,
  }
}
export default ilList

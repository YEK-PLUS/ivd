import daireListData from '../data/daireList.json'
import Methods from '.'

const daireList = function daireList(
  this: Methods,
  props: {
    ilCode: string
  }
) {
  return {
    status: true,
    data: daireListData.filter((el) => el.ilCode === props.ilCode),
  }
}
export default daireList

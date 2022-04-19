import Org from './org'
import IlList from './ilList'
import DaireList from './daireList'
import Connector from '../connector'

class Methods {
  constructor(public connector: Connector = new Connector()) {}

  Org = Org

  IlList = IlList

  DaireList = DaireList
}
export default Methods

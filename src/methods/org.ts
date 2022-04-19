import Methods from '.'
import { Base, Get, Token, ErrorText, MainPage } from '../config'

interface IResponse {
  messages: string[]
  data: {
    durum: string
    tckn: string
    durum_text: string
    vkn: string
    vdkodu: string
    sorgulayantckimlik: string
    unvan: string
  }
}

const check = async function Check(
  this: Methods,
  props: {
    ilCode: string
    vdCode: string
    tckNo: string
    vNo: string
  }
) {
  const response = await this.connector
    .fetch(Base + MainPage, {
      body: {
        token: Token,
        cmd: Get.Command,
        pageName: Get.PageName,
        jp: JSON.stringify({
          dogrulama: {
            vkn1: props.vNo || '',
            tckn1: props.tckNo || '',
            iller: props.ilCode,
            vergidaireleri: props.vdCode,
          },
        }),
      },
    })
    .then((res) => res.json())
    .then(({ data, messages }: IResponse) => ({
      status: data.durum,
      status_text: data.durum_text,
      tckNo: data.tckn,
      vkNo: data.vkn,
      vdCode: data.vdkodu,
      title: data.unvan,
      valid: messages
        ? messages[0].includes(ErrorText)
        : Object.keys(data || {}).length !== 0,
    }))
  return {
    status: true,
    data: response,
  }
}
export default check

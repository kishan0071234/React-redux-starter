import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-MK3FQPK'
}

export default{
  handlePage:(type,payload)=>{
    TagManager.initialize(tagManagerArgs);
    window.dataLayer.push({
      event: type,
      payload:payload
    });
  }
}

import AnalyticsTagManager from '../components/analytics/AnalyticsManager';
import  { useEffect } from 'react';

const analyticsManagerMiddleware= store =>next=>action=>{
    try{
      const result= next(action);
      AnalyticsTagManager.handlePage(result.type,result.payload);
    }catch(err){
        throw err;
    }
};

export default analyticsManagerMiddleware;
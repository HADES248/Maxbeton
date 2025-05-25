
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import config from '@/config';

const useAnalytics = () => {
  const location = useLocation();
  const isInitialized = ReactGA.isInitialized;

  useEffect(() => {
    if (config.gaMeasurementId && config.gaMeasurementId !== 'G-XXXXXXXXXX' && !isInitialized) {
      ReactGA.initialize(config.gaMeasurementId);
      console.log('Google Analytics Initialized');
    }
  }, [isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      console.log(`GA Pageview Sent: ${location.pathname + location.search}`);
    }
  }, [location, isInitialized]);
};

export default useAnalytics;

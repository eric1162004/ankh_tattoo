// GoogleTagManager.js

import React, { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-HX9RWF41L5";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-HX9RWF41L5');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTagManager;

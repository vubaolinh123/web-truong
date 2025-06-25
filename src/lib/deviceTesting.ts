// Device testing and responsive design utilities

export interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  os: string;
  browser: string;
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  touchSupport: boolean;
  orientation: 'portrait' | 'landscape';
}

// Detect device information
export const getDeviceInfo = (): DeviceInfo => {
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const pixelRatio = window.devicePixelRatio || 1;
  const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Detect device type
  let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
  if (screenWidth <= 768) {
    type = 'mobile';
  } else if (screenWidth <= 1024) {
    type = 'tablet';
  }
  
  // Detect OS
  let os = 'Unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS';
  
  // Detect browser
  let browser = 'Unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  
  // Detect orientation
  const orientation = screenWidth > screenHeight ? 'landscape' : 'portrait';
  
  return {
    type,
    os,
    browser,
    screenWidth,
    screenHeight,
    pixelRatio,
    touchSupport,
    orientation
  };
};

// Test responsive breakpoints
export const testBreakpoints = () => {
  const breakpoints = {
    'iPhone SE': { width: 375, height: 667 },
    'iPhone 12': { width: 390, height: 844 },
    'iPad': { width: 768, height: 1024 },
    'iPad Pro': { width: 1024, height: 1366 },
    'Desktop': { width: 1920, height: 1080 }
  };
  
  const results: Record<string, boolean> = {};
  
  Object.entries(breakpoints).forEach(([device, dimensions]) => {
    // Simulate viewport size
    const mediaQuery = `(max-width: ${dimensions.width}px)`;
    results[device] = window.matchMedia(mediaQuery).matches;
  });
  
  return results;
};

// Test touch interactions
export const testTouchSupport = () => {
  const tests = {
    touchEvents: 'ontouchstart' in window,
    pointerEvents: 'onpointerdown' in window,
    maxTouchPoints: navigator.maxTouchPoints > 0,
    msMaxTouchPoints: (navigator as any).msMaxTouchPoints > 0
  };
  
  return {
    supported: Object.values(tests).some(Boolean),
    details: tests
  };
};

// Test performance on different devices
export const testPerformance = () => {
  const start = performance.now();
  
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.random();
  }
  
  const end = performance.now();
  const duration = end - start;
  
  let performance_level: 'high' | 'medium' | 'low' = 'high';
  if (duration > 100) performance_level = 'low';
  else if (duration > 50) performance_level = 'medium';
  
  return {
    duration,
    performance_level,
    timestamp: new Date().toISOString()
  };
};

// Test network conditions
export const testNetworkConditions = () => {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (connection) {
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
  }
  
  return null;
};

// Accessibility testing
export const testAccessibility = () => {
  const tests = {
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    highContrast: window.matchMedia('(prefers-contrast: high)').matches,
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    keyboardNavigation: document.activeElement !== null
  };
  
  return tests;
};

// Comprehensive device testing report
export const generateTestReport = () => {
  const deviceInfo = getDeviceInfo();
  const breakpoints = testBreakpoints();
  const touchSupport = testTouchSupport();
  const performance = testPerformance();
  const network = testNetworkConditions();
  const accessibility = testAccessibility();
  
  const report = {
    timestamp: new Date().toISOString(),
    deviceInfo,
    breakpoints,
    touchSupport,
    performance,
    network,
    accessibility,
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
  
  console.log('Device Testing Report:', report);
  return report;
};

// Monitor viewport changes
export const monitorViewportChanges = (callback: (viewport: { width: number; height: number }) => void) => {
  const handleResize = () => {
    callback({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize);
  };
};

// Test critical rendering path
export const testCriticalRenderingPath = () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (navigation) {
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
  }
  
  return null;
};

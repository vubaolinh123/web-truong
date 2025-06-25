'use client';

import { useState, useEffect } from 'react';
import { generateTestReport, monitorViewportChanges, type DeviceInfo } from '@/lib/deviceTesting';

const DeviceTestPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testReport, setTestReport] = useState<any>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    // Initial viewport
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Monitor viewport changes
    const cleanup = monitorViewportChanges(setViewport);

    return cleanup;
  }, []);

  const runTests = () => {
    const report = generateTestReport();
    setTestReport(report);
  };

  const getDeviceClass = (width: number) => {
    if (width <= 320) return 'iPhone SE';
    if (width <= 375) return 'iPhone';
    if (width <= 768) return 'Mobile';
    if (width <= 1024) return 'Tablet';
    return 'Desktop';
  };

  const getPerformanceColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Device Test Panel"
      >
        🔧
      </button>

      {/* Test Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 z-50 bg-black/90 text-white p-6 rounded-lg shadow-xl max-w-md max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Device Test Panel</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Current Viewport */}
          <div className="mb-4 p-3 bg-gray-800 rounded">
            <h4 className="font-semibold mb-2">Current Viewport</h4>
            <div className="text-sm">
              <div>Size: {viewport.width} × {viewport.height}</div>
              <div>Device: {getDeviceClass(viewport.width)}</div>
              <div>Ratio: {window.devicePixelRatio || 1}</div>
            </div>
          </div>

          {/* Test Button */}
          <button
            onClick={runTests}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mb-4"
          >
            Run Device Tests
          </button>

          {/* Test Results */}
          {testReport && (
            <div className="space-y-3">
              {/* Device Info */}
              <div className="p-3 bg-gray-800 rounded">
                <h4 className="font-semibold mb-2">Device Info</h4>
                <div className="text-sm space-y-1">
                  <div>Type: {testReport.deviceInfo.type}</div>
                  <div>OS: {testReport.deviceInfo.os}</div>
                  <div>Browser: {testReport.deviceInfo.browser}</div>
                  <div>Touch: {testReport.touchSupport.supported ? '✅' : '❌'}</div>
                </div>
              </div>

              {/* Performance */}
              <div className="p-3 bg-gray-800 rounded">
                <h4 className="font-semibold mb-2">Performance</h4>
                <div className="text-sm">
                  <div className={getPerformanceColor(testReport.performance.performance_level)}>
                    Level: {testReport.performance.performance_level}
                  </div>
                  <div>Duration: {testReport.performance.duration.toFixed(2)}ms</div>
                </div>
              </div>

              {/* Network */}
              {testReport.network && (
                <div className="p-3 bg-gray-800 rounded">
                  <h4 className="font-semibold mb-2">Network</h4>
                  <div className="text-sm space-y-1">
                    <div>Type: {testReport.network.effectiveType}</div>
                    <div>Speed: {testReport.network.downlink} Mbps</div>
                    <div>RTT: {testReport.network.rtt}ms</div>
                  </div>
                </div>
              )}

              {/* Accessibility */}
              <div className="p-3 bg-gray-800 rounded">
                <h4 className="font-semibold mb-2">Accessibility</h4>
                <div className="text-sm space-y-1">
                  <div>Reduced Motion: {testReport.accessibility.reducedMotion ? '✅' : '❌'}</div>
                  <div>High Contrast: {testReport.accessibility.highContrast ? '✅' : '❌'}</div>
                  <div>Dark Mode: {testReport.accessibility.darkMode ? '✅' : '❌'}</div>
                </div>
              </div>

              {/* Breakpoint Tests */}
              <div className="p-3 bg-gray-800 rounded">
                <h4 className="font-semibold mb-2">Breakpoints</h4>
                <div className="text-sm space-y-1">
                  {Object.entries(testReport.breakpoints).map(([device, matches]) => (
                    <div key={device}>
                      {device}: {matches ? '✅' : '❌'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <h4 className="font-semibold mb-2">Quick Actions</h4>
            <div className="space-y-2">
              <button
                onClick={() => window.open('https://developers.google.com/web/tools/lighthouse', '_blank')}
                className="w-full text-left text-sm text-blue-400 hover:text-blue-300"
              >
                🔍 Run Lighthouse Audit
              </button>
              <button
                onClick={() => console.log('Test Report:', testReport)}
                className="w-full text-left text-sm text-blue-400 hover:text-blue-300"
              >
                📋 Log Report to Console
              </button>
              <button
                onClick={() => {
                  const data = JSON.stringify(testReport, null, 2);
                  const blob = new Blob([data], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'device-test-report.json';
                  a.click();
                }}
                className="w-full text-left text-sm text-blue-400 hover:text-blue-300"
              >
                💾 Download Report
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeviceTestPanel;

// Function to get browser-related information
function getBrowserInfo() {
    const userAgent = navigator.userAgent;

    // Browser Detection
    let browserName = "Unknown Browser";
    let browserVersion = "Unknown Version";

    if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edge') === -1 && userAgent.indexOf('OPR') === -1) {
        browserName = 'Google Chrome';
        browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
    } else if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
        browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
    } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
        browserName = 'Apple Safari';
        browserVersion = userAgent.match(/Version\/(\d+)/)[1];
    } else if (userAgent.indexOf('MSIE') > -1 || !!document.documentMode) {
        browserName = 'Internet Explorer';
        browserVersion = userAgent.match(/MSIE (\d+)/)[1];
    } else if (userAgent.indexOf('Edge') > -1) {
        browserName = 'Microsoft Edge';
        browserVersion = userAgent.match(/Edge\/(\d+)/)[1];
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
        browserVersion = userAgent.match(/OPR\/(\d+)/)[1];
    }

    return `User Agent: ${navigator.userAgent}\n` +
           `Browser: ${browserName}\n` +
           `Browser Version: ${browserVersion}\n` +
           `Device Memory: ${navigator.deviceMemory || '-'} GB\n` +
           `Hardware Concurrency: ${navigator.hardwareConcurrency || '-'} cores\n`;
}

// Function to get graphics-related information
function getGraphicsInfo() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        return 'WebGL not supported\n\n';
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    const graphicsInfo = {
        renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
        version: gl.getParameter(gl.VERSION),
        shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION)
    };

    return `Graphics Renderer: ${graphicsInfo.renderer}\n` +
           `Graphics Vendor: ${graphicsInfo.vendor}\n` +
           `WebGL Version: ${graphicsInfo.version}\n` +
           `Shading Language Version: ${graphicsInfo.shadingLanguageVersion}\n` +
           `Screen Size: ${screen.width}x${screen.height}\n` +
           `Color Depth: ${screen.colorDepth}-bit\n`;
}

// Function to get the user's IP address and geolocation
async function getIPAddressAndLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const ipAddress = data.ip || 'N/A';
        const city = data.city || 'N/A';
        const region = data.region || 'N/A';
        const country = data.country_name || 'N/A';
        const latitude = data.latitude || 'N/A';
        const longitude = data.longitude || 'N/A';
        const isp = data.org || 'N/A';
        const netData = data.network || 'N/A';
        const proxy = data.proxy ? 'Yes' : 'No';

        return `IP Address: ${ipAddress}\n` +
               `Network Data: ${netData}\n` +
               `Proxy: ${proxy}\n` +
               `ISP: ${isp}\n` +
               `Location: ${city}, ${region}, ${country}\n` +
               `Geolocation: ${latitude}, ${longitude}\n`;
    } catch (error) {
        return 'Unable to retrieve IP and location information.\n';
    }
}

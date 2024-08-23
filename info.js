// info.js

function getBrowserInfo() {
    return new Promise((resolve, reject) => {
        let info = '';

        // User Agent
        const userAgent = navigator.userAgent;
        info += `User Agent: ${userAgent}\n`;

        // Browser Detection
        let browserName = "Unknown Browser";
        let browserVersion = "Unknown Version";

        if (userAgent.indexOf('Chrome') > -1) {
            browserName = 'Google Chrome';
            browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
        } else if (userAgent.indexOf('Firefox') > -1) {
            browserName = 'Mozilla Firefox';
            browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
        } else if (userAgent.indexOf('Safari') > -1) {
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

        info += `Browser Name: ${browserName}\n`;
        info += `Browser Version: ${browserVersion}\n\n`;

        // Screen Information
        info += `Screen Width: ${screen.width}px\n`;
        info += `Screen Height: ${screen.height}px\n`;
        info += `Available Screen Width: ${screen.availWidth}px\n`;
        info += `Available Screen Height: ${screen.availHeight}px\n`;
        info += `Color Depth: ${screen.colorDepth}-bit\n\n`;

        // Device Information
        info += `Device Memory: ${navigator.deviceMemory || 'Not available'} GB\n`;
        info += `Hardware Concurrency: ${navigator.hardwareConcurrency || 'Not available'} cores\n\n`;

        // IP Address and Geolocation
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                const lat = data.latitude || 'Not available';
                const lon = data.longitude || 'Not available';
                info += `IP Address: ${ip}\n`;
                info += `Latitude: ${lat}\n`;
                info += `Longitude: ${lon}\n\n`;

                // Resolve with the information
                resolve(info);
            })
            .catch(error => {
                console.error('Error fetching IP-based location:', error);
                info += `IP Address and Location: Unable to retrieve\n`;

                // Resolve with the information
                resolve(info);
            });
    });
}

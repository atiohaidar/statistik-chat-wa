// Service Worker for WhatsApp Chat Viewer PWA
const CACHE_NAME = 'whatsapp-chat-viewer-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    // Font Awesome fonts
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-solid-900.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-brands-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-solid-900.ttf',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-regular-400.ttf',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-brands-400.ttf'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching files');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('Service Worker: Cache failed', error);
            })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http(s) requests
    if (!event.request.url.startsWith('http')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                if (response) {
                    console.log('Service Worker: Serving from cache', event.request.url);
                    return response;
                }

                console.log('Service Worker: Fetching from network', event.request.url);
                return fetch(event.request).then((response) => {
                    // Don't cache if not a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }).catch((error) => {
                    console.log('Service Worker: Network fetch failed', error);
                    // Return a custom offline page or message if available
                    if (event.request.destination === 'document') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

// Handle background sync for future offline functionality
self.addEventListener('sync', (event) => {
    console.log('Service Worker: Background sync', event.tag);
    // Future: Handle background sync for data upload when online
});

// Handle push notifications (for future features)
self.addEventListener('push', (event) => {
    console.log('Service Worker: Push received', event);
    // Future: Handle push notifications
});

// Periodic background sync (for future features)
self.addEventListener('periodicsync', (event) => {
    console.log('Service Worker: Periodic sync', event.tag);
    // Future: Handle periodic background tasks
});

// Share target handling (for future features)
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Handle share target
    if (url.pathname === '/share-target' && event.request.method === 'POST') {
        event.respondWith(handleShareTarget(event.request));
    }
});

async function handleShareTarget(request) {
    // Future: Handle shared files from other apps
    console.log('Service Worker: Share target received');
    return Response.redirect('/', 302);
}

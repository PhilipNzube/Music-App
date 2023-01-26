let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/manifest.json',
                '/static/media/FeelAlone.048a0626fc01586d2f59.mp3',
                '/static/media/Def.001c19cec1594549368f.png',
                '/static/media/BackButton.f472b14156a4ad1932a3.png',
                '/static/media/PreviousSeek.3acb2fc30b187c0758bc.png',
                '/static/media/NextSeek.f8bcd9fc74ce921c86eb.png',
                '/static/media/Play%20Button%20Png%20For%20Player.fd6db6b317f58816649f.png',
                '/static/media/Volume.281ffbb19d41b302d5c7.png',
                '/static/media/MuteVolume.17e42bba0f6b5de4a4bc.png',
                '/static/media/NicePng_search-button-png-transparent_8539483.1f2ac9129aa7369a76e5.png',
                '/static/media/DreamVilleCover.17bea29535379ae7aeb1.jpg',
                '/static/media/DJKhalidCover.5f80b8d1306687dc5af9.jpg',
                '/static/media/JuicePoster.1f66a9986f379837b770.jpg',
                '/static/media/BurnaBoyCover.b22a11c59957b890df52.jpg',
                '/static/media/NBACover.67ef1d09d0f3ad1a48ae.jpg',
                '/static/media/GunnaCover.22901ac1996a7b9d647d.jpg',
                '/static/media/DrakeCover.387183bc17f3acf3ecad.jpg',
                '/static/media/NFCover.97e422063da6a23ca903.jpg',
                '/static/media/Trippie%20Red%20Cover.43875b64aa09aee79ccd.jpg',
                '/static/media/NoUserIcon.cafab3219dab5d0a44ae.png',
                'static/media/PauseButton.dc0699633a71f4eee247.png',
                '/static/js/main.a750fb0b.js',
                '/static/css/main.a86d0a69.css',
                '/ICON.png',
                '/ICON192.png',
                '/ICON512.png',
                '/index.html',
                '/'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        console.log("OFFLINE!!");
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    } else {
        console.log("ONLINE!!!");
    }
})
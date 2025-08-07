const source = 'https://edge3-moblive.yuppcdn.net/drm1/smil:videsa10-11drm.smil/playlist.m3u8'; // Replace with your link
const video = document.getElementById('player');

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(source);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = source;
  video.addEventListener('loadedmetadata', function () {
    video.play();
  });
}

const player = new Plyr(video);

(()=>{
const zh=document.documentElement.lang.toLowerCase().startsWith('zh');
document.querySelectorAll('video').forEach(video=>{
 const status=document.createElement('p');status.className='video-status';status.setAttribute('role','status');status.textContent=zh?'点击播放视频。':'Play the video.';video.insertAdjacentElement('afterend',status);
 video.addEventListener('loadedmetadata',()=>{if(Number.isFinite(video.duration))status.textContent=zh?'片长 '+video.duration.toFixed(1)+' 秒 · 可使用时间轴跳转。':'Duration '+video.duration.toFixed(1)+' s · Use the timeline to navigate.';});
 video.addEventListener('error',()=>{status.dataset.error='true';status.textContent=zh?'视频加载失败，请重试或直接打开文件。':'Video could not load. Retry or open the file directly.';});
 video.addEventListener('playing',()=>{status.textContent=zh?'正在播放':'Playing';});
 const source=video.querySelector('source')?.getAttribute('src')||video.getAttribute('src');if(source){const link=document.createElement('a');link.href=source;link.textContent=zh?'打开视频 ↗':'Open video ↗';link.className='media-caption';link.target='_blank';link.rel='noopener noreferrer';status.insertAdjacentElement('afterend',link);}
});
const filter=document.querySelector('#matrix-filter');if(filter)filter.addEventListener('input',()=>{const query=filter.value.toLowerCase();document.querySelectorAll('#matrix tbody tr').forEach(row=>{row.hidden=!row.textContent.toLowerCase().includes(query);});});
})();

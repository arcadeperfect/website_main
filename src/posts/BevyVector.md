<!-- ---
title: "Bevy Vector Style"
layout: layouts/post.njk
order: 2
colorScheme: 2
---

<!-- <div class="video-wrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/LJN3EgiLoIY?si=WCSg9n9OQ3ogh2ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

<div id="wasm-container"></div>


<br>

Bevy vector style is a graphic style for Rustroneer

<br>



<script type="module">
    import init from 'https://arcadeperfect.github.io/bevy_wireframe/out/bevy_wireframe.js';
    
    async function run() {
        const wasmContainer = document.getElementById('wasm-container');
        
        const observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (node.tagName === 'CANVAS') {
                        node.style.width = '100%';
                        node.style.height = '100%';
                        wasmContainer.appendChild(node);
                        observer.disconnect();
                    }
                }
            }
        });

        observer.observe(document.body, { childList: true });

        await init();
    }

    run();
</script> -->
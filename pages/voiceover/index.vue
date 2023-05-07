<template>
    <main class="text-white">
        <div class="w-full mx-auto mail--law px-8 md:px-24 overflow-y-scroll lg:overflow-hidden">
            <div class="w-full lg:w-10/12 mx-auto">
                <navbar/>
            </div>
            <div class="flex flex-col lg:flex-row mx-auto w-full lg:w-10/12">
                <div>
                    <section class="body mt-4 flex flex-row justify-center items-center">
                        <div class="flex flex-col items-center">
                            <p class="mb-1 text-xs bg-white rounded-full text-black p-2">
                                🎙️Voiceover
                            </p>
                            <p class="w-full lg:w-2/3 mt-2 text-center text-3xl md:text-6xl font-gambetta">Use the best
                                voice possible to engage
                                your
                                audience.</p>
                            <button @click="play"
                                    class="bg-amber-50 hover:bg-amber-100 px-12 py-3 rounded mt-8 text-black">
                                <span v-if="!isPlaying">Listen</span>
                                <span class="bg-amber-50 boxContainer" v-else>
                                    <span class="box box1 bg-amber-50"></span>
                                    <span class="box box2 bg-amber-50"></span>
                                    <span class="box box3 bg-amber-50"></span>
                                    <span class="box box4 bg-amber-50"></span>
                                    <span class="box box5 bg-amber-50"></span>
                                </span>
                            </button>
                        </div>
                    </section>
                    <section class="hidden lg:flex flex-row justify-between items-start">
                        <div class="flex flex-col items-start text-left mr-8">
          <span class="flex flex-row bg-amber-50 bg-opacity-50 mb-2">
            <span class="p-2 bg-amber-50 text-black">Contact Us</span>
            <span class="text-xs w-[175px]">&nbsp;</span>
          </span>
                            <span>Abuja, Abuja FCT, NG</span>
                            <span>BisolaWidlin@gmail.com</span>
                            <span>+234 813 489 3527</span>
                            <span>+234 812 575 7578</span>
                            <span class="mt-2 flex flex-row">
           <a href="https://www.instagram.com/bisola_widlin/" target="_blank" class="mr-2 mt-1">
              <img src="/shared/icons/instagram.svg" alt="Instagram" class="mr-2"/>
            </a>
            <a href="https://twitter.com/BisolaWidlin" target="_blank" class="mr-2 mt-1">
              <img src="/shared/icons/twitter.svg" alt="Twitter" class="mr-2"/>
            </a>
            <a href="https://www.youtube.com/@CANTORANDTHEWORD" target="_blank" class="mr-2">
              <img src="/shared/icons/icons8-youtube-50.png" alt="Youtube" class="mr-2 h-8"/>
            </a>
          </span>
                        </div>
                    </section>
                </div>
                <div class="flex flex-col justify-end overflow-x-hidden">
                    <span class="uppercase text-xs mb-1">Corporate Voiceover</span>
                    <WaveSurf ref="refWaveSurfer" :src="selectedAudioFile.src" :options="waveSurferOption"/>
                    <span class="text-xs mt-1">Welcome to our company</span>
                    <button @click="toggleShowMore" class="uppercase text-xs underline self-start mt-2">View {{
                        showMore ? 'Less' : 'More'
                        }}
                    </button>
                    <div id="more">
                        <ul class="flex flex-col mt-4 mb-4 h-full overflow-y-auto">
                            <li v-for="audioFile in audioFiles" :key="audioFile.name" class="mr-4 flex flex-col mb-3">
                <span class="flex flex-row mb-1">
                  <img src="/voiceover/audio-wave.svg" alt="Audio Wave">
                  <button @click="selectAudioFile(audioFile)" class="ml-3">
                    <img :src="selectedAudioFile === audioFile && isPlaying ? '/voiceover/pause.png' : '/voiceover/play.svg'"
                         alt="Play/Pause" class="h-4">
                  </button>
                </span>
                                <span class="text-xs">{{ audioFile.name }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section class="flex lg:hidden flex-row justify-between items-start mb-2 mt-8">
                    <div class="flex flex-col items-start text-left mr-8">
          <span class="flex flex-row bg-amber-50 bg-opacity-50 mb-2">
            <span class="p-2 bg-amber-50 text-black">Contact Us</span>
            <span class="text-xs w-[175px]">&nbsp;</span>
          </span>
                        <span>Abuja, Abuja FCT, NG</span>
                        <span>BisolaWidlin@gmail.com</span>
                        <span>+234 813 489 3527</span>
                        <span>+234 812 575 7578</span>
                        <span class="mt-2 flex flex-row">
           <a href="https://www.instagram.com/bisola_widlin/" target="_blank" class="mr-2 mt-1">
              <img src="/shared/icons/instagram.svg" alt="Instagram" class="mr-2"/>
            </a>
            <a href="https://twitter.com/BisolaWidlin" target="_blank" class="mr-2 mt-1">
              <img src="/shared/icons/twitter.svg" alt="Twitter" class="mr-2"/>
            </a>
            <a href="https://www.youtube.com/@CANTORANDTHEWORD" target="_blank" class="mr-2">
              <img src="/shared/icons/icons8-youtube-50.png" alt="Youtube" class="mr-2 h-8"/>
            </a>
          </span>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script setup>
import Navbar from "~/pages/voiceover/components/navbar.vue";
import WaveSurf from "~/pages/voiceover/components/WaveSurf.vue";

const showMore = ref(false);

const props = defineProps({
    slice: {
        type: Boolean,
        required: false,
        default: false
    },
});

const waveSurferOption = {
    height: 80,
    progressColor: '#FCEDD0',
    waveColor: '#e7e7e7',
    cursorColor: '#FFDDDD',
    barWidth: 2,
    mediaControls: false,
    backend: 'MediaElement',
    scrollParent: false,
    xhr: {
        mode: 'no-cors'
    },
    responsive: true,
}

const refWaveSurfer = ref(null);

const audioFiles = [
    {
        name: `The Voice of Bisola`,
        src: `https://d2k93i6n4e2lyp.cloudfront.net/voiceover/audio/THE VOICE OF BISOLA WIDLIN.mp3`,
        date: 'Tue, 01 May 2023'
    },
    {
        name: `The Book of Jonah`,
        src: `https://d2k93i6n4e2lyp.cloudfront.net/voiceover/audio/THE BOOK OF JONAH.mp3`,
        date: 'Tue, 01 May 2023'
    },
    {
        name: 'Intro',
        src: 'https://d2k93i6n4e2lyp.cloudfront.net/voiceover/audio/intro.mov',
        date: 'Tue, 01 May 2023'
    },
    {
        name: 'Outro',
        src: 'https://d2k93i6n4e2lyp.cloudfront.net/voiceover/audio/outro.mov',
        date: 'Tue, 01 May 2023'
    },
    {
        name: 'Different Voices',
        src: 'https://d2k93i6n4e2lyp.cloudfront.net/voiceover/audio/different voices.mov',
        date: 'Tue, 01 May 2023'
    },
    {
        name: 'Why choose us',
        src: 'https://d2k93i6n4e2lyp.cloudfront.net/voiceover/audio/why choose us.mov',
        date: 'Tue, 01 May 2023'
    }
]

let selectedAudioFile = audioFiles[0];
const isPlaying = ref(false);

function play() {
    if (isPlaying.value) {
        refWaveSurfer.value.waveSurfer.pause();
        isPlaying.value = false;
    } else {
        refWaveSurfer.value.waveSurfer.play();
        isPlaying.value = true;
    }
}

function selectAudioFile(audioFile) {
    if (selectedAudioFile === audioFile) {
        play();
        return;
    }
    selectedAudioFile = audioFile;
    refWaveSurfer.value.waveSurfer.load(selectedAudioFile.src);
    isPlaying.value = false;
    play();
}

function scrollDown() {
    const el = document.querySelector('#more');
    el.scrollIntoView({behavior: 'smooth'});
}

function toggleShowMore() {
    const moreEl = document.querySelector('#more');

    if (showMore.value) {
        moreEl.classList.remove('show');
    } else {
        moreEl.classList.add('show');
        scrollDown();
    }

    showMore.value = !showMore.value;
}

//after view is initialized play the audio
onMounted(() => {
    setTimeout(() => {
        refWaveSurfer.value.waveSurfer.play();
        isPlaying.value = true;
    }, 1000);
})

</script>

<style scoped>
#more {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
}

#more.show {
    max-height: 300px; /* set the maximum height of the element */
}

@media screen and (max-width: 768px) {

    #more.show {
        max-height: fit-content; /* set the maximum height of the element */
    }
}

main {
    background: #080808;
}

.mail--law {
    background-color: #1e1e1e;
    min-height: 100vh;
    background-image: url("https://d2k93i6n4e2lyp.cloudfront.net/voiceover/background2.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
}

.bg-primary {
    background: #FCEDD0;
}

.text-primary {
    color: #FCEDD0;
}

.body {
    height: calc(100vh - 295px);
    padding-top: 10rem;
    padding-bottom: 10rem;
}

@keyframes quiet {
    25% {
        transform: scaleY(.6);
    }
    50% {
        transform: scaleY(.4);
    }
    75% {
        transform: scaleY(.8);
    }
}

@keyframes normal {
    25% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(.4);
    }
    75% {
        transform: scaleY(.6);
    }
}

@keyframes loud {
    25% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(.4);
    }
    75% {
        transform: scaleY(1.2);
    }
}

.boxContainer {
    display: flex;
    justify-content: space-between;
    height: 24px;
    --boxSize: 8px;
    --gutter: 4px;
    width: calc((var(--boxSize) + var(--gutter)) * 3.7);
    background: rgb(255 251 235 / 50%);
}

.box {
    transform: scaleY(.4);
    height: 100%;
    width: 3px;
    background: black;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    border-radius: 8px;
}

.box1 {
    animation-name: quiet;
}

.box2 {
    animation-name: normal;
}

.box3 {
    animation-name: quiet;
}

.box4 {
    animation-name: loud;
}

.box5 {
    animation-name: quiet;
}
</style>

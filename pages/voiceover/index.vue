<template>
    <main class="text-white">
        <div class="w-full lg:w-10/12 mx-auto mail--law px-8 md:px-24 overflow-y-scroll lg:overflow-hidden">
            <navbar/>
            <div class="flex flex-col lg:flex-row">
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
                                <img src="/voiceover/playing.gif" alt="Playing" class="bg-transparent" v-else>
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
            <img src="/shared/icons/instagram.svg" alt="Instagram" class="mr-2"/>
            <img src="/shared/icons/twitter.svg" alt="Twitter" class="mr-2"/>
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
                    <div v-if="showMore">
                        <ul class="flex flex-col mt-4 mb-4 max-h-64 overflow-y-auto">
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
}

const refWaveSurfer = ref(null);

const audioFiles = [
    {
        name: `The Voice of Bisola`,
        src: `/voiceover/audio/THE VOICE OF BISOLA WIDLIN.mp3`,
        date: 'Tue, 01 May 2023'
    },
    {
        name: `The Book of Jonah`,
        src: `/voiceover/audio/THE BOOK OF JONAH.mp3`,
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

function toggleShowMore() {
    showMore.value = !showMore.value;
}

</script>

<style scoped>
main {
    background: black;
    /*clip-path: inset(0 30% 0 0);*/
    /*width: 70%;*/
    /*overflow-x: hidden !important;*/
}

.mail--law {
    background-color: #1e1e1e;
    min-height: 100vh;
    background-image: url("/voiceover/background2.svg");
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
</style>

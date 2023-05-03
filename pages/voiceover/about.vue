<template>
    <main>
        <div
                class="main text-white h-auto lg:h-screen w-full mx-auto mail--law px-8 md:px-24 overflow-x-hidden ">
            <div class="w-full lg:w-10/12 mx-auto">
                <navbar/>
                <section
                    class="text-center w-full lg:w-3/4 mx-auto flex flex-row mt-40 items-start justify-between pb-24">
                    <div class="w-full lg:w-3/5 flex flex-col items-start">
                        <span class="rounded-full w-fit py-2 px-2 text-sm text-black bg-white mb-8">☺️About Me</span>
                        <p class="text-left mb-4 font-gambetta text-lg">
                            BISOLA WIDLIN is a professional voice over artist that provides voice overs services for your
                            every
                            voice
                            need including commercials (jingles), e-learning, audio ebooks ,voice in animations, movie
                            trailers and
                            documentaries.
                        </p>
                        <p class="text-left mb-4 font-gambetta text-lg">
                            Time is of the essence hence, delivery is right on time without compromise on quality <br>
                            Be sure to check the Audio Demo page for voice samples. Send a mail and do not hesitate to call.
                        </p>
                    </div>
                    <div class="w-2/5 hidden lg:flex flex-row justify-end m-4">
                        <img src="/voiceover/hero.png" alt="Happy Children" class="w-full ml-auto max-w-[400px]">
                    </div>
                </section>
                <div class="border-b  border-opacity-10 pb-8 text-3xl lg:text-4xl font-sora">
                    Vocal Characteristics
                </div>
                <section>
                    <div class="flex flex-row justify-between mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="w-ful">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Languages
                                </div>
                                <div class="font-sora mt-4">
                                    English, Yoruba
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Accents
                                </div>
                                <div class="font-sora mt-4">
                                    African (General), African American Vernacular English (AAVE), Nigerian, South African
                                    (General),
                                    West
                                    African (General)
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Voiceover Categories
                                </div>
                                <div class="font-sora mt-4">
                                    Animation Movie Trailers, Documentaries, Audiobooks, E-learning, Radio Ad, Telephone,
                                    Video games,
                                    Podcasting, Television Ad, Video Narration, Online Ad.
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Voice Ages
                                </div>
                                <div class="font-sora mt-4">
                                    Young Adult (18-35)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="border-b  border-opacity-10 pb-8 text-3xl lg:text-4xl font-sora mt-16">
                    Studio
                </div>
                <section class="mb-4">
                    <div class="flex flex-row justify-between mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="w-ful">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Turnaround Time
                                </div>
                                <div class="font-sora mt-4">
                                    24 Hrs
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Live Directed Sessions
                                </div>
                                <div class="font-sora mt-4">
                                    Phone Call, Video Conferencing (Zoom, Skype)
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Special Equipment
                                </div>
                                <div class="font-sora mt-4">
                                    Audio Interface: Focusrite Scarlett 212 Studio, treated studio room
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Software
                                </div>
                                <div class="font-sora mt-4">
                                    Audacity Software, Adobe audition
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col items-start">
                                <div class="text-2xl font-sora mt-4">
                                    Microphone
                                </div>
                                <div class="font-sora mt-4">
                                    CM25 MkIII Microphone
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
import Navbar from "~/pages/voiceover/components/navbar.vue";

export default {
    name: "about",
    components: {Navbar},
    data() {
        return {
            logo: "black",
            textColor: "text-black",
        }
    }
}
</script>

<style scoped>
.main {
    position: relative;
    background: rgba(0, 7, 12, 0.58) url("/voiceover/background.svg") no-repeat center;
    background-size: contain;
    /*backdrop-filter: drop-shadow(0 0 0.75rem #000000);*/
    background-blend-mode: overlay;
}

main {
    background: black;
    min-height: 100vh;
}
</style>

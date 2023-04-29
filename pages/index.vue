<template>
    <div class="container relative">
        <div class="section section-1" ref="section1" @click="expandSection(1)" @mouseenter="expandSection(1)"
             @mouseleave="resetSections">
            <nuxt-link to="/voiceover" class="content" v-if="activeSection === 1">
                <voiceover-preview/>
            </nuxt-link>
            <div class="content" v-else>
                <h2 class="font-gambetta text-center text-2xl lg:text-5xl font-bold mb-4 lg:mb-24">Voiceover</h2>
            </div>
        </div>
        <div class="section section-2" ref="section2" @click="expandSection(2)" @mouseenter="expandSection(2)"
             @mouseleave="resetSections">
            <nuxt-link to="/law" class="content" v-if="activeSection===2">
                <law-preview/>
            </nuxt-link>
            <div class="content" v-else>
                <h2 class="font-gambetta text-center text-2xl lg:text-5xl font-bold mb-4 lg:mb-24">Law</h2>
            </div>
        </div>
        <div class="section section-3" ref="section3" @click="expandSection(3)" @mouseenter="expandSection(3)"
             @mouseleave="resetSections">
            <nuxt-link to="/ngo" class="content" v-if="activeSection===3">
                <ngo-preview/>
            </nuxt-link>
            <div class="content" v-else>
                <h2 class="font-gambetta text-center text-2xl lg:text-5xl font-bold mb-4 lg:mb-24">NGO</h2>
            </div>
        </div>
    </div>
</template>

<script>
import LawPreview from "~/pages/law/components/law-preview.vue";
import VoiceoverPreview from "~/pages/voiceover/components/voiceover-preview.vue";
import NgoPreview from "~/pages/ngo/components/ngo-preview.vue";

export default {
    components: {NgoPreview, VoiceoverPreview, LawPreview},
    data() {
        return {
            activeSection: null
        }
    },
    computed: {
        screenSize() {
            if (process.client) {
                return window.innerWidth;
            }
        }
    },
    methods: {
        expandSection(index) {
            const section1 = this.$refs.section1;
            const section2 = this.$refs.section2;
            const section3 = this.$refs.section3;
            if (this.screenSize > 900) {
                this.activeSection = index;
                if (index === 1) {
                    section3.style.display = 'none';
                } else if (index === 2) {
                    section2.style.flex = '1';
                    section2.style.position = 'absolute';
                    section2.style.top = '0';
                    section2.style.left = '17%';
                    section2.style.right = '17%';
                    section2.style.width = '66%';
                    section2.style.height = '100%';
                    section2.style.zIndex = '1';
                } else if (index === 3) {
                    section1.style.display = 'none';
                }
            } else {
                if (index === 1) {
                    this.$router.push('/voiceover')
                } else if (index === 2) {
                    this.$router.push('/law')
                } else if (index === 3) {
                    this.$router.push('/ngo')
                }
            }
        },
        resetSections() {
            const section1 = this.$refs.section1;
            const section2 = this.$refs.section2;
            const section3 = this.$refs.section3;
            section1.style.display = 'flex';
            section2.style.display = 'flex';
            section2.style.position = 'relative';
            section2.style.width = '33.33%';
            section2.style.right = 'auto';
            section2.style.left = 'auto';
            section3.style.display = 'flex';
            this.activeSection = null;
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    height: 100vh;
    width: 100vw;
    max-width: 100vw !important;
}

.section {
    flex: 1;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: flex 0.5s ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #424242;
}

.section:hover {
    flex: 2.5;
}

.section:first-child .preview {
    width: 66.666%;
}

.section:last-child .preview {
    width: 66.666%;
    left: auto;
    right: 0;
}

.section-1 {
    background-image: url('/shared/voiceover.png');
    background-size: contain;
}

.section-2 {
    background-image: url('/shared/law.png');
}

.section-3 {
    background-image: url('/shared/ngo.png');
    background-size: contain;
}

.content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    transition: opacity 0.5s ease-in-out;
}

@media (max-width: 767px) {
    .section {
        flex-basis: 100%;
        height: calc(100vh / 3);
    }

    .section-1 {
        background-image: url('/shared/voiceover-mob.png');
    }

    .section-2 {
        background-image: url('/shared/law-mob.png');
        background-color: #373636;
    }

    .section-3 {
        background-image: url('/shared/ngo-mob.png');
        background-color: #2f2f2f;
    }

    .section:hover {
        flex: 1 !important;
        width: 100%;
        flex-basis: 100% !important;
    }

    .section:first-child {
        width: 100%;
    }

    .section:last-child .preview {
        width: 100%;
    }

    .content {
        width: 100%;
    }
}
</style>


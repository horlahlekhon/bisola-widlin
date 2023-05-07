<template>
    <nav class="pt-2 flex flex-col lg:flex-row justify-between items-center w-full relative">
        <div class="flex flex-row justify-between items-center w-full lg:w-fit">
            <nuxt-link :to="$route.fullPath === '/voiceover/' || $route.fullPath === '/voiceover' ? '/': '/voiceover'">
                <img :src="logo=== 'black' ? '/shared/icons/widling-black.svg' : '/shared/icons/widlin.svg'"
                     alt="Widlin Logo"
                     class="cursor-pointer"/>
            </nuxt-link>
            <div class="flex lg:hidden">
                <button class="navbar-burger flex items-center py-2 px-3 text-amber-100 hover:text-amber-200"
                        @click="toggleMenu">
                    <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                        Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="hidden lg:flex flex-row lg:items-center lg:w-fit">
            <nav class="mx-auto w-full">
                <nuxt-link to="/voiceover/about" class="nav-item" :class="textColor">About Me</nuxt-link>
                <!--                <nuxt-link to="demo" class="nav-item ml-12" :class="textColor">Demo</nuxt-link>-->
                <nuxt-link v-if="!isPreview"
                           to="https://wa.me/+2349061156905?text=BISOLA%20WIDLIN%20-%20I%20am%20interested%20in%20inviting%20you%20to%20provide%20voice%20over%20services%20for%20my%20project.%20I%20understand%20that%20you%20provide%20voice%20overs%20for%20commercials%2C%20e-learning%2C%20audio%20ebooks%2C%20animations%2C%20movie%20trailers%20and%20documentaries.%20I%20appreciate%20that%20you%20value%20timely%20delivery%20without%20compromising%20on%20quality.%20I%20will%20make%20sure%20to%20check%20your%20Audio%20Demo%20page%20for%20voice%20samples.%20Please%20let%20me%20know%20how%20to%20proceed%20with%20scheduling%20a%20job%20with%20you.%20Thanks!"
                           target="_blank"
                           class="bg-amber-50 hover:bg-amber-100 px-12 py-3 ml-16 rounded text-black">Invite to Job
                </nuxt-link>
            </nav>
        </div>
        <div class="flex flex-col lg:hidden lg:w-auto bg-white bg-opacity-10 absolute top-20 right-0"
             :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }">
            <nav class="mx-auto flex flex-col min-w-[300px]">
                <nuxt-link to="/voiceover/about" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10"
                           :class="textColor">About
                    Me
                </nuxt-link>
                <!--                <nuxt-link to="demo" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10"-->
                <!--                           :class="textColor">-->
                <!--                    Demo-->
                <!--                </nuxt-link>-->
                <nuxt-link v-if="!isPreview"
                           to="https://wa.me/+2349061156905?text=BISOLA%20WIDLIN%20-%20I%20am%20interested%20in%20inviting%20you%20to%20provide%20voice%20over%20services%20for%20my%20project.%20I%20understand%20that%20you%20provide%20voice%20overs%20for%20commercials%2C%20e-learning%2C%20audio%20ebooks%2C%20animations%2C%20movie%20trailers%20and%20documentaries.%20I%20appreciate%20that%20you%20value%20timely%20delivery%20without%20compromising%20on%20quality.%20I%20will%20make%20sure%20to%20check%20your%20Audio%20Demo%20page%20for%20voice%20samples.%20Please%20let%20me%20know%20how%20to%20proceed%20with%20scheduling%20a%20job%20with%20you.%20Thanks!"
                           target="_blank"
                           class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10">Hire Me
                </nuxt-link>
            </nav>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    props: {
        textColor: {
            type: String,
            default: "text-white"
        },
        logo: {
            type: String,
            default: "white"
        },
        isPreview: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped>
.bg-primary {
    background: #FCEDD0;
}

.text-primary {
    color: #FCEDD0;
}
</style>

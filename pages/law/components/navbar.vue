<template>
    <nav class="pt-2 flex flex-col lg:flex-row justify-between items-center w-full relative">
        <div class="flex flex-row justify-between items-center w-full lg:w-fit">
            <nuxt-link :to="$route.fullPath === '/law/' || $route.fullPath === '/law#' ? '/': '/law#'">
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
                <nuxt-link to="/law#about" class="nav-item" :class="textColor">About Me</nuxt-link>
                <nuxt-link to="/law#services" class="nav-item ml-12" :class="textColor">Services</nuxt-link>
                <nuxt-link v-if="!isPreview"
                           to="https://wa.me/1234567890?text=BISOLA%20WIDLIN%20-%20I%20am%20interested%20in%20hiring%20you%20for%20legal%20services%20related%20to%20intellectual%20property%20law.%20I%20understand%20that%20IP%20law%20covers%20a%20broad%20range%20of%20legal%20issues%20related%20to%20protecting%20the%20rights%20of%20creators%20and%20owners%20of%20intellectual%20property.%20I%20am%20looking%20for%20assistance%20with%20advising%20me%20on%20protecting%20and%20managing%20my%20intellectual%20property%2C%20drafting%20and%20negotiating%20contracts%2C%20filing%20and%20prosecuting%20patent%20and%20trademark%20applications%2C%20defending%20against%20claims%20of%20infringement%2C%20and%20representing%20me%20in%20litigation%20related%20to%20intellectual%20property%20disputes."
                           target="_blank"
                           class="bg-amber-100 hover:bg-amber-200 px-12 py-3 ml-16 text-black rounded">Hire Me
                </nuxt-link>
            </nav>
        </div>
        <div class="flex flex-col lg:hidden lg:w-auto bg-opacity-10 absolute top-20 right-0"
             :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen,  'bg-black bg-opacity-50': logo ==='black', 'bg-white': logo !=='black' }">
            <nav class="mx-auto flex flex-col min-w-[300px]">
                <a href="#about" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10"
                   :class="textColor">
                    About
                    Me
                </a>
                <a href="/law#services" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10"
                   :class="textColor">
                    Services
                </a>
                <nuxt-link v-if="!isPreview" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10"
                           :class="textColor"
                           to="https://wa.me/1234567890?text=BISOLA%20WIDLIN%20-%20I%20am%20interested%20in%20hiring%20you%20for%20legal%20services%20related%20to%20intellectual%20property%20law.%20I%20understand%20that%20IP%20law%20covers%20a%20broad%20range%20of%20legal%20issues%20related%20to%20protecting%20the%20rights%20of%20creators%20and%20owners%20of%20intellectual%20property.%20I%20am%20looking%20for%20assistance%20with%20advising%20me%20on%20protecting%20and%20managing%20my%20intellectual%20property%2C%20drafting%20and%20negotiating%20contracts%2C%20filing%20and%20prosecuting%20patent%20and%20trademark%20applications%2C%20defending%20against%20claims%20of%20infringement%2C%20and%20representing%20me%20in%20litigation%20related%20to%20intellectual%20property%20disputes."
                           target="_blank">
                    Hire
                    Me
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
html {
    scroll-behavior: smooth;
}

.bg-primary {
    background: #FCEDD0;
}

.text-primary {
    color: #FCEDD0;
}
</style>

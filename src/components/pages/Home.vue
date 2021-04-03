<template>
    <div v-if="isHome">
        <h1>Easter treasure hunt 2021</h1>
        <p class="font:cursive">
            Finn and Ada, proceed with <strong>caution</strong>&mdash;there be danger ahead.
        </p>
        <p class="font:cursive">
            Follow the clues, answer th
        </p>
        <BigButton @click="handleNext">
            Begin!
        </BigButton>
    </div>

    <router-view v-else v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" @next="handleNext" />
        </transition>
    </router-view>
</template>

<script>
import { ROUTE_KEYS } from '../../router';
import BigButton from '../inputs/BigButton.vue';

export default {
    components: {
        BigButton
    },

    data: () => ({
        clueNo: 0,
        canStart: true,
        startTime: 0
    }),

    computed: {
        isHome() {
            return this.$route.name === ROUTE_KEYS.HOME;
        }
    },

    mounted() {
        this.clueNo = getClueFromRoute(this.$route);
    },

    beforeRouteUpdate(to, from, next) {
        // update the clue number state based on the route
        this.clueNo = getClueFromRoute(to);
        next();
    },

    methods: {
        handleNext() {
            this.next();
            this.clueNo++;
        },
        next() {
            console.log('in next!');
            if (!this.canStart && this.isHome) {
                return;
            }
            this.canStart = false;
            this.$router.push({
                name: ROUTE_KEYS.CLUE,
                params: {
                    clue: this.clueNo
                }
            });
        }
    }
}

function getClueFromRoute(route) {
    let { clue } = route.params;
    clue = clue && parseInt(clue, 10);
    return clue || 1;
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease-out;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(1rem);
}
.fade-leave-to {
    display: none;
}
</style>
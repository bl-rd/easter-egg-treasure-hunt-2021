<template>
    <div class="modal">
        <h2>{{ outcomeText }}</h2>
        
        <p class="modal__emoji">
            {{ emoji }}
        </p>

        <BigButton @click="handleClick">
            {{ buttonText }}
        </BigButton>
    </div>
</template>

<script>
import BigButton from './BigButton.vue';

export default {
    components: {
        BigButton
    },
    
    props: {
        correct: {
            type: Boolean,
            required: true
        }
    },

    data: () => ({ inputEl: null }),

    computed: {
        outcomeText() {
            return this.correct ? 'Correct!' : 'Too bad me heartie...';
        },

        buttonText() {
            return this.correct ? 'Next clue': 'Try again...';
        },

        emoji() {
            return this.correct ? '👍' : '☠';
        }
    },

    mounted() {
        this.inputEl = document.querySelector('input');
        this.$el.querySelector('button')?.focus();
    },

    beforeUnmount() {
        this.inputEl?.focus();
    },

    watch: {
        correct: function (val) {
            if (!val) {
                window.navigator.vibrate(200);
            }
        }
    },

    methods: {
        handleClick() {
            const event = this.correct ? 'next' : 'again';
            this.$emit(event);
        }
    }
}
</script>

<style scoped>
.modal {
    position: absolute;
    width: 90vw;
    min-height: 60vh;
    top: 15vh;
    left: 5vw;
    background-color: white;
    text-align: center;
    padding-top: 1.5rem;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
}

.modal__emoji {
    font-size: 5rem;
}
</style>
<template>
    <div class="modal">
        <h2>{{ outcomeText }}</h2>

        <button @click="handleClick">
            {{ buttonText }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        correct: {
            type: Boolean,
            required: true
        }
    },

    computed: {
        outcomeText() {
            return this.correct ? 'Correct!' : 'Too bad me heartie...';
        },

        buttonText() {
            return this.correct ? 'Next clue': 'Try again...';
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
    height: 90vh;
    top: 5vh;
    left: 5vw;
    background-color: white;
}
</style>
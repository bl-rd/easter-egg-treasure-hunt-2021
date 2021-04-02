<template>
    <form @submit.prevent="handleSubmit">
        <label for="input">☠ What be yer answer?:</label>
        <input id="input" type="text" v-model="model" v-bind="inputAttrs" @focus="handleFocus"/>
        <div class="button__wrapper">
            <button type="submit">
                Go!
            </button>
        </div>
    </form>
</template>

<script>
import { INPUT_TYPES } from '../../data/questions';
export default {
    data: () => ({
        model: null
    }),

    props: {
        answer: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            required: true
        }
    },

    computed: {
        isNumeric() {
            return this.inputType === INPUT_TYPES.NUMERIC;
        },
        inputAttrs() {
            return this.isNumeric
                ? { inputmode: 'numeric' }
                : null;
        },
        isCorrect() {
            const { model, answer } = this;
            return model === answer;
        }
    },

    methods: {
        handleFocus() {
            this.model = null;
        },
        handleSubmit() {
            const { model } = this;

            if (!model) {
                return;
            }

            this.$emit('answer', { correct: this.isCorrect });
        }
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
}

input {
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.1rem;
}

.button__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

button {
    width: 100%;
    max-width: 200px;
    padding: 1rem;
}

button {
    outline-offset: 10px;
}
</style>
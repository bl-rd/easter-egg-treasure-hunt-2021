<template>
    <form @submit.prevent="handleSubmit">
        <label for="input">Your answer:</label>
        <input id="input" type="text" v-model="model" v-bind="inputAttrs" @focus="handleFocus"/>
        <button type="submit">
            Go
        </button>
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
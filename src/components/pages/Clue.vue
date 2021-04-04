<template>
    <!-- need the "key" attribute for the transition -->
    <div class="clue" :key="clue">

        <div class="clue__text">
            <p class="font:cursive font:white-bg">
                {{ clueText }}
            </p>
        </div>

        <div v-if="!isEnd">
            <AnswerInput :answer="clueAnswer" :inputType="clueInputType" @answer="handleAnswer" />

            <transition name="fade">
                <CorrectModal v-if="showCorrectModal" :correct="correctAnswer" @next="handleNext" @again="showCorrectModal = false" />
            </transition>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        clue: Number
    });
</script>

<script>
import questions from '../../data/questions';
import AnswerInput from '../inputs/AnswerInput.vue';
import CorrectModal from '../inputs/CorrectModal.vue';

export default {
    components: {
        AnswerInput,
        CorrectModal
    },

    data: () => ({ 
        model: null,
        showCorrectModal: false,
        correctAnswer: false
    }),

    computed: {
        /**
         * 
         */
        haveData() {
            return !!this.clueData;
        },
        /**
         * Get the question data from the questions object
         */
        clueData() {
            return questions[this.clue - 1] ?? null;
        },
        /**
         * The text to display
         */
        clueText() {
            return this.clueData?.clue
                ? `${this.clue}: ${this.clueData.clue}`
                : 'Ye have reached the end of the hunt. Congratulations!';
        },
        clueAnswer() {
            return this.clueData?.answer;
        },
        clueInputType() {
            return this.clueData?.inputType;
        },
        isEnd() {
            return this.clue >= 10;
        }
    },

    methods: {
        handleCorrect() {
            this.showCorrectModal = true;
        },

        handleWrong() {
            this.showCorrectModal = false;
        },

        handleAnswer({ correct }) {
            this.showCorrectModal = true;
            this.correctAnswer = correct;
        },

        handleNext() {
            // do any resets
            this.showCorrectModal = false;
            this.$emit('next');
        }
    }
}
</script>

<style scoped>
.clue {
    min-height: 100px;
    /* height: 90vh; */
    overflow: hidden;
    max-height: 100%;
}
</style>
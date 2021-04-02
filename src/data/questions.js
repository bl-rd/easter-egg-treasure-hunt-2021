export const INPUT_TYPES = {
    NUMERIC: 'numeric',
    TEXT: 'text'
};

export default [
    generateQuestion(0, 'Here be your first question...', '42', INPUT_TYPES.NUMERIC),
    generateQuestion(1, 'And what is yer second question?', 'cheese', INPUT_TYPES.TEXT)
];

/**
 * Function to generate a piece of question data. Basically to stop me
 * messing things up with a typo
 * @param {Number} number The question number
 * @param {String} clue The clue as to the next clue's location
 * @param {String} answer The answer to the clue
 * @param {String} inputType The type of input box to use
 * @returns {Object}
 */
function generateQuestion(number, clue, answer, inputType) {
    return {
        number,
        clue,
        answer,
        inputType
    }
}
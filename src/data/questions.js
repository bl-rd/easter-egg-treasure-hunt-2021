export const INPUT_TYPES = {
    NUMERIC: 'numeric',
    TEXT: 'text'
};

export default [
    generateQuestion(0, 'To find your first clue you\'d better creep, to the place where Harry Potter sleeps.', '22', INPUT_TYPES.NUMERIC),
    generateQuestion(1, 'Don\'t let success go to your head, the second clue is where our wolf goes to bed', 'Saturn', INPUT_TYPES.TEXT),
    generateQuestion(2, 'To find your third clue you\'ll need a key, where the lawnmower rests the next puzzle be', '11', INPUT_TYPES.NUMERIC),
    generateQuestion(3, 'Ack! Your breath is beginning to stink! Brush your teeth in the bathroom ____!', 'eyes', INPUT_TYPES.TEXT),
    generateQuestion(4, 'Watering the garden helps the grass grow, where could the next clue be... Do you know?', 'Ada', INPUT_TYPES.TEXT),
    generateQuestion(5, 'Scale a ladder to find the next clue. It\'s dark up here... And scary too!', 'Guardians', INPUT_TYPES.TEXT),
    generateQuestion(6, 'Look for a pink flowering tree, that is where yer next puzzle be!', 4, INPUT_TYPES.NUMERIC),
    generateQuestion(7, 'The place where Finn gets an ancient shield, what will this location yield?', 'mammal', INPUT_TYPES.TEXT),
    generateQuestion(8, 'Sausages and ice-cream, Ada will give it a go. But don\'t eat this stuff, it\'s made of play _____!', 51, INPUT_TYPES.NUMERIC),
    generateQuestion(9, 'Your quest is nearly over, you\'ve had a good look. The resting place of the treasure is where Ada reads books', null, null)
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
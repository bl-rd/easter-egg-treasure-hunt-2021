<template>
    <div class="button__wrapper">
        <button :type="type" @click="$emit('click')">
            <span>
                <slot />
            </span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: 'button'
        }
    }
}
</script>

<style>
.button__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

button {
    width: 100%;
    max-width: 200px;
    padding: 1rem;
    outline-offset: 10px;

    background: var(--colour-correct);
    filter: drop-shadow(0px 8px 0px rgba(0, 0, 0, 0.6));
    border-radius: 12px;
    border: none;
}

button:active {
    transform: translateY(8px);
    filter: none;
}
</style>
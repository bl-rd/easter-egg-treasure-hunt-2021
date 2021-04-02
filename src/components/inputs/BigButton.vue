<template>
    <div class="button__wrapper">
        <button :type="type" @click="$emit('click')">
            <slot />
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
}
</style>
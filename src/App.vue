<template>
  <router-view />
</template>

<style>
* {
  font-family: 'Domine', serif;
}

html,
body {
  margin: 0;
  padding: 100;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

main {
  display: grid;
  place-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.font\:cursive,
.font\:cursive * {
  font-family: 'La Belle Aurore', cursive;
}

p {
  font-size: 1.5rem;
}
</style>
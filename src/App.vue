<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.btn {
  cursor: pointer;
  padding: 10px 15px;
  min-width: 100px;
  background-color: rgb(57, 189, 101);
  border-radius: 10px;
  color: #ebe4ff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  &_deny {
    background-color: rgb(57, 125, 189);
    
  }
}

::placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
}
</style>

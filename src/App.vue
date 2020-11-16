<template>
  <div id="app">
    <v-skeleton
      :content="loaderContent"
      width="500px"
      height="300px"
      padding="16px"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      loaderContent: [
        {
          type: 'avatar',
          vAlignment: 'start',
          lines: [
            {
              type: 'block',
              width: '100px'
            },
            {
              type: 'block',
              width: '200px'
            },
          ]
        },
        {
          type: 'block',
          width: '500px'
        },
        {
          type: 'block',
          width: '280px'
        },
        {
          type: 'block',
          width: '130px'
        },
        {
          type: 'row',
          marginTop: '32px',
          children: [
            {
              type: 'text',
              height: '16px',
            },
            {
              type: 'text',
              height: '16px',
            },
            {
              type: 'text',
              height: '16px',
            },
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

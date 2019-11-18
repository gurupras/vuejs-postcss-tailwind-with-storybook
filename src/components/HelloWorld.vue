<template>
  <div class="hello">
    <h1>Components</h1>
    <h4>Alert</h4>
    <Alert/>
  </div>
</template>

<script>
import Alert from './alert'
export default {
  name: 'HelloWorld',
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

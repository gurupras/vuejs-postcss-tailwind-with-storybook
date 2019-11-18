<template>
  <div class="home">
    <h1>Components</h1>
    <h2>Alert</h2>
    <Alert title="Holy smokes!" text="Something seriously bad happened." :show-close="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/alert'

export default {
  name: 'home',
  components: {
    Alert
  }
}
</script>

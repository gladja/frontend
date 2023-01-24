<template>
  <div id="app">
    <div class="container">
      <user-page />
    </div>
  </div>
</template>

<script>
import UserPage from './components/UserPage'

export default {
  name: 'App',
  components: {
    UserPage
  }
}
</script>

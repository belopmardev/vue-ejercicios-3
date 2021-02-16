<template>
  <div class="login">
      <div v-if="auth" class="login-form">
          <input label="Username:">
          <input label="Password:">
          <button @click='login'>Login</button>
      </div>
      <div v-else class="login-user">
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
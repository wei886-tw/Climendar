<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 border">
        <div class="g-signin2" data-onsuccess="onSignIn ">
          <button class="btn btn-blue text-white">
            Google 登入
            <div class="g_id_signin" data-type="standard"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
   
  },
}
</script>



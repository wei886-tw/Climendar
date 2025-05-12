<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="container vh-100 d-flex align-items-center justify-content-center">
          <img src="../../public/pic/Weatherndar-pic.png" alt="Welcome Picture" class="w-100" />
        </div>
      </div>

      <div class="col-md-6">
        <div class="container vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1 class="fs-64 mb-24">Climendar</h1>
          <p class="fs-24 fw-bold mb-60 border-top border-bottom py-24">
            Plan your day with weather insights!
          </p>
          <button class="btn btn-primary w-75 mb-24 rounded-5">
            <router-link to="/home" class="text-white text-decoration-none"
              >Get Started</router-link
            ></button
          ><button class="btn btn-primary w-75 rounded-5">
            <router-link class="text-white text-decoration-none"
            to="/signin">Sign In With Google</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      googleOauthClientIds: import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_IDS
    }
  }
}
</script>
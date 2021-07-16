<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center">
              Subscribe for New Movies / Shows Notifications
            </h3>
          </div>
        </div>
        <!-- <ul>
          <router-link class="li" to="/">Home</router-link>
          <button class="btn btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#subscriberModal">Join / Register</button>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [], genres: [],
      subscriber: {
        id:'', name:'', genres:'', DOB:'', phone:'', email:''
      }
    }
  }
}
</script>

<style scoped>
/*  */
</style>
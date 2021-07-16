<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="card-body">
            <form ref="joinForm" id="joinForm">
              <div class="mb-3">
                  <label for="name">Please enter your Full Name</label>
                  <input type="text" v-model="subscriber.name" name="name" id="name" class="form-control">
                  <div class="text-danger" v-if="!$v.subscriber.name.required && $v.subscriber.name.$dirty">Your Full Name is required</div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="dob">Your Date of Birth ( DoB )</label>
                    <input type="date" v-model="subscriber.DOB" name="dob" id="dob" class="form-control">
                    <!-- <div class="text-danger" v-if="!$v.genre.name.required && $v.genre.name.$dirty">Name is required</div> -->
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="phone">Your Phone Number</label>
                    <input type="text" v-model="subscriber.phone" name="phone" id="phone" class="form-control">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">Your Email Address</label>
                  <input type="text" v-model="subscriber.email" name="email" id="email" class="form-control">
                </div>
                
                <div class="row">
                  <div class="col-12 mb-3">Choose Your Categories of Interest in Movies</div>
                  <div v-for="genre in genres" class="col-md-6 mb-3" :key="genre.id">
                    <div class="form-check">
                      <input class="form-check-input" v-model="subscriber.genres" name="genres[]" type="checkbox" :value="genre.name" :id="genre.name">
                      <label class="form-check-label" :for="genre.name">
                        {{ genre.name }}
                      </label>
                    </div>
                  </div>
                </div>

                <p class="mt-3">
                  <button @click.prevent="validateData" class="btn btn-lg btn-primary w-100">Join Now</button>
                </p>

            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card">
              <img src="" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Fast & Furious 9</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-outline-primary">Movie Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Black Widow</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-outline-primary">Movie Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Coming to America 2</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-outline-primary">Movie Details</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">FatherHood</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-outline-primary">Movie Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      movies: [], genres: [],
      subscriber: {
        id:'', name:'', DOB:'', genres:[], phone:'', email:''
      },
      baseURL:'http://192.168.1.3/moviez/index.php/Registration',
    }
  },
  created() {
    this.getGenres();
  },
  validations: {
    subscriber: {
      name: { required },
      DOB: { required },
      genres: { required },
      phone: { required },
      email: { required, email }
    }
  },
  methods: {
    validateData() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.register();
      }
    },
    register() {
      let vm = this, formData = new FormData(vm.$refs.joinForm);
      formData.set('genres', vm.subscriber.genres.join())
      this.$axios.post(`${vm.baseURL}`, formData)
      .then(res => {
        if(res.status === 200) {
          Vue.$toast.success(`Congratulations, you have successfully Subscribed`);
          vm.clearForm();
        }
      })
      .catch(err => console.log(err))
    },
    getGenres() {
      let vm = this;
      this.$axios.get('http://192.168.1.3/moviez/index.php/Genres')
      .then(res => {
        if(res.status === 200) {
          vm.genres = res.data.data;
        }
      })
      .catch(err => console.log(err))
    },
    clearForm() {
      this.subscriber.id = ''; this.subscriber.name = ''; this.subscriber.DOB = '';
      this.subscriber.genres = ''; this.subscriber.phone = ''; this.subscriber.email = '';
      document.getElementById('joinForm').reset(); this.$v.$reset();
    }
  }
}
</script>
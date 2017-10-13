<template>
  <div id="SignUp">
    <div class="container col-md-6 col-md-offset-3">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3>Vue.js Form Validation</h3>
        </div>
        <div class="panel-body">
          <form class="form-horizontal" @submit.prevent="checkBeforeValidate" id="form">
            <div class="form-group">
              <label for="email" class="col-sm-3 control-label">Email</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email')}" v-model="email" name="email" id="email" placeholder="Email" autofocus>
                <i v-show="errors.has('email')" class="fa fa-warning" style="{;color: red;}"></i>
                <span v-show="errors.has('email')"  style="{ ; color: red;font-style: italic;}">{{ errors.first('email') }}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="Password" class="col-sm-3 control-label">Password</label>
              <div class="col-sm-9">
                <input type="password" v-model="password" v-validate="'required|alpha_num|min:8'" class="form-control" :class="{'input': true, 'is-danger': errors.has('password')}" name="password" id="Password" placeholder="Password">
                <i class="fa fa-warning" v-show="errors.has('password')" style="{;color: red;}"></i>
                <span v-show="errors.has('password')" style="{ ; color: red;font-style: italic;}">{{errors.first('password')}}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="Confirm Password" class="col-sm-3 control-label">Confirm Password</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" v-validate="'required|alpha_num|confirmed:password'" v-model="confirm" name="confirm" id="Confirm Password" placeholder="Confirm Password" :class="{'input': true, 'is_danger': errors.has('confirm')}">
                <i v-show="errors.has('confirm')" class="fa fa-warning" style="{ ; color: red;}"></i>
                <span v-show="errors.has('confirm')" style="{ ; color: red;font-style: italic;}">{{errors.first('confirm')}}</span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-6 cl-md-10">
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        <div class="panel-footer">
          <router-link to="/info" id="info" class="help-block btn-link text-center">Terms and Privacy</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    checkBeforeValidate: function () {
      this.$validator.validateAll().then((result) => {
        if(result){
          alert('Form Submitted');
          return;
        }else{
          alert('Correct Errors');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #info {
    cursor: pointer;
  }
</style>

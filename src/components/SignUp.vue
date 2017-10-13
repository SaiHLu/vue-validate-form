<template>
  <div id="SignUp">
    <div class="container col-md-6 col-md-offset-3">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3>Vue.js Form Validation</h3>
        </div>
        <div class="panel-body">
          <form class="form-horizontal" id="form">
            <div class="form-group">
              <label for="email" class="col-sm-3 control-label">Email</label>
              <div class="col-sm-9">
                <input type="email" class="form-control" name="email" id="email" placeholder="Email">
              </div>
            </div>
            <div class="form-group">
              <label for="Password" class="col-sm-3 control-label">Password</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" name="password" id="Password" placeholder="Password">
              </div>
            </div>
            <div class="form-group">
              <label for="Confirm Password" class="col-sm-3 control-label">Confirm Password</label>
              <div class="col-sm-9">
                <input type="password" class="form-control" name ="confirm" id="Confirm Password" placeholder="Confirm Password">
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

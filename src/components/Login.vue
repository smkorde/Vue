<template>
<div>
    <MainHeader></MainHeader>
     
  <div class="container">
    <div class="columns">
      <div class="is-full">
        <strong>{{screenName}}</strong>
      </div>
    </div>
    <div class="columns">
      <div class="is-full">
        <label>
          <strong>User Name</strong>
        </label>
      </div>
    </div>
    <div class="columns">
      <div>
        <input class="input" v-model="userName" type="text" placeholder="User Name" />     
        <span class="danger" v-if="submitted && userName==''">Please enter the username</span>
   
      </div>
    </div>
    
    <div class="columns">
      <div>
        <label>
          <strong>Password</strong>
        </label>
      </div>
    </div>
    <div class="columns">
      <div class="is-full">
        <input class="input" v-model="password" type="Password" placeholder="Password" />  
        <span class="danger" v-if="submitted && password==''">Please enter the password</span>
      
      </div>
    </div>
    <span id="message" class="danger"></span>
    <div class="columns">
      <div class="is-full">        
        <button @click="loginFunction()" class="button is-primary">Login</button>
        <button class="button is-text">Sign Up</button>
      </div>
    </div>
  </div>
   </div>  
</template>
<script lang="js">
// import Vue from "vue";
// import axios from "axios";
import * as users from "../assets/users.json";
import * as _ from "underscore";
import MainHeader from './MainHeader.vue';
export default {
  components: {    
    MainHeader
  },
  
  name: "Login",
  data() {
    return {    
      usersList: [],
      submitted: false,
      userName: "",
      password: "",
      screenName:"Login",
      isloggedin: undefined
    };
  },
  mounted() {
    document.getElementById("message").style.display = "none";
    this.usersList = users;
    // this.usersList=this.usersList.default;
  },

  methods: {
    loginFunction() {
      debugger
      this.submitted = true;
      document.getElementById("message").style.display = "none";
      if (this.userName == "" || this.password == "") {
        return;
      }
      debugger
      let __self = this;
      var filteredLoginObj = _.filter(this.usersList.default, function(
        element
      ) {
        console.log(element);
        return element.userName == __self.userName;
      });
      debugger
      if (
        filteredLoginObj.length != 0 &&
        filteredLoginObj[0].userName != undefined
      ) {
        console.log("Here");
        document.getElementById("message").style.display = "inline";
        if (filteredLoginObj[0].password == this.password) {
          document.getElementById("message").innerText = "Login Successful";
        } else {
          document.getElementById("message").innerText =
            "Invalid login credentials";
        }
      } else {
        document.getElementById("message").innerText =
          "Invalid login credentials";
        document.getElementById("message").style.display = "inline";
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 50vh;
  display: grid;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  border: solid;
  border-color: black;
  width: 40em !important;
  top: 5em;
  padding: 1em 1em 1em 1em;
}
.danger {
  font-size: 15px;
  color: rgb(204, 57, 57);
}
input[type="text"],input[type="password"]
{
    width: 37em;
}
</style>
<template>
  <header>
    <nav class="navbar topNav" role="navigation" aria-label="main navigation">
 

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <p class="navTopContact is-white">020 99392245</p>
          
          <p class="navTopContact is-white">phoud63@gmail.com</p>

        </div>

  <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
              <a class="btn">
                <strong>Sign up</strong>
              </a>
              <a class="btn"><strong>Log in</strong></a>
            </div>
          </div>
  </div>

      </div>
      
    </nav>

     <nav class="nav-width is-gray" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="logoWraper">
          <a class="logo">
          <img class="logoImage" src="../../../src/assets/jaol.png">
        </a>
        </div>
        
        
        <a @click="ShowSlidePanel = !ShowSlidePanel"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>

          
        </a>
        
      </div>
      
      <div class="navbar-menu">
        <div class="navbar-end current-menu-item">
          <a class="navbar-item is-active">Home</a>
          
          <a class="navbar-item">About Us</a>

            <a class="navbar-item">Contact</a>

        </div>

        
      </div>
      
    </nav>
    <div class="mdw">
      <md-drawer
        :md-fixed = "true"
        class="mdw"
        :md-right="false"
        :md-active.sync="ShowSlidePanel"
        
    >
    <div>
    <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>
<div class="toright">
 <md-button class="md-icon-button md-dense" @click="ShowSlidePanel = false">
              <i class="fa fa-chevron-left"></i>
            </md-button>
</div>
        </md-toolbar>
        <div class="md-toolbar-section-end">
           
          </div>
          </div>
        <md-list>
          <md-list-item>
            <i class="fa fa-envelope"> </i>
            <a class="md-list-item-text"> Home</a>
          </md-list-item>
          <md-list-item>
            <i class="fa fa-envelope"> </i>
            <a class="md-list-item-text"> About</a>
          </md-list-item>
          <md-list-item>
            <i class="fa fa-envelope"> </i>
            <a class="md-list-item-text"> Contact</a>
          </md-list-item>
          

        </md-list>
    </md-drawer>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      ShowSlidePanel: false,
    }
  }
}
</script>
<style>


</style>


<template>
  <div class="app-container">

<mt-header fixed title="fixed top">
    <router-link to="/Index" slot="left" class='link'>
    <router-link to='./'><mt-button icon="back"> back</mt-button> </router-link>
  </router-link>


</mt-header>

  <transition class='app-container'>
      <router-view></router-view>
    </transition>





	  <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/add">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">多页面</span>
      </router-link>
 <!--      <router-link class="mui-tab-item" to="/Index">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-item" to="/list">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        </span>
        <span class="mui-tab-label">list</span>
      </router-link>
      
      <router-link class="mui-tab-item" to="/my">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">我的</span>
      </router-link> -->
          <router-link class="mui-tab-item" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">单页面</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default{
	
	data(){
	return{
		}
	},
	methods:{

	}

}


</script>

<style lang="scss" scoped type="">
.mint-header{

  z-index:999;
    background-color: #333;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);

}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}



.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}

</style>



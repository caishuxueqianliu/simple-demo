<template>
<div>
 <div class="mui-card" > 
        <div class="mui-card-header">{{this.$store.state.car[0].id}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
     {{this.$store.state.car[0].content}}
          </div>
        </div>
        <div class="mui-card-footer">{{this.$store.state.car[0].editer}}</div>
            <div class="mui-card-footer"><router-link to='/my'><mt-button type="primary" size="small" @click='xiugai()'>修改</mt-button></router-link>
             <router-link to='/index'><mt-button type="primary" size="small" >List</mt-button></router-link></div>
      </div>

    </div> 
</template>

<script>
export default {
data(){

	return{}
},
methods:{

	xiugai(){
 console.log(this.$store.state.i)

	}

}


}
</script>

<style lang="scss" scoped type="">

</style>

<template>

      <div>
			
<div class="mui-card" > 
        <div class="mui-card-header"> <input type="text"  class='content' v-model='id'></div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
        <input type="text"  class='content' v-model='editer'>
          </div>
        </div>
        <div class="mui-card-footer"><input type="text"  class='content' v-model='content'></div>
         <div class="mui-card-footer"> <router-link to='/list'><mt-button type="danger" size="small" >取消</mt-button></router-link><router-link to='index'><mt-button type="primary" size="small" @click='queren()'>确认</mt-button></router-link></div>
      </div>
		
			</div>
   
</template>

<script>


export default {

 data(){
 	return{ 
    id:this.$store.state.car[0].id,
    editer:this.$store.state.car[0].editer,
   content:this.$store.state.car[0].content

}

 	},

 	methods:{
queren(){
  var qr={id:this.id,editer:this.editer,content:this.content};

this.$store.commit("qrTo",qr);
this.id=this.editer=this.content='';
         
console.log(qr)

}
 	}
}
</script>

<style lang="scss" scoped type="">

</style>

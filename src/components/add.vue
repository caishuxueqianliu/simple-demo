<template>
<div>
    <div class="mui-card" > 
  
<!-- <mt-button type="primary" size="small" @click='search() '>serach</mt-button> -->

        <div class="mui-card-header"><input type="text" placeholder="input..." class='content' v-model='id'></div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
        <input type="text" placeholder="input..." class='content' v-model='content'>
          </div>
        </div>
        <div class="mui-card-footer"> <input type="text" placeholder="input..." class='content' v-model='editer'></div>
            <div class="mui-card-footer"><mt-button type="primary" size="small" @click='add()'>add</mt-button></div>
      </div>
    </div> 
</template>

<script>
export default {
data(){
	return{
         list:[{id:'1',editer:'lh',content:'the first demo...'},
        {id:'2',editer:'ia',content:'the second demo...'},
        {id:'3',editer:'uo',content:'the third demo...'}],     
        content:'',
        id:'',
        editer:''
	}
},
methods:{
  add(){
   var xx={id:this.id,editer:this.editer,content:this.content};
  var listx= this.list.unshift(xx);

this.$store.commit("addTo", listx);


   this.id=this.editer=this.content='';        
  }



}
}
</script>
<style lang="scss" scoped type="">



</style>

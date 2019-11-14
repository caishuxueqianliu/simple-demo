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
            <div class="mui-card-footer"><router-link to='/index'><mt-button type="primary" size="small" @click='add()'>Add</mt-button></router-link>
      <router-link to='/index'><mt-button type="primary" size="small" >List</mt-button></router-link>

            </div>
      </div>
    </div> 
</template>

<script>

export default {
data(){
	return{
  // list:[{id:'1',editer:'lh',content:'the first demo...'},
  //       {id:'2',editer:'ia',content:'the second demo...'},
  //       {id:'3',editer:'uo',content:'the third demo...'}],     
        content:' ',
        id:' ',
        editer:' ',
        sz:{}
	}
},
methods:{
  add(){
  var sz={id:this.id,editer:this.editer,content:this.content};

   // this.list.unshift(xx);
   // console.log(this.list)
   // var sz=this.list
   // this.id=this.editer=this.content='';
   console.log(sz)   
this.$store.commit("addTo",sz);
this.id=this.editer=this.content='';

  }




}
}
</script>
<style lang="scss" scoped type="">



</style>

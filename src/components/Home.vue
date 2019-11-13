<template>
	<div>  
<index3  :listinfo='listt' v-on:childByValue="childByValue"></index3>
<!-- 
父组件:
    <span>{{name}}</span> -->
<!-- <div v-show='flag'> -->
	<div >
<!--  <input type="text" placeholder="input..." class='content' v-model='id'>
 <input type="text" placeholder="input..." class='content' v-model='editer'>

<input type="text" placeholder="input..." class='content' v-model='content'>

<input type="text" placeholder="search..." class='search' v-model='keywords'> -->

<div class="mui-card" > 
  <div class="mui-card-header"><input type="text" placeholder="search..." class='search' v-model='keywords'></div>
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




<!--  <button class='btn' @click='add()'>submit</button>
   <button class='search' @click='search()'>search</button> -->
<!-- <ul v-for='(item,i) in search(keywords)' :key='item.id'> 
<li>{{item.id}}</li>	
<li>{{item.editer}}</li>
<li>{{item.content}}</li>
</ul> -->
<div class="mui-card"  v-for='(item,i) in search(keywords)' :key='item.id'> 
        <div class="mui-card-header">{{item.id}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
         {{item.content}}
          </div>
        </div>
        <div class="mui-card-footer">{{item.editer}}</div>
            <div class="mui-card-footer"><mt-button type="primary" size="small" @click='rem(i)'>查看</mt-button>
<mt-button type="danger" size="small"  @click='del(i)'>删除</mt-button></div>
      </div>

</div>

 </div>
</template>

<script>
	import index3 from '../components/index3.vue'
export default {
 	data(){
	return{
        list:[{id:'1',editer:'lh',content:'the first demo...'},
        {id:'2',editer:'ia',content:'the second demo...'},
        {id:'3',editer:'uo',content:'the third demo...'}],     
        content:'',
        id:'',
        editer:'',
        keywords:'',
        flag:true,
        listt:'',
         name: '11'
     
		}
	
	},
	methods:{
  add(){
   var xx={id:this.id,editer:this.editer,content:this.content};
   this.list.unshift(xx);
   this.id=this.editer=this.content='';        
  },
  del(i){

  	   this.list.splice(i,1)
  },
   search(keywords) {

                    return this.list.filter(item => {

                        if (item.editer.includes(keywords)) {
                            return item
                        }
                    })


                },
     rem(i){

            // this.$store.commit("clo",i);
              this.flag=!this.flag
            
              // this.listt=JSON.stringify(this.list[i])
              this.listt=this.list[i]
                //  console.log(i)
                // console.log(this.listt.id)

          
         },
         childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.name = childValue
	}},
	components: {
		index3
	}
      }




</script>

<style>

</style>

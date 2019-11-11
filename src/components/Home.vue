<template>
	<div>  
<index3 :listinfo='listt'></index3>
<div v-show='flag'>
 <input type="text" placeholder="input..." class='content' v-model='id'>
 <input type="text" placeholder="input..." class='content' v-model='editer'>

<input type="text" placeholder="input..." class='content' v-model='content'>

<input type="text" placeholder="search..." class='search' v-model='keywords'>
 <button class='btn' @click='add()'>submit</button>
   <button class='search' @click='search()'>search</button>
<ul v-for='(item,i) in search(keywords)' :key='item.id'> 
<li>{{item.id}}</li>	
<li>{{item.editer}}</li>
<li>{{item.content}}</li>
<button @click='del(i)'>delete</button>
<button @click='rem(i)'>rem</button>
</ul>


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
        listt:[]
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
            
              this.listt.push(this.list[i])
               
         }
	},
	components: {
		index3
	}
      }




</script>

<style lang="scss" scoped type="">

</style>

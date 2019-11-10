<template>
<div>
 <input type="text" placeholder="input..." class='content' v-model='id'>
 <input type="text" placeholder="input..." class='content' v-model='editer'>

<input type="text" placeholder="input..." class='content' v-model='content'>

<input type="text" placeholder="search..." class='search' v-model='keywords'>
 <button class='btn' @click='add()'>submit</button>
   <button class='search' @click='search()'>search</button>
<ul v-for='item in search(keywords)' :key='item.id'> 
<li>{{item.id}}</li>	
<li>{{item.editer}}</li>
<li>{{item.content}}</li>
<button @click='del(i)'>delete</button>
<button @click='rem(i)'>rem</button>
</ul>


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
        editer:'',
        keywords:''
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
               
                this.id=this.list[i].id
               this.editer=this.list[i].editer
               this.content = this.list[i].content
               
         }
	}
      }




</script>

<style lang="scss" scoped type="">

</style>

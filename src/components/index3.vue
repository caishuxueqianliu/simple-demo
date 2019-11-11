<template>
<div>
 <input type="text" placeholder="input..." class='content' v-model='id'>
 <input type="text" placeholder="input..." class='content' v-model='editer'>

<input type="text" placeholder="input..." class='content' v-model='content'>
 <span></span>
    </div> 
</template>

<script>
export default {

 data(){
 	return{
    list:[],
    id:'',
    editer:'',
    content :''

 	}
 },
 props:{
 listinfo:String
 },
 created(){
 

 this.list=this.listinfo;
 console.log(this.listinfo[0].id)
 console.log(this.list[0])
this.id=this.list.id
this.editer=this.list.editer
this.content=this.list.content
}

}
</script>

<style lang="scss" scoped type="">

</style>

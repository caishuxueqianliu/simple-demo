<template>
<div>
 <input type="text"  class='content' v-model='idd'>
 <input type="text"  class='content' v-model='editerr'>

<input type="text"  class='content' v-model='contentt'>
<button @click='xiugai()'>xiugai</button>
<button @click='queren()'>queren</button>

<hr>

    <!-- 定义一个子组件传值的方法 -->
 <input type="button" value="点击触发" @click="childClick">
zizujian
<span>{{childValue}}</span>
<li>{{listinfo.id}}</li>	
<li>{{listinfo.editer}}</li>
<li>{{listinfo.content}}</li>


    </div> 
</template>

<script>
export default {


 data(){
 	return{ 
    idd:'',
    editerr:'',
    contentt :'',
    childValue: '我是子组件的数据'

 	}
 },
methods:{

 xiugai(){

 this.idd=this.listinfo.id;
 this.editerr=this.listinfo.editer;
 this.contentt=this.listinfo.content;
 },
 queren(){

   this.listinfo.id=this.idd
 this.listinfo.editer=this.editerr
 this.listinfo.content=this.contentt

 },
 childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.childValue)
}
},


 props:{
 listinfo: ''
 }


}
</script>

<style lang="scss" scoped type="">

</style>

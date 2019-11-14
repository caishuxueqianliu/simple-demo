<template>
  <div>

  	<div class="mui-card" > 
  <div class="mui-card-header"><input type="text" placeholder="search..." class='search' v-model='keywords'></div>
</div>
<div class="mui-card"   v-for='(item,i) in search(keywords)' :key='item.id'> 
<!--    v-for='(item,i) in search(keywords)' -->
        <div class="mui-card-header">{{item.id}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
         {{item.content}}
          </div>
        </div>
        <div class="mui-card-footer">{{item.editer}}</div>
            <div class="mui-card-footer"><router-link to='/list'><mt-button type="primary" size="small" @click='rem(i)'>查看</mt-button></router-link>
<mt-button type="danger" size="small"  @click='del(i)'>删除</mt-button></div>
      </div>


  </div>
</template>

<script>
export default { 
	data(){
	return{
        listx:this.$store.state.car,     
        
        content:'',
        id:'',
        editer:'',
        keywords:''
      
     
		}
	
	},

	methods:{
  del(i){
          this.$store.commit("delTo",i);

      console.log(i)

  	   // this.listx.splice(i,1)

  },
   search(keywords) {

                      return this.listx.filter(item => {
                        if (item.content.includes(keywords)) {
                            return item
                        }
                    })


                },
                    rem(i){

             this.$store.commit("remTo",i);
           

          
         },


	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

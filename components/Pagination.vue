<template>
<div id="pagination-container">
    <div id="pagination-wrapper">
        <button v-if="showPrevious" class="btn-previous" @click="onPagesChanged(previousPage)">Назад</button>
        
        <button v-if="showNext" class="btn-next" @click="onPagesChanged(nextPage)">Далее</button>
    </div>
</div>
</template>

 
<script> 
export default {
    name: "Pagination",
    props: ["pageIndex", "courses", "pageSize"],       
    data() {
        return {
            
        }
    },
    computed: {
        
        nextPage(){
            return this.pageIndex+ 1;
        },
        previousPage(){
            return this.pageIndex- 1;
        },        
        showPrevious(){
            return this.pageIndex == 0 ? false : true
        },
        showNext(){
            return this.pageIndex+1 == (Math.ceil(this.courses.length / this.pageSize)) ? false : true
        }
    },
    methods: {
        totalPage(){
            return Math.ceil(this.courses.length / this.pageSize);
            
        },
        onPagesChanged(page){
         this.$emit('page:update', page);
        },
    }
}
</script>


<style >
    
    #pagination-container {
        display: flex;
        justify-content: center;
        margin: 1rem 0 2rem 0;
    }    
    
    #pagination-wrapper {
        display: flex;
        justify-content: space-between;
    }
    .btn-next {
        margin-left: 1rem;
        outline: none;
        border: none;
        padding: .7rem 1rem .7rem 1rem;
        font-family: "Roboto";
background: #FFFFFF;
box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
border-radius: 8px;

}
    .btn-previous {
        margin-left: 1rem;
        outline: none;
        border: none;
        padding: .7rem 1rem .7rem 1rem;
background: #EFEFEF;
font-family: "Roboto";
box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
border-radius: 8px;

    }
    @media  screen and (min-width:768px) {
            #pagination-container {
        display: flex;
        justify-content: center;
        margin: 2rem;
    }    
    
    #pagination-wrapper {
        display: flex;
        justify-content: space-between;
        margin:2rem;
    }
    .btn-next {
        
        margin-left: 1rem;
        outline: none;
        border: none;
        padding: .7rem 1rem .7rem 1rem;
        
background: #FFFFFF;
box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
border-radius: 8px;
    }
    .btn-previous {
        
        margin-left: 1rem;
        outline: none;
        border: none;
        padding: .7rem 1rem .7rem 1rem;
background: #EFEFEF;
box-shadow: 0px 5px 6px rgba(157, 157, 157, 0.16);
border-radius: 8px;
    }
    }
</style>
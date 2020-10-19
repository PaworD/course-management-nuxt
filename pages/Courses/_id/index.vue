<template>
    <div>
        <div v-if="updateDialog" class="create-modal">
    <div class="overlay" @click="closeModal()"></div>
    <div class="wrapper">
        <div class="wrapper-header">
            <span @click="closeModal()">&times;</span>
        </div>
        <div class="container">
            <form>
                <input type="text" class="add-input" placeholder="Название" v-model="course.name">
                <textarea type="text" rows="10" class="add-input" placeholder="Описание" v-model="course.description"></textarea>
                <input type="text" class="add-input" placeholder="Цена" v-model="course.price">
                <input type="date" class="add-input" placeholder="Дата Начало" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" v-model="course.startDate">
                <button @click.prevent="updateCourse()">Изменить</button>
            </form>
        </div>
    </div>
</div>
        <div class="container">
            <div class="row">
            <h1>{{course.name}}</h1>
            <div class="btns">
            <button @click="openModal()">
                Изменить
            </button>
            <button @click="deleteCourse(course.id)">
                Удалить
            </button>
            </div>
            
            </div>
            <p>{{course.description}}</p>
            <p>Дата начала курса : {{course.startDate}}</p>
            <p>Цена {{course.price}} руб.</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            updateDialog: false,
        }
    },
    asyncData({params, store}) {
        const course = store.getters.getCourses.find(el => el.id === parseInt(params.id))
        
        return {course}
    },
    methods: {
        deleteCourse(id){
            this.$store.dispatch('deleteCourse', this.course.id)
            this.$router.push({name: "Courses"});
        },
        updateCourse(){
            this.$store.dispatch('updateCourse', this.course);
            this.closeModal();
        },
        openModal(){
            this.updateDialog = true;
        },
        closeModal(){
            this.updateDialog = false;
        }
        
    }
}
</script>

<style scoped>
    .container{
        width: 90%;
        margin: 0 auto;
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
     .create-modal{
    transition: all .4s ease-in-out;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
.create-modal .overlay{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(182, 182, 182, 0.267);
    filter: blur(20px);
}
.create-modal .wrapper {
    padding: 0 5px 25px 5px;
    width: 500px;
    background-color: #fff;
    box-shadow: 2px 1px 10px 2px #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 3px;
z-index: 2;
}
.create-modal .wrapper .wrapper-header {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    padding: 2px 7px 0 0;
}
.create-modal .wrapper .wrapper-header span{
    cursor:pointer;
}
.create-modal .wrapper .container form {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.create-modal .wrapper .container form button {
    
    margin: .5rem;
    outline: none;
    border: none;
    padding:5px;
    background-color:rgb(55, 197, 78);
    color: #fff;
    cursor:pointer;
}
.add-input:first-child{
    margin-top: 1rem;
}
.add-input {
    margin: .5rem;
    outline: none;
    border:1px solid #ccc;
    padding:5px;
}
</style>
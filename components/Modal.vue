<template>
    <div>
        <!-- Create Lesson Modal Element -->

<div v-if="addDialog" class="create-modal">
    <div class="overlay" @click="closeModal()"></div>
    <div class="wrapper">
        <div class="wrapper-header">
            <span @click="closeModal()">&times;</span>
        </div>
        <div class="container">
            <form>
                <input type="text" class="add-input" placeholder="Название" v-model="course.name">
                <textarea type="text" class="add-input" placeholder="Описание" v-model="course.description"></textarea>
                <input type="text" class="add-input" placeholder="Цена" v-model="course.price">
                <input type="date" class="add-input" placeholder="Дата Начало" v-model="course.startDate">
                <button @click.prevent="addCourse()">Добавить</button>
            </form>
        </div>
    </div>
</div>

<!-- Create Lesson Modal Element -->

<button class="btn-add" @click="openModal()">
        Добавить Курс
      </button>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return {
            addDialog: false,
            course: {
                name: '',
                description: '',
                price: '',
                startDate: ''
            },
            id: null,
        }
    },
    methods: {
        openModal(){
        this.addDialog = true;
    },
    closeModal(){
        this.addDialog = false;
    },
    addCourse(){
        this.id += 1;
        this.course["id"] = this.id;
        this.$store.dispatch("addNewCourse", this.course);
        console.log(this.course)
    }
    },
    created(){
        const courses = this.$store.getters.getCourses
        this.id = courses.length
    }
}
</script>


<style scoped>
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
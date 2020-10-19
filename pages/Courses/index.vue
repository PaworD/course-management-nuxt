<template>
  <div v-if="courses">
    <div class="inline-editor">
        <label style="margin-right: 3px;" for="priceFilter">По Дате</label> 
      <select v-model="date_filters" id="priceFilter" class="price-filter" @change="dateFilter($event)">
        <option value="soon">Скоро </option>
        <option value="later">Позднее </option>
      </select>
      <label style="margin-right: 3px;" for="priceFilter">Цена</label> 
      <select v-model="price_filters" id="priceFilter" class="price-filter" @change="priceFilter($event)">
        <option value="up">По Возрастанию </option>
        <option value="down">По Убыванию </option>
      </select>
      <input type="text" v-model="search" placeholder="Искать..." />
      <span style="margin: 0 2px 0 2px">|</span>
      <Modal />
    </div>
    <div v-if="search != ''" class="courses-list">
      <p style="text-align: left">Результаты Поиска {{ search }}</p>
      <div class="card" v-for="course in filteredList" :key="course['id']">
        <h3>
          {{ course.name }}
        </h3>
        <p>
          {{ course.description }}
        </p>
        <div class="footer">
          <span> Дата Начало : {{ course.startDate }} </span>
          <span>{{ course.price }} руб.</span>
        </div>
        <nuxt-link class="more" :to="'/courses/' + course.id">
          Подробнее
        </nuxt-link>
      </div>
    </div>
    <div class="options">
      <p>Все курсы</p>
      <p>
        Фильтры : <span v-if="price_filters">{{ price_filters }} | {{ date_filters }}</span>
        <span v-else>Нет</span>
      </p>
    </div>
    <div class="courses-list">
      <div class="card" v-for="course in displayCourses" :key="course['id']">
        <h3>
          {{ course.name }}
        </h3>
        <p>
          {{ course.description }}
        </p>
        <div class="footer">
          <span> Дата Начало : {{ course.startDate }} </span>
          <span>{{ course.price }} руб.</span>
        </div>
        <nuxt-link class="more" :to="'/courses/' + course.id">
          Подробнее
        </nuxt-link>
      </div>
    </div>

    <Pagination
      @page:update="updatePage"
      :courses="courses"
      :pageIndex="currentpage"
      :pageSize="pageSize"
    />
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
import Modal from '../../components/Modal'

export default {
  components: {
    Pagination,
  },
  head() {
    return {
      title: 'Courses',
      courses: [],
    }
  },
  data() {
    return {
      currentpage: 1,
      pageSize: 2,
      search: '',
      price_filters: "Не Указан",
      date_filters: null
    }
  },
  computed: {
    courses() {
      return this.$store.getters.getCourses
    },
    message() {
      return this.$store.getters.getMessage
    },
    displayCourses() {
      return this.courses.slice(
        this.currentpage * this.pageSize,
        this.currentpage * this.pageSize + this.pageSize
      )
    },
    filteredList() {
      return this.courses.filter((course) => {
        return course.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  created() {
    this.updateDisplayCourses()
  },
  methods: {
    updatePage(pageNumber) {
      this.currentpage = pageNumber
      this.updateDisplayCourses()
    },
    updateDisplayCourses() {
      if (this.displayCourses.length == 0 && this.currentpage > 0) {
        this.updatePage(this.currentpage - 1)
      }
      console.log(this.displayCourses)
    },
    filt(filter){
        if(filter == 'up'){
            this.courses.sort((a, b) => a.price - b.price);
        } else if (filter == 'down') {
 this.courses.sort((a, b) => b.price - a.price);
        } else if (filter == 'soon') {
 this.courses.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        } else if (filter == 'later') {
 this.courses.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        }
    },
    priceFilter(event){
        this.filt(event.target.value)
    },
    dateFilter(event){
        this.filt(event.target.value)
    }
  },
}
</script>

<style >
.courses-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.price-filter {
    padding: 1px;
    border: 1px solid #666;
    outline: none;
    margin-right: 1rem;

}

.inline-editor {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.inline-editor input {
  margin: 0 0.3rem 0 0;
  outline: none;
  border: 1px solid #666;
}
.inline-editor button {
  margin: 0 0.3rem 0 0.3rem;
}
.options {
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
}
.options p {
  font-size: 1.3rem;
}
.card {
  display: inline-block;
  color: black;
  border-radius: 5px;
  box-shadow: 10px 10px 10px #ccc;
  padding: 20px;
  width: 85%;
  margin: 10px;
  font-family: Segoe UI;
  background: #fafafa;
  height: auto;
}
.card h3 {
  color: #bbb;
}
.card p {
  color: rgb(134, 130, 130);
}
.footer {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
.footer span {
  color: rgb(185, 185, 185);
}
.more {
  padding: 0.4em;
  margin-top: 1rem;
  background: transparent;
  outline: none;
  border: 1px solid #ccc;
  color: rgb(134, 130, 130);
}
.more:hover {
  background: #fafafa;
  opacity: 0.5;
}
</style>
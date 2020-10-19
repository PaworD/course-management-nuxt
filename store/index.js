
export const state = () => ({
    courses : [],
    message: null
});

export const mutations = {
    setCourses(state, courses){
        state.courses = courses
    },
    addCourse(state, course){
        state.courses.push(course);
    },
    deleteCourse(state, id){
        state.courses = state.courses.filter((course) => course.id !== id);
    },
    setMessage(state, message){
       state.message = message;
    }
}

export const actions = {
    fetchCourse({commit}){
        return new Promise((resolve, reject) => {
            this.$axios.get(process.env.baseURL + '/data.json').then((data) => {
               
                commit("setCourses", data.data)
                resolve("Success")
            }).catch((e) => {
                reject(e);
            })
        });
    },
    addNewCourse({commit}, course){
            commit("addCourse", course);
            commit("setMessage", "Курс Успешно Создан!")
    },
    deleteCourse({commit}, id) {
        commit("deleteCourse", id);
        commit("setMessage", "Курс Успешно Удален!")
    },
    updateCourse({state}, course){
        const selectedCourse = state.courses.find(el => el.id === course.id);
        Object.assign(selectedCourse, course);
    }
}

export const getters = {
    getCourses(state){
        return state.courses;
    },
    getMessage(state){
        return state.message;
    }
}
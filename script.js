const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                {
                    toDo: 'Studying HTML',
                    done: true
                },
                {
                    toDo: 'Studying CSS',
                    done: true
                },
                {
                    toDo: 'Studying JavaScript',
                    done: true
                },
                {
                    toDo: 'Studying PHP',
                    done: false
                },
                {
                    toDo: 'Studying C++',
                    done: false
                }
            ],
            newTask: '',
        }
    },
    methods: {
        deleteItem(itemIndex){
            this.toDoList.splice(itemIndex, 1)
        },
        addItem(){
            if (this.newTask != ''){
                this.toDoList.push({toDo: this.newTask, done: false});
                this.newTask = '';
            }
        },
        doneUndone(indexItem){
            this.toDoList[indexItem].done = !this.toDoList[indexItem].done
        }
    }
}).mount('#app')
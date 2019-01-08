new Vue({
    el: '#app',
    data: {
        list: [],
        text: ''
    },
    methods: {
        addItem: function(data){
            if(data != ""){
                this.list.push(data);
                this.text = ""; 
            }
        },
        removeItem: function(id){
            this.list.splice(id, 1);
        }
    }
})
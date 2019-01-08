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
                this.$refs.inputList.focus();
            }
        },
        removeItem: function(id){
            this.list.splice(id, 1);
        },
        deleteAll: function(){
            var listSize = this.list.length;
            for(var i = 0; i < listSize; i++){
                this.list.pop();
            }
        }
    }
})
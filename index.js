

var globalnavigation = {
  template: '<header>hello! header</header>'
};

var footernavigation = {
  template: '<footer>hello! footer</footer>'
};

Vue.component('glonav', globalnavigation);

Vue.component('footernav', footernavigation);

Vue.component('board-list', {
  template: '<li class="board-li"><div class="board-container"><p class="board-message">{{message}}</p><p class="board-label"><span class="board-name">{{name}}</span> - <span class="board-date">{{date}}</span></p></div></li>',
  props: ['name', 'message', 'date']
})

Vue.component('board-form', {
  template: '<div class="form-container"><div class="form-name"><p>名前 : </p><input v-model="name" type="text"></div><div class="form-message"><p>コメント:</p><textarea v-model="message"></textarea></div><button v-on:click="doAdd">書き込む</button></div>',
  data: function(){
    return {
      message: '',
      name: ''
    }
  },
  methods: {
    doAdd: function(){
      this.$emit('input', this.name, this.message)
    }
  }
})

var board = new Vue({
  el: '#board',
  data: {
    name:'',
    message: '',
    date: '',
    lists: [
    ]
  },
  methods: {
    doAdd: function(name, message){
      var now = new Date();
      this.lists.push({
        name: name,
        message: message,
        date: now.getMonth()+1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
      })
    }
  }
})

var head = new Vue({
  el: '#header'
});

var foot = new Vue({
  el: '#footer'
});

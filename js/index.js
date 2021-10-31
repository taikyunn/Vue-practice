new Vue({
  el: '#app',
  data:{
    name: 'サトシ',
    monster:[
      {name:'ピカチュウ'},
      {name:'モンスターボール'},
      {name:'自転車'},
    ]
  }
});

new Vue({
  el: '#text',
  data:{
    hoge: 'ポッチャマ',
  }
});

new Vue({
  el: '#show',
  data: {
    foo: true,
    bar: false,
  }
});

new Vue({
  el: '#if',
  data: {
    foo:true,
    bar:false,
  }
});

new Vue({
  el:'#on',
  data: {
    counter: 0
  }
});

new Vue({
  el: '#example',
  data: {
    message: 'Hello',
  },
  computed: {
    // functionの横にある reversedMessageが返り値になる
    reversedMessage: function () {
      // `this` はインスタンス
      return this.message.split('').reverse().join('')
    }
  }
});
var app = new Vue({
    el: '#memoapp',
    data: {
      stye:{
        isActive:false,
        isActiveEdit:false
      },
      newmemo:{
        title:'',
        memo:''
      },
      editmemo:'',
      memos:[]
    },
    mounted() {
        this.loaddata() //method1 will execute at pageload
    },
    computed: {
    },
    methods: {
        loaddata: function() {
            let thisapp = this;
            let loaddata1 = new Promise(function(res, rej) {
                axios.get('http://localhost:3000/api/memo')
                    .then(function(data) {
                        res(data);
                    })
                    .catch(function(err) {
                        rej(err)
                    })
            });
            loaddata1.then(function(data) {
                thisapp.memos = data.data;
            })
        },
        modalon(){
          console.log('adaada');
        this.stye.isActive=true
      },
        modaloff(){
          console.log('adaada');
        this.stye.isActive=false
      },
      modalediton(id){
      this.stye.isActiveEdit=true
      let thisapp=this;
      axios.get(`http://localhost:3000/api/memo/${id}`, {
          })
          .then(function(response) {
              thisapp.editmemo=response.data
          })
          .catch(function(error) {
              console.log(error);
          });
    },
      modaleditoff(){
      this.stye.isActiveEdit=false
    },
      savememo(){
        let thisapp=this;
        axios.post('http://localhost:3000/api/memo', {
                title:thisapp.newmemo.title,
                memo:thisapp.newmemo.memo
            })
            .then(function(response) {
                console.log(response.data);
                alert(response.data)
                thisapp.newmemo.title=''
                thisapp.newmemo.memo=''
                thisapp.loaddata()
                thisapp.modaloff()
            })
            .catch(function(error) {
                console.log(error);
            });
      },
      deletememo(id){
        let thisapp=this;
        axios.delete(`http://localhost:3000/api/memo/${id}`, {
            })
            .then(function(response) {
                console.log(response.data);
                thisapp.loaddata()
                alert(response.data)
            })
            .catch(function(error) {
                console.log(error);
            });
      },
      saveedit(){
      let thisapp=this;
        axios.put(`http://localhost:3000/api/memo/${thisapp.editmemo._id}`, {
                title:thisapp.editmemo.title,
                memo:thisapp.editmemo.memo
            })
            .then(function(response) {
                console.log(response.data);
                thisapp.modaleditoff()
                thisapp.loaddata()
                alert(response.data)

            })
            .catch(function(error) {
                console.log(error);
            });
      }
    }


})

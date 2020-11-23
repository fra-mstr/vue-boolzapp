const myApp = new Vue ({
  el: '#root',
  data: {
    searchInput: '', // Contacts Search Bar Input
    textInput: '', // Send New Message Input
    activeContactIndex: 0,
    contactArr: [
      {
        'name': 'Michele',
        'avatar': 'img/avatar_1.jpg',
        'lastAccess': '01.17'
      },
      {
        'name': 'Fabio',
        'avatar': 'img/avatar_2.jpg',
        'lastAccess': '11.08'
      },
      {
        'name': 'Samuele',
        'avatar': 'img/avatar_3.jpg',
        'lastAccess': '18.40'
      },
      {
        'name': 'Luisa',
        'avatar': 'img/avatar_io.jpg',
        'lastAccess': '21.28'
      }
    ],
  },
  methods: {
    changeWindow: function(index){
      this.activeContactIndex = index;
    },
  },
  computed: {
    searchContacts: function(){
      return this.contactArr.filter ((element) => {
        return element.name.toLowerCase().includes(this.searchInput.toLowerCase());
      })
    },
  }
})

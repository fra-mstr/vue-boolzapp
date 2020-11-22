const myApp = new Vue ({
  el: '#root',
  data: {
    searchInput: '',
    textInput: '',
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
        'avatar': 'img/avatar_4.jpg',
        'lastAccess': '21.28'
      }
    ],
  },
  computed: {
    searchContacts: function(){
      return this.contactArr.filter ((element) => {
        return element.name.toLowerCase() === this.searchInput.toLowerCase();
      })
    },
  }
})

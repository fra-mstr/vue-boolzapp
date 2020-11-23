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
        'lastAccess': '01.17',
        'chatMessages': [
          {
            'text': 'Hai portato a spasso il cane?',
            'emitter': 'sended',
            'time': '15:30'
          },
          {
            'text': 'Ricordati di dargli da mangiare',
            'emitter': 'sended',
            'time': '15:31'
          },
          {
            'text': 'Tutto fatto!',
            'emitter': 'received',
            'time': '16:15'
          }
        ]
      },
      {
        'name': 'Fabio',
        'avatar': 'img/avatar_2.jpg',
        'lastAccess': '11.08',
        'chatMessages': [
          {
            'text': 'Stasera guardiamo la partita?',
            'emitter': 'received',
            'time': '15:30'
          },
          {
            'text': 'Certo! Porto io le birre.',
            'emitter': 'sended',
            'time': '15:31'
          },
          {
            'text': 'Ottimo. Allora ci becchiamo dopo',
            'emitter': 'received',
            'time': '16:15'
          }
        ]
      },
      {
        'name': 'Samuele',
        'avatar': 'img/avatar_3.jpg',
        'lastAccess': '18.40',
        'chatMessages': [
          {
            'text': 'Oh! Ti è piaciuto il pezzo che ti ho mandato?',
            'emitter': 'sended',
            'time': '15:30'
          },
          {
            'text': "Spacca! Dovresti tagliare però un po di frequenze o non riusciamo ad aggiungere l'ultimo elemento",
            'emitter': 'received',
            'time': '15:31'
          },
          {
            'text': 'Hai ragione. Vuoi inserirci un synth o una chitarra?',
            'emitter': 'sended',
            'time': '16:15'
          }
        ]
      },
      {
        'name': 'Luisa',
        'avatar': 'img/avatar_io.jpg',
        'lastAccess': '21.28',
        'chatMessages': [
          {
            'text': "Allora? Come stai dopo l'operazione agli occhi?",
            'emitter': 'sended',
            'time': '15:30'
          },
          {
            'text': "Sembra che sia andato tutto liscio, ma devo stare al buio per una settimana",
            'emitter': 'received',
            'time': '15:31'
          },
          {
            'text': 'Vai tra, tanto siamo in zona rossa. Non ti perdi niente!',
            'emitter': 'sended',
            'time': '16:15'
          }
        ]
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

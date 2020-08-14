export default {
  data: {
    
    status: 'show',

    selectedImage: {
      name: null,
      url: null,
      emoji: null      
    },

    links: [
      {
        'name': 'Ninja',
        'emoji': '🐱‍👤',
        'url':  'https://static.dribbble.com/users/1141243/screenshots/5365674/ninja_8.png'
      },
      {
        'name': 'Gato',
        'emoji': '🐱‍',
        'url':  'https://static.dribbble.com/users/86597/screenshots/6213126/cat.jpg'
      },
    ]

  },    
  setImage: function(name, url, emoji){

    this.data.selectedImage.emoji = emoji;
    this.data.selectedImage.name = name;
    this.data.selectedImage.url  = url;

  },
  log(){
    console.log("log");
  }
  

}
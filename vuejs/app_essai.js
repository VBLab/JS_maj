new Vue({
    el: '#app',
    data: {
      nameValue: 'Abdel',
      message : false,
      autreMessage : "Le meilleur dev de Savoie"
    },
    methods : {
      // A bannnir !!!
      // cacher : () => {asdfas}
      cacher: function () {
        // faire plus des choses
        // quand on souhaite qq chose de plus compliqué
        this.message = !this.message;
      },
      changerTitre : function(){
        console.log("Il faut changer le titre")
      }
    }
    
  });
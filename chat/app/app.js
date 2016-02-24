(function(){
  'use strict';
  angular.module("chat", ["firebase"])
  .controller("chatController",chatController);

  chatController.$inject = ["$firebaseArray"];
  function chatController($firebaseArray){
    var link = new Firebase("https://cintanegra.firebaseio.com/messages");

    var chat = this;

    chat.name = "Hola";
    chat.messages = $firebaseArray(link);

    chat.addMessage = addMessage;


    function addMessage(){
      if (chat.text) {
        chat.messages.$add({
          'nick'  : chat.nick,
          'message' : chat.text,
        });
          chat.text = "";
      }


    }
  }
})();

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Players } from '../../api/players.js';
import { johnPlayers } from '../../api/players.js';
import { eliPlayers } from '../../api/players.js';
import { alexPlayers } from '../../api/players.js';
import { billPlayers } from '../../api/players.js';
import { danielaPlayers } from '../../api/players.js';
import { danielgPlayers } from '../../api/players.js';
import { kevinPlayers } from '../../api/players.js';
import { pabloPlayers } from '../../api/players.js';
import { stevenPlayers } from '../../api/players.js';
import { theresaPlayers } from '../../api/players.js';
import { yamilPlayers } from '../../api/players.js';
import { zachPlayers } from '../../api/players.js';
import { counterCollection } from '../../api/players.js';
import { draftOrder } from '../../api/players.js';
import { messageCollection } from '../../api/players.js';
import { adminTasks } from '../../api/players.js';

import template from './dynastyDraft.html';


const currentUserName = Meteor.user();
var turn = 1;

class DynastyDraftCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.hideCompleted = false;
 
    this.helpers({
      players() {
        const selector = {};
 
        // If hide completed is checked, filter tasks
        if (this.getReactively('hideCompleted')) {
          selector.checked = {
            $ne: true
          };
        }

        // Show newest tasks at the top
        return Players.find(selector, {
          sort: {
            rank: 1,
            yrank: 1,
          }
        });
      },
      displaydraftorder() {
        var draftArray = []
        var currentTurn = counterCollection.find().count();

        const preSelector5 = {turn: (currentTurn - 5)};
        var preDrafter5 = draftOrder.find(preSelector5, {
          limit: 1
        });
        const preSelector4 = {turn: (currentTurn - 4)};
        var preDrafter4 = draftOrder.find(preSelector4, {
          limit: 1
        });
        const preSelector3 = {turn: (currentTurn - 3)};
        var preDrafter3 = draftOrder.find(preSelector3, {
          limit: 1
        });
        const preSelector2 = {turn: (currentTurn - 2)};
        var preDrafter2 = draftOrder.find(preSelector2, {
          limit: 1
        });
        const preSelector1 = {turn: (currentTurn - 1)};
        var preDrafter1 = draftOrder.find(preSelector1, {
          limit: 1
        });
        const postSelector1 = {turn: (currentTurn + 1)};
        var postDrafter1 = draftOrder.find(postSelector1, {
          limit: 1
        });
        const postSelector2 = {turn: (currentTurn + 2)};
        var postDrafter2 = draftOrder.find(postSelector2, {
          limit: 1
        });
        const postSelector3 = {turn: (currentTurn + 3)};
        var postDrafter3 = draftOrder.find(postSelector3, {
          limit: 1
        });
        const postSelector4 = {turn: (currentTurn + 4)};
        var postDrafter4 = draftOrder.find(postSelector4, {
          limit: 1
        });
        const postSelector5 = {turn: (currentTurn + 5)};
        var postDrafter5 = draftOrder.find(postSelector5, {
          limit: 1
        });
       const selector = {turn: currentTurn};
        var drafter = draftOrder.find(selector, {
          limit: 1
        });
        
        draftArray.push(preDrafter5, preDrafter4, preDrafter3, preDrafter2, preDrafter1, drafter, postDrafter1, postDrafter2, postDrafter3, postDrafter4, postDrafter5);

        return draftArray;
      },
      draftOrderPre3() {
        var currentTurn = counterCollection.find().count();
        const preSelector3 = {turn: (currentTurn - 3)};
        var preDrafter3 = draftOrder.find(preSelector3, {
          limit: 1
        });
        return preDrafter3;
      },
      draftOrderPre2() {
        var currentTurn = counterCollection.find().count();
        const preSelector2 = {turn: (currentTurn - 2)};
        var preDrafter2 = draftOrder.find(preSelector2, {
          limit: 1
        });
        return preDrafter2;
      },
      draftOrderPre1() {
        var currentTurn = counterCollection.find().count();
        const preSelector1 = {turn: (currentTurn - 1)};
        var preDrafter1 = draftOrder.find(preSelector1, {
          limit: 1
        });
        return preDrafter1;
      },
      draftOrderCurrent() {
        var currentTurn = counterCollection.find().count();
       const selector = {turn: currentTurn};
        var drafter = draftOrder.find(selector, {
          limit: 1
        });
        return drafter;
      },
      draftOrderPost1() {
        var currentTurn = counterCollection.find().count();
        const postSelector1 = {turn: (currentTurn + 1)};
        var postDrafter1 = draftOrder.find(postSelector1, {
          limit: 1
        });
        return postDrafter1;
      },
      draftOrderPost2() {
        var currentTurn = counterCollection.find().count();
        const postSelector2 = {turn: (currentTurn + 2)};
        var postDrafter2 = draftOrder.find(postSelector2, {
          limit: 1
        });
        return postDrafter2;
      },
      draftOrderPost3() {
        var currentTurn = counterCollection.find().count();
        const postSelector3 = {turn: (currentTurn + 3)};
        var postDrafter3 = draftOrder.find(postSelector3, {
          limit: 1
        });
        return postDrafter3;
      },
      johnplayers() {
        const selector = {};
 
        // If hide completed is checked, filter tasks
        if (this.getReactively('hideCompleted')) {
          selector.checked = {
            $ne: true
          };
        }
        // Show newest tasks at the top
        return johnPlayers.find(selector, {
          sort: {
            createdAt: -1
          }
        });
      },
      incompleteCount() {
        return Players.find({
          checked: {
            $ne: true
          }
        }).count();
      },
      currentUser() {
        return Meteor.user();
      },
      displayMessages() {
        const selector = {};
        return messageCollection.find(selector, {
          sort: {
            createdAt: -1
          }
        });
      },
      displayAdminTasks() {
        var user = Meteor.user();
        var username = user && user.username;
        if(username){
          console.log(username)
        };
        const selector = {};
        if (username == "John") {
          return adminTasks.find(selector, {
            sort: {
              createdAt: -1
            }
          });
        }
      },
      turnUser() {
        var turn = counterCollection.find().count();
        switch(turn) {
          case 1:
          case 13:
          case 19:
          case 20:
          case 25:
          case 37:
            return "Daniel_A";
            break;
          case 2:
          case 8:
          case 12:
          case 16:
          case 44:
          case 47:
          case 54:
            return "Alex";
            break;
          case 3:
          case 43:
          case 45:
          case 52:
          case 57:
            return "Zach";
            break;
          case 5:
          case 17:
          case 29:
          case 41:
          case 53:
            return "Dan_G";
            break;
          case 4:
          case 7:
          case 24:
          case 36:
          case 48:
            return "Eli";
            break;
          case 6:
          case 42:
          case 56:
          case 63:
          case 66:
            return "Yamil";
            break;
          case 9:
          case 28:
          case 32:
          case 33:
          case 49:
            return "Bill";
            break;
          case 10:
          case 18:
          case 22:
          case 34:
          case 46:
          case 58:
            return "Kevin";
            break;
          case 11:
          case 15:
          case 21:
          case 27:
          case 39:
          case 40:
          case 51:
            return "Theresa";
            break;
          case 14:
          case 26:
          case 38:
          case 50:
          case 61:
            return "Pablo";
            break;
          case 23:
          case 30:
          case 35:
          case 59:
          case 64:
            return "John";
            break;
          case 31:
          case 55:
          case 60:
          case 62:
          case 65:
            return "Steven";
            break;
        }
      },

      userplayers() {
        var user = Meteor.user();
        var username = user && user.username;
        if(username){
          console.log(username)
        };

        const selector = {};
 
        // If hide completed is checked, filter tasks
        if (this.getReactively('hideCompleted')) {
          selector.checked = {
            $ne: true
          };
        }

        switch(username) {
          case "John":
            return johnPlayers.find(selector, {
            });
            break;
          case "Eli":
            return eliPlayers.find(selector, {
            });
            break;
          case "Alex":
            return alexPlayers.find(selector, {
            });
            break;
          case "Bill":
            return billPlayers.find(selector, {
            });
            break;
          case "Daniel_A":
            return danielaPlayers.find(selector, {
            });
            break;
          case "Dan_G":
            return danielgPlayers.find(selector, {
            });
            break;
          case "Kevin":
            return kevinPlayers.find(selector, {
            });
            break;
          case "Pablo":
            return pabloPlayers.find(selector, {
            });
            break;
          case "Steven":
            return stevenPlayers.find(selector, {
            });
            break;
          case "Theresa":
            return theresaPlayers.find(selector, {
            });
            break;
          case "Yamil":
            return yamilPlayers.find(selector, {
            });
            break;
          case "Zach":
            return zachPlayers.find(selector, {
            });
            break;
        }

      }

    })
  }

  addPlayer(newPlayer) {
    // Insert a task into the collection
    Meteor.call('players.insert', newPlayer);
 
    // Clear form
    this.newPlayer = '';
  }

  setChecked(player) {
    // Set the checked property to the opposite of its current value
    Meteor.call('players.setChecked', player._id, !player.checked);
  }

  startDraft() {
    var user = Meteor.user();
    var username = user && user.username;
    if(username){
      console.log(username)
    };
    var turncount = counterCollection.find().count();
    if(turncount){
      console.log(turncount)
    };
    var message = "The draft is underway!"
    if (username == "John" && turncount == 0) {
      Meteor.call('players.doturn');
      Meteor.call('countercollection');
      Meteor.call('startmessage', message);}
    else {
      alert("You are not authorized to start the draft.");
    }
  }

  removePlayer(player) {
    var user = Meteor.user();
    var username = user && user.username;
    if(username){
      console.log(username)
    };
    var turncount = counterCollection.find().count();
    if(turncount){
      console.log(turncount)
    };
    var draftee = player.name;
    var message = "With pick number " + turncount + ", " + username + " selects " + draftee + "."
    switch(username) {
      case "Daniel_A":
        switch(turncount) {
          case 1:
          case 13:
          case 19:
          case 20:
          case 25:
          case 37:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Alex":
        switch(turncount) {
          case 2:
          case 8:
          case 12:
          case 16:
          case 44:
          case 47:
          case 54:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Zach":
        switch(turncount) {
          case 3:
          case 43:
          case 45:
          case 52:
          case 57:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Dan_G":
        switch(turncount) {
          case 5:
          case 17:
          case 29:
          case 41:
          case 53:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Eli":
        switch(turncount) {
          case 4:
          case 7:
          case 24:
          case 36:
          case 48:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Yamil":
        switch(turncount) {
          case 6:
          case 42:
          case 56:
          case 63:
          case 66:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Bill":
        switch(turncount) {
          case 9:
          case 28:
          case 32:
          case 33:
          case 49:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Kevin":
        switch(turncount) {
          case 10:
          case 18:
          case 22:
          case 34:
          case 46:
          case 58:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Theresa":
        switch(turncount) {
          case 11:
          case 15:
          case 21:
          case 27:
          case 39:
          case 40:
          case 51:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Pablo":
        switch(turncount) {
          case 14:
          case 26:
          case 38:
          case 50:
          case 61:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "John":
        switch(turncount) {
          case 23:
          case 30:
          case 35:
          case 59:
          case 64:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Steven":
        switch(turncount) {
          case 31:
          case 55:
          case 60:
          case 62:
          case 65:
          if(confirm("Are you sure you want to draft " + player.name + "?")){
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');}
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      }
  }
  removePlayerWithoutConfirm() {
    var countdown = function(time) {
      clearInterval(countdown);
      setInterval(function(){
      time -= 1;
      var el = document.getElementById("replace");
      el.innerHTML = time + " seconds remaining.";
      }, 1000)
    };
    var user = Meteor.user();
    var username = user && user.username;
    if(username){
      console.log(username)
    };
    var turncount = counterCollection.find().count();
    if(turncount){
      console.log(turncount)
    };
    var player = Players.findOne({}, {
      sort: {
        rank: 1,
        yrank: 1,
      }
    });
    var draftee = player.name;
    var message = "With pick number " + turncount + ", " + username + " selects " + draftee + "."
    switch(username) {
      case "Daniel_A":
        switch(turncount) {
          case 1:
          case 13:
          case 19:
          case 20:
          case 25:
          case 37:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Alex":
        switch(turncount) {
          case 2:
          case 4:
          case 6:
          case 30:
          case 40:
          case 42:
          case 54:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Zach":
        switch(turncount) {
          case 3:
          case 16:
          case 39:
          case 45:
          case 52:
          case 57:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Dan_G":
        switch(turncount) {
          case 5:
          case 17:
          case 29:
          case 41:
          case 53:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Eli":
        switch(turncount) {
          case 7:
          case 12:
          case 24:
          case 36:
          case 48:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Yamil":
        switch(turncount) {
          case 8:
          case 44:
          case 56:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Bill":
        switch(turncount) {
          case 9:
          case 28:
          case 32:
          case 33:
          case 49:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Kevin":
        switch(turncount) {
          case 10:
          case 18:
          case 22:
          case 34:
          case 46:
          case 58:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Theresa":
        switch(turncount) {
          case 11:
          case 15:
          case 21:
          case 27:
          case 51:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Pablo":
        switch(turncount) {
          case 14:
          case 26:
          case 38:
          case 50:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "John":
        switch(turncount) {
          case 23:
          case 35:
          case 47:
          case 59:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      case "Steven":
        switch(turncount) {
          case 31:
          case 43:
          case 55:
          case 60:
            Meteor.call('messagecollection', message);
            Meteor.call('players.remove', player._id);
            Meteor.call('userplayers.insert', player);
            Meteor.call('players.doturn');
            Meteor.call('countercollection');
                  clearInterval(countdown);
            countdown(time);
            break;
          default:
            alert("It is not your turn.");
          }
        break;

      }
  }

}
 
export default angular.module('dynastyDraft', [
  angularMeteor,
])
  .component('dynastyDraft', {
    templateUrl: 'imports/components/dynastyDraft/dynastyDraft.html',
    controller: ['$scope', DynastyDraftCtrl]
  });
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Players = new Mongo.Collection('players');
export const johnPlayers = new Mongo.Collection('johnplayers');
export const eliPlayers = new Mongo.Collection('eliplayers');
export const alexPlayers = new Mongo.Collection('alexplayers');
export const billPlayers = new Mongo.Collection('billplayers');
export const danielaPlayers = new Mongo.Collection('danielaplayers');
export const danielgPlayers = new Mongo.Collection('danielgplayers');
export const kevinPlayers = new Mongo.Collection('kevinplayers');
export const pabloPlayers = new Mongo.Collection('pabloplayers');
export const stevenPlayers = new Mongo.Collection('stevenplayers');
export const theresaPlayers = new Mongo.Collection('theresaplayers');
export const yamilPlayers = new Mongo.Collection('yamilplayers');
export const zachPlayers = new Mongo.Collection('zachplayers');
export const counterCollection = new Mongo.Collection('countercollection');
export const draftOrder = new Mongo.Collection('draftorder');
export const messageCollection = new Mongo.Collection('messagecollection');
export const adminTasks = new Mongo.Collection('admintasks');

Meteor.methods({

  'userplayers.insert' (player) {
    check(player, Object);
 
    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    var user = Meteor.user();
    var username = user && user.username;
    if(username){
      console.log(username)
    };
    console.log(player.name);

    switch(username) {
      case "John":
        johnPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Eli":
          eliPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Alex":
        alexPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Bill":
          billPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Daniel_A":
        danielaPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Dan_G":
          danielgPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Kevin":
        kevinPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Pablo":
          pabloPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Steven":
        stevenPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Theresa":
          theresaPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Yamil":
        yamilPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Zach":
          zachPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
    }

  },


'forceduserplayers.insert' (player, username) {
    check(player, Object);

 
    console.log(player.name);
    console.log(username);

    switch(username) {
      case "John":
        johnPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Eli":
          eliPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Alex":
        alexPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Bill":
          billPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Daniel_A":
        danielaPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Dan_G":
          danielgPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Kevin":
        kevinPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Pablo":
          pabloPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Steven":
        stevenPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Theresa":
          theresaPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Yamil":
        yamilPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
      case "Zach":
          zachPlayers.insert({
          name: player.name,
          position: player.position,
          team: player.team,
          rank: player.rank,
          yrank: player.yrank,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        break;
    }

  },





  'players.insert' (text) {
 
    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Players.insert({
      name,
      position,
      team,
      rank,
      yrank,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'players.remove' (playerId) {
    check(playerId, String);
 
    Players.remove(playerId);
  },

  'countercollection'() {
    return counterCollection.find().count();
  },

  'players.doturn' () {
    counterCollection.insert({
      turn: 1,
    });
  },

  'startmessage' (message) {
    messageCollection.insert({
      draftmessage: message,
      createdAt: new Date(),
    });
  },

  'messagecollection' (message) {
    messageCollection.insert({
      draftmessage: message,
      createdAt: new Date(),
    });
  },
  
});

Meteor.startup(function () {

if (adminTasks.find().count() < 1) {
  adminTasks.insert({name: 'Start the draft'});
}

    if (Players.find().count() < 10) {

Players.insert({name: 'Brian Johnson', position: 'SP', team: 'Boston Red Sox', rank: '', yrank: '' })
Players.insert({name: 'Hunter Dozier', position: '3B', team: 'Kansas City Royals', rank: '', yrank: 1217 })
Players.insert({name: 'Ubaldo Jimenez', position: 'SP', team: 'Baltimore Orioles', rank: '', yrank: 688 })
Players.insert({name: 'Wily Peralta', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: 639 })
Players.insert({name: 'Connor Greene', position: 'SP', team: 'Toronto Blue Jays', rank: '', yrank: '' })
Players.insert({name: 'Matt Olson', position: '1B', team: 'Oakland Athletics', rank: '', yrank: 1304 })
Players.insert({name: 'Curtis Granderson', position: 'OF', team: 'New York Mets', rank: '', yrank: 217 })
Players.insert({name: 'Brandon McCarthy', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: 662 })
Players.insert({name: 'CC Sabathia', position: 'SP', team: 'New York Yankees', rank: '', yrank: 239 })
Players.insert({name: 'Colby Lewis', position: 'SP', team: 'Texas Rangers', rank: '', yrank: 272 })
Players.insert({name: 'Raul Mondesi', position: 'SS,2B', team: 'Kansas City Royals', rank: '', yrank: 951 })
Players.insert({name: 'Cody Reed', position: 'SP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })
Players.insert({name: 'Melvin Upton Jr.', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: 142 })
Players.insert({name: 'Jorge Polanco', position: 'SS', team: 'Minnesota Twins', rank: '', yrank: 573 })
Players.insert({name: 'Alec Asher', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: 493 })
Players.insert({name: 'TJ Rivera', position: 'SS,2B', team: 'New York Mets', rank: '', yrank: 764 })
Players.insert({name: 'Cameron Maybin', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: 171 })
Players.insert({name: 'Alex Gordon', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: 418 })
Players.insert({name: 'Edinson Volquez', position: 'SP', team: 'Miami Marlins', rank: '', yrank: 695 })
Players.insert({name: 'Scooter Gennett', position: '2B', team: 'Milwaukee Brewers', rank: '', yrank: 259 })
Players.insert({name: 'Alex Dickerson', position: 'OF', team: 'San Diego Padres', rank: '', yrank: 456 })
Players.insert({name: 'Hyun Soo Kim', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: 471 })
Players.insert({name: 'Mike Zunino', position: 'C', team: 'Seattle Mariners', rank: '', yrank: 810 })
Players.insert({name: 'Jesse Winker', position: 'OF', team: 'Cincinatti Reds', rank: 53, yrank: '' })
Players.insert({name: 'David Wright', position: '3B', team: 'New York Mets', rank: '', yrank: 849 })
Players.insert({name: 'Ryan Zimmerman', position: '1B', team: 'Washington Nationals', rank: '', yrank: 503 })
Players.insert({name: 'Ryan McMahon', position: '3B', team: 'Colorado Rockies', rank: '', yrank: '' })
Players.insert({name: 'Touki Toussaint', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })
Players.insert({name: 'Starlin Castro', position: 'SS,2B', team: 'New York Yankees', rank: '', yrank: 192 })
Players.insert({name: 'Ryan Schimpf', position: '2B,3B', team: 'San Diego Padres', rank: '', yrank: 452 })
Players.insert({name: 'Travis Jankowski', position: 'OF', team: 'San Diego Padres', rank: '', yrank: 285 })
Players.insert({name: 'Adonis Garcia', position: '3B', team: 'Atlanta Braves', rank: '', yrank: 241 })
Players.insert({name: 'Brandon Moss', position: 'OF,1B', team: 'St. Louis Cardinals', rank: '', yrank: 292 })
Players.insert({name: 'Drew Hutchison', position: 'SP', team: 'Pittsburgh Pirates', rank: '', yrank: 783 })
Players.insert({name: 'Aaron Blair', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: 1338 })
Players.insert({name: 'Albert Suarez', position: 'SP,RP', team: 'San Francisco Giants', rank: '', yrank: 547 })
Players.insert({name: 'Doug Fister', position: 'SP', team: 'Houston Astros', rank: '', yrank: 384 })
Players.insert({name: 'Chris Owings', position: '2B,SS,OF', team: 'Arizona Diamondbacks', rank: '', yrank: 200 })
Players.insert({name: 'Austin Hedges', position: 'C', team: 'San Diego Padres', rank: '', yrank: 1301 })
Players.insert({name: 'Jedd Gyorko', position: '2B,1B,3B,SS', team: 'St. Louis Cardinals', rank: '', yrank: 278 })
Players.insert({name: 'Cornelius Randolph', position: 'OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })
Players.insert({name: 'Kennys Vargas', position: 'DH,1B', team: 'Minnesota Twins', rank: '', yrank: 748 })
Players.insert({name: 'Joe Panik', position: '2B', team: 'San Francisco Giants', rank: '', yrank: 360 })
Players.insert({name: 'Hector Santiago', position: 'SP', team: 'Minnesota Twins', rank: '', yrank: 287 })
Players.insert({name: 'Gabriel Ynoa', position: 'SP,RP', team: 'New York Mets', rank: '', yrank: 959 })
Players.insert({name: 'Mitch Moreland', position: '1B', team: 'Boston Red Sox', rank: '', yrank: 391 })
Players.insert({name: 'Jeanmar Gomez', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: 214 })
Players.insert({name: 'RA Dickey', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: 334 })
Players.insert({name: "Peter O'Brien", position: 'OF', team: 'Kansas City Royals', rank: '', yrank: 1200 })
Players.insert({name: 'Eloy Jimenez', position: 'OF', team: 'Chicago Cubs', rank: 23, yrank: '' })

Players.insert({name: 'Micky Moniak', position: 'OF', team: 'Philadelphia Phillies', rank: 24, yrank: '' })

Players.insert({name: 'Corey Ray', position: 'OF', team: 'Milwaukee Brewers', rank: 27, yrank: '' })

Players.insert({name: 'Kyle Lewis', position: 'OF', team: 'Seattle Mariners', rank: 28, yrank: '' })

Players.insert({name: 'Michael Kopech', position: 'RHP', team: 'Chicago White Sox', rank: 30, yrank: '' })

Players.insert({name: 'Jason Groome', position: 'LHP', team: 'Boston Red Sox', rank: 31, yrank: '' })

Players.insert({name: 'Cody Bellinger', position: '1B', team: 'Los Angeles Dodgers', rank: 32, yrank: '' })

Players.insert({name: 'Braxton Garrett', position: 'LHP', team: 'Miami Marlins', rank: 37, yrank: '' })

Players.insert({name: 'Riley Pint', position: 'RHP', team: 'Colorado Rockies', rank: 39, yrank: '' })

Players.insert({name: 'Kevin Newman', position: 'SS', team: 'Pittsburgh Pirates', rank: 42, yrank: '' })

Players.insert({name: 'Nick Senzel', position: '3B', team: 'Cincinnati Reds', rank: 44, yrank: '' })

Players.insert({name: 'Alex Verdugo', position: 'OF', team: 'Los Angeles Dodgers', rank: 46, yrank: '' })

Players.insert({name: 'Nick Gordon', position: 'SS', team: 'Minnesota Twins', rank: 48, yrank: '' })

Players.insert({name: 'Blake Rutherford', position: 'OF', team: 'New York Yankees', rank: 51, yrank: '' })

Players.insert({name: 'Phil Bickford', position: 'RHP', team: 'Milwaukee Brewers', rank: 54, yrank: '' })

Players.insert({name: 'Trent Clark', position: 'OF', team: 'Milwaukee Brewers', rank: 62, yrank: '' })

Players.insert({name: 'A.J. Puk', position: 'LHP', team: 'Cincinnati Reds', rank: 65, yrank: '' })

Players.insert({name: 'Matt Manning', position: 'RHP', team: 'Detroit Tigers', rank: 66, yrank: '' })

Players.insert({name: 'Bobby Bradley', position: '1B', team: 'Cleveland Indians', rank: 67, yrank: '' })

Players.insert({name: 'Forrest Whitley', position: 'RHP', team: 'Houston Astros', rank: 69, yrank: '' })

Players.insert({name: 'Mitch Keller', position: 'RHP', team: 'Pittsburgh Pirates', rank: 72, yrank: '' })

Players.insert({name: 'Jake Bauers', position: 'OF', team: 'Tamba Bay Rays', rank: 73, yrank: '' })

Players.insert({name: 'Richard Urena', position: 'SS', team: 'Toronto Blue Jays', rank: 74, yrank: '' })

Players.insert({name: 'Sein Reid-Foley', position: 'RHP', team: 'Toronto Blue Jays', rank: 76, yrank: '' })

Players.insert({name: 'Ian Anderson', position: 'RHP', team: 'Atlanta Braves', rank: 77, yrank: '' })

Players.insert({name: 'Justus Sheffield', position: 'LHP', team: 'New York Yankees', rank: 78, yrank: '' })

Players.insert({name: 'Zack Collins', position: 'C', team: 'Chicago White Sox', rank: 80, yrank: '' })

Players.insert({name: 'Harrison Bader', position: 'OF', team: 'St. Louis Cardinals', rank: 82, yrank: '' })

Players.insert({name: 'Derek Fisher', position: 'OF', team: 'Houston Astros', rank: 83, yrank: '' })

Players.insert({name: 'Francisco Mejia', position: 'C', team: 'Cleveland Indians', rank: 84, yrank: '' })

Players.insert({name: 'Willie Calhoun', position: '2B', team: 'Los Angeles Dodgers', rank: 87, yrank: '' })

Players.insert({name: 'Josh Naylor', position: '1B', team: 'San Diego Padres', rank: 88, yrank: '' })

Players.insert({name: 'Kevin Maitan', position: 'SS', team: 'Atlanta Braves', rank: 89, yrank: '' })

Players.insert({name: 'Mike Soroka', position: 'RHP', team: 'Atlanta Braves', rank: 90, yrank: '' })

Players.insert({name: 'Yadier Alvarez', position: 'RHP', team: 'Los Angeles Dodgers', rank: 91, yrank: '' })

Players.insert({name: 'Alex Kirilloff', position: 'OF', team: 'Minnesota Twins', rank: 92, yrank: '' })

Players.insert({name: 'Yusniel Diaz', position: 'OF', team: 'Los Angeles Dodgers', rank: 93, yrank: '' })

Players.insert({name: 'Triston McKenzie', position: 'RHP', team: 'Cleveland Indians', rank: 95, yrank: '' })

Players.insert({name: 'Isnan Diaz', position: 'SS', team: 'Milwaukee Brewers', rank: 96, yrank: '' })

Players.insert({name: 'Dylan Cease', position: 'RHP', team: 'Chicago Cubs', rank: 97, yrank: '' })

Players.insert({name: 'Jeimer Candelario', position: '3B', team: 'Chicago Cubs', rank: 99, yrank: '' })

Players.insert({name: 'German Marquez', position: 'RHP', team: 'Colorado Rockies', rank: 100, yrank: '' })

Players.insert({name: 'Chris Young', position: 'OF', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Álex Rodríguez', position: 'Util', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'A.J. Pierzynski', position: 'C', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Joe Nathan', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Randy Wolf', position: 'SP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Jimmy Rollins', position: 'SS', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Jayson Werth', position: 'OF', team: 'Washington Nationals', rank: '', yrank: 199 })

Players.insert({name: 'Jason Grilli', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: 188 })

Players.insert({name: 'Bronson Arroyo', position: 'SP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Randy Choate', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Mark Buehrle', position: 'SP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Ryan Vogelsong', position: 'SP,RP', team: 'Pittsburgh Pirates', rank: '', yrank: 844 })

Players.insert({name: 'Ichiro Suzuki', position: 'OF', team: 'Miami Marlins', rank: '', yrank: 916 })

Players.insert({name: 'Willie Bloomquist', position: 'SS,CI', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Joaquín Benoit', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: 249 })

Players.insert({name: 'Joe Beimel', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Josh Hamilton', position: 'OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Juan Uribe', position: '2B,3B', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Kyle Lohse', position: 'SP,RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Mark Teixeira', position: '1B', team: 'New York Yankees', rank: '', yrank: 936 })

Players.insert({name: 'Brandon Phillips', position: '2B', team: 'Cincinnati Reds', rank: '', yrank: 167 })

Players.insert({name: 'Marlon Byrd', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Carl Crawford', position: 'OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Jake Peavy', position: 'SP,RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Jerome Williams', position: 'SP,RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Fernando Rodney', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: 190 })

Players.insert({name: 'Oliver Pérez', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'David Ross', position: 'C', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Coco Crisp', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: 608 })

Players.insert({name: 'Omar Infante', position: '2B', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Cliff Lee', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Jeremy Guthrie', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Joe Mauer', position: '1B', team: 'Minnesota Twins', rank: '', yrank: 604 })

Players.insert({name: 'Justin Morneau', position: '1B', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Chase Utley', position: '2B,CI', team: 'Los Angeles Dodgers', rank: '', yrank: 372 })

Players.insert({name: 'Sean Burnett', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Javier López', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Shane Victorino', position: 'OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Chris Capuano', position: 'SP,RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Adam Loewen', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Jhonny Peralta', position: '3B,SS', team: 'St. Louis Cardinals', rank: '', yrank: 1069 })

Players.insert({name: 'Chin-Hui Tsao', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Neal Cotts', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Matt Thornton', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Rickie Weeks Jr.', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Clint Barmes', position: 'SS', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'David DeJesús', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Matt Belisle', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Edwin Jackson', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Jonny Gómes', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Adam LaRoche', position: '1B', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Álex Ríos', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Grady Sizemore', position: 'OF', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Dioner Navarro', position: 'C', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Jorge De La Rosa', position: 'SP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'J.J. Hardy', position: 'SS', team: 'Baltimore Orioles', rank: '', yrank: 798 })

Players.insert({name: 'Prince Fielder', position: '1B', team: 'Texas Rangers', rank: '', yrank: 1001 })

Players.insert({name: 'Dustin McGowan', position: 'RP', team: 'Miami Marlins', rank: '', yrank: 289 })

Players.insert({name: 'Jeff Mathis', position: 'C', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Gavin Floyd', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Andrés Blanco', position: '1B,2B,3B,SS', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Corey Hart', position: '1B', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Chad Qualls', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Jeff Francis', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Chris Young', position: 'SP,RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Maicer Izturis', position: '2B,3B', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Nick Swisher', position: '1B,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Ryan Howard', position: '1B', team: 'Philadelphia Phillies', rank: '', yrank: 830 })

Players.insert({name: 'Logan Kensing', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Ryan Raburn', position: 'OF', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'René Rivera', position: 'C', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Huston Street', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: 676 })

Players.insert({name: 'Aaron Hill', position: '2B,3B', team: 'Boston Red Sox', rank: '', yrank: 871 })

Players.insert({name: 'Matt Cain', position: 'SP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Shin-soo Choo', position: 'OF', team: 'Texas Rangers', rank: '', yrank: 1018 })

Players.insert({name: 'Tim Stauffer', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Chien-Ming Wang', position: 'SP,RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Chris Narveson', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Zach Duke', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: 223 })

Players.insert({name: 'Nate McLouth', position: 'OF', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Brayan Peña', position: 'C', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Joel Peralta', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Kelly Johnson', position: '1B,2B,3B,OF', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Stephen Drew', position: '2B,3B,SS', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Michael Morse', position: '1B,OF', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Skip Schumaker', position: '2B,OF', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'C.J. Wilson', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'J.P. Howell', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Blaine Boyer', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Jeff Francoeur', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Jason Vargas', position: 'SP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Dana Eveland', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Roberto Hernández', position: 'SP,RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Craig Breslow', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Jonathan Broxton', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Jonathan Papelbon', position: 'RP', team: 'Washington Nationals', rank: '', yrank: 308 })

Players.insert({name: 'Scott Feldman', position: 'SP,RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Billy Butler', position: '1B', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Franklin Gutiérrez', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: 933 })

Players.insert({name: 'Robert Andino', position: '2B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Geovany Soto', position: 'C', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Chris Denorfia', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Josh Johnson', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Tom Gorzelanny', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Dan Uggla', position: '2B', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Yusmeiro Petit', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Anibal Sánchez', position: 'SP,RP', team: 'Detroit Tigers', rank: '', yrank: 965 })

Players.insert({name: 'Chad Billingsley', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Jered Weaver', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Andre Ethier', position: 'OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Glen Perkins', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: 534 })

Players.insert({name: 'Boone Logan', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: 234 })

Players.insert({name: 'Ángel Pagán', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: 233 })

Players.insert({name: 'Sean Marshall', position: 'SP,RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Ricky Nolasco', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: 789 })

Players.insert({name: 'James Loney', position: '1B', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Peter Moylan', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Travis Ishikawa', position: '1B,OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Erick Aybar', position: '3B,SS', team: 'Detroit Tigers', rank: '', yrank: 992 })

Players.insert({name: 'Howie Kendrick', position: '1B,2B,3B,OF', team: 'Philadelphia Phillies', rank: '', yrank: 703 })

Players.insert({name: 'Casey Janssen', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Carlos Ruiz', position: 'C', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Carlos Villanueva', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'James Shields', position: 'SP', team: 'Chicago White Sox', rank: '', yrank: 1128 })

Players.insert({name: 'Pat Neshek', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: 247 })

Players.insert({name: 'Edward Mujica', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Mike Pelfrey', position: 'SP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'John Danks', position: 'SP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Mark Lowe', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Matt Albers', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Matt Garza', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: 857 })

Players.insert({name: 'Jim Johnson', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: 178 })

Players.insert({name: 'Michael Bourn', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: 831 })

Players.insert({name: 'Alberto Callaspo', position: '3B', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Rajai Davis', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: 175 })

Players.insert({name: "Eric O'Flaherty", position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Chris Iannetta', position: 'C', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Chris Stewart', position: 'C', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Adam Lind', position: '1B', team: 'Seattle Mariners', rank: '', yrank: 715 })

Players.insert({name: 'David Murphy', position: 'OF', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Miguel Montero', position: 'C', team: 'Chicago Cubs', rank: '', yrank: 1009 })

Players.insert({name: 'Eric Stults', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Joaquín Árias', position: 'SS,CI', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Phil Hughes', position: 'SP', team: 'Minnesota Twins', rank: '', yrank: 924 })

Players.insert({name: 'Luke Hochevar', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Yovani Gallardo', position: 'SP', team: 'Baltimore Orioles', rank: '', yrank: 981 })

Players.insert({name: 'Gregor Blanco', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Yunel Escobar', position: '3B', team: 'Los Angeles Angels', rank: '', yrank: 559 })

Players.insert({name: 'Jarrod Saltalamacchia', position: 'C,1B', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Homer Bailey', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: 682 })

Players.insert({name: 'Tony Sipp', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Franklin Morales', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Joakim Soria', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: 407 })

Players.insert({name: 'Tyler Clippard', position: 'RP', team: 'New York Yankees', rank: '', yrank: 238 })

Players.insert({name: 'Ross Ohlendorf', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Alfredo Simón', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Tim Lincecum', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Reid Brignac', position: '3B', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Alejandro De Aza', position: 'OF', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Joe Smith', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Don Kelly', position: '1B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Brandon Morrow', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Garrett Jones', position: '1B,OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Mark Reynolds', position: '1B,3B,OF', team: 'Colorado Rockies', rank: '', yrank: 423 })

Players.insert({name: 'Brendan Ryan', position: '2B,3B,SS', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Kurt Suzuki', position: 'C', team: 'Atlanta Braves', rank: '', yrank: 891 })

Players.insert({name: 'Kyle Kendrick', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Chase Headley', position: '3B', team: 'New York Yankees', rank: '', yrank: 661 })

Players.insert({name: 'Jo-Jo Reyes', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Manny Parra', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Joba Chamberlain', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Clay Buchholz', position: 'SP,RP', team: 'Philadelphia Phillies', rank: '', yrank: 861 })

Players.insert({name: 'Radhames Liz', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Emilio Bonifacio', position: '2B,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Steve Pearce', position: '1B,2B,OF', team: 'Toronto Blue Jays', rank: '', yrank: 873 })

Players.insert({name: 'Ross Detwiler', position: 'SP,RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Justin Maxwell', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Ryan Hanigan', position: 'C', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Sam Fuld', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Jerry Blevins', position: 'RP', team: 'New York Mets', rank: '', yrank: 215 })

Players.insert({name: 'Seth Smith', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: 613 })

Players.insert({name: 'Justin Ruggiano', position: 'OF', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Wesley Wright', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Alexei Ramírez', position: 'SS', team: 'Tampa Bay Rays', rank: '', yrank: 917 })

Players.insert({name: 'Jake McGee', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: 520 })

Players.insert({name: 'Brian Duensing', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Matt Harrison', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Colby Rasmus', position: 'OF', team: 'Houston Astros', rank: '', yrank: 931 })

Players.insert({name: 'Nolan Reimold', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Jed Lowrie', position: '2B,3B,SS', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: "Darren O'Day", position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: 266 })

Players.insert({name: 'Denard Span', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: 321 })

Players.insert({name: 'Burke Badenhop', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Hernan Iribarren', position: '2B,OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Sean Rodríguez', position: '1B,2B,3B,SS,OF', team: 'Atlanta Braves', rank: '', yrank: 535 })

Players.insert({name: 'Emmanuel Burriss', position: '2B', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Bobby Wilson', position: 'C', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Jonathan Herrera', position: '2B,3B', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Matt Joyce', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: 881 })

Players.insert({name: 'Paul Janish', position: '3B,SS', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Gregorio Petit', position: '2B,3B,SS,OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Chris Smith', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Mike Avilés', position: '2B,3B,SS,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Brad Ziegler', position: 'RP', team: 'Miami Marlins', rank: '', yrank: 189 })

Players.insert({name: 'Charlie Morton', position: 'SP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Sergio Romo', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: 256 })

Players.insert({name: 'Nick Hundley', position: 'C', team: 'Colorado Rockies', rank: '', yrank: 902 })

Players.insert({name: 'Travis Snider', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Clayton Richard', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: 809 })

Players.insert({name: 'Tommy Hunter', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Adam Rosales', position: '1B,2B,3B,SS', team: 'San Diego Padres', rank: '', yrank: 914 })

Players.insert({name: 'Cliff Pennington', position: '2B,3B,SS,OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Pablo Sandoval', position: '3B', team: 'Boston Red Sox', rank: '', yrank: 1328 })

Players.insert({name: 'Jonathon Niese', position: 'SP,RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Jesse Chávez', position: 'SP,RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Bobby Parnell', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Will Venable', position: 'OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Alcides Escobar', position: 'SS', team: 'Kansas City Royals', rank: '', yrank: 498 })

Players.insert({name: 'Phil Coke', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Wade LeBlanc', position: 'SP,RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Casey McGehee', position: '1B,3B', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Luis Valbuena', position: '1B,3B', team: 'Lon Angeles Angels', rank: '', yrank: 859 })

Players.insert({name: 'Matt Tuiasosopo', position: '3B,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'John Jaso', position: '1B,OF', team: 'Pittsburgh Pirates', rank: '', yrank: 834 })

Players.insert({name: 'Jason Motte', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'A.J. Ellis', position: 'C', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Conor Gillaspie', position: '3B', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Kevin Jepsen', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: 839 })

Players.insert({name: 'Francisco Cervelli', position: 'C', team: 'Pittsburgh Pirates', rank: '', yrank: 975 })

Players.insert({name: 'Junichi Tazawa', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Koji Uehara', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: 177 })

Players.insert({name: 'Eric Young Jr.', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'David Freese', position: '1B,3B', team: 'Pittsburgh Pirates', rank: '', yrank: 528 })

Players.insert({name: 'Neftali Feliz', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: 229 })

Players.insert({name: 'Derek Holland', position: 'SP', team: 'Chicago White Sox', rank: '', yrank: 886 })

Players.insert({name: 'Brett Anderson', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Trevor Cahill', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: 244 })

Players.insert({name: 'Austin Jackson', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Kyle Blanks', position: '1B', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Jarrod Parker', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Brett Wallace', position: '1B,3B', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Brian Matusz', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Gordon Beckham', position: '2B,3B,SS', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Miguel González', position: 'SP', team: 'Chicago White Sox', rank: '', yrank: 631 })

Players.insert({name: 'Shawn Kelley', position: 'RP', team: 'Washington Nationals', rank: '', yrank: 113 })

Players.insert({name: 'Andrew Bailey', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: 475 })

Players.insert({name: 'Ramiro Peña', position: '2B,3B,SS', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Luke Gregerson', position: 'RP', team: 'Houston Astros', rank: '', yrank: 146 })

Players.insert({name: 'Brett Cecil', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Fernando Rodríguez', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Shane Robinson', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Chris Coghlan', position: '2B,3B,OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Gerardo Parra', position: '1B,OF', team: 'Colorado Rockies', rank: '', yrank: 840 })

Players.insert({name: 'Kris Medlen', position: 'SP,RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Anthony Swarzak', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Dale Thayer', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'John Mayberry Jr.', position: 'OF', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'David Hernández', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: 422 })

Players.insert({name: 'Antonio Bastardo', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Chris Giménez', position: 'C', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Vin Mazzaro', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: "Sean O'Sullivan", position: 'SP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Julio Borbón', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'José Lobatón', position: 'C', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Marc Rzepczynski', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Ryan Webb', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Drew Stubbs', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Mat Latos', position: 'SP,RP', team: 'Washington Nationals', rank: '', yrank: 804 })

Players.insert({name: 'Carlos Torres', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: 218 })

Players.insert({name: 'Jhoulys Chacin', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: 868 })

Players.insert({name: 'Casey Fien', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Bud Norris', position: 'SP,RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Álex Ávila', position: 'C,1B', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Jeff Manship', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Brandon Allen', position: '1B,OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Pedro Strop', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: 186 })

Players.insert({name: 'Daniel Hudson', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: 632 })

Players.insert({name: 'Josh Thole', position: 'C', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Tyler Flowers', position: 'C', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Craig Gentry', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Mike Dunn', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: 286 })

Players.insert({name: 'John Axford', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Chris Johnson', position: '1B,3B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'César Ramos', position: 'SP,RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Adam Moore', position: 'C', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Ernesto Frieri', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Chris Heisey', position: 'OF', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Drew Storen', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: 512 })

Players.insert({name: 'Brandon Snyder', position: '3B', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Ryan Kalish', position: 'OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Andrew Cashner', position: 'SP', team: 'Texas Rangers', rank: '', yrank: 943 })

Players.insert({name: 'Zack Cozart', position: 'SS', team: 'Cincinnati Reds', rank: '', yrank: 380 })

Players.insert({name: 'Travis Wood', position: 'SP,RP', team: 'Chicago Cubs', rank: '', yrank: 288 })

Players.insert({name: 'Héctor Rondón', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: 166 })

Players.insert({name: 'Logan Morrison', position: '1B', team: 'Tampa Bay Rays', rank: '', yrank: 836 })

Players.insert({name: 'Jason Castro', position: 'C', team: 'Minnesota Twins', rank: '', yrank: 967 })

Players.insert({name: 'Jesús Montero', position: '1B', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Sean Doolittle', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: 236 })

Players.insert({name: 'Domonic Brown', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Pedro Álvarez', position: '1B,3B', team: 'Baltimore Orioles', rank: '', yrank: 634 })

Players.insert({name: 'Dustin Ackley', position: '1B,2B,OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Desmond Jennings', position: 'OF', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Martín Pérez', position: 'SP', team: 'Texas Rangers', rank: '', yrank: 1013 })

Players.insert({name: 'Justin Smoak', position: '1B', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Tanner Scheppers', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Kyle Drabek', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Yonder Alonso', position: '1B', team: 'Oakland Athletics', rank: '', yrank: 755 })

Players.insert({name: 'Christian Friedrich', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'David Lough', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Ike Davis', position: '1B', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Jenrry Mejía', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Rubén Tejada', position: '2B,3B,SS', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Ezequiel Carrera', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Cole Gillespie', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Matt Domínguez', position: '3B', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Mike Montgomery', position: 'SP,RP', team: 'Chicago Cubs', rank: '', yrank: 204 })

Players.insert({name: 'Jordan Walden', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Ben Revere', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: 993 })

Players.insert({name: 'Tim Beckham', position: '1B,2B,SS', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Matt Bush', position: 'RP', team: 'Texas Rangers', rank: '', yrank: 154 })

Players.insert({name: 'Sergio Santos', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'James Russell', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Drew Butera', position: 'C', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Logan Ondrusek', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Jon Jay', position: 'OF', team: 'Chicago Cubs', rank: '', yrank: 897 })

Players.insert({name: 'Blake Wood', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Danny Worth', position: '3B', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Trevor Plouffe', position: '1B,3B', team: 'Oakland Athletics', rank: '', yrank: 885 })

Players.insert({name: 'Fernando Salas', position: 'RP', team: 'New York Mets', rank: '', yrank: 281 })

Players.insert({name: 'Frank Herrmann', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Daniel Nava', position: '1B,OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Alexi Ogando', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Felix Doubront', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Erik Kratz', position: 'C', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Jhan Maríñez', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Vance Worley', position: 'SP,RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Fernando Abad', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Greg Holland', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Lucas Harrell', position: 'SP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Peter Bourjos', position: 'OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Cory Luebke', position: 'SP,RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Mike Minor', position: 'SP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Darwin Barney', position: '2B,3B,SS', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Matt Reynolds', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Michael Kirkman', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Jeremy Jeffress', position: 'RP', team: 'Texas Rangers', rank: '', yrank: 191 })

Players.insert({name: 'Danny Espinosa', position: '1B,2B,3B,SS', team: 'Los Angeles Angels', rank: '', yrank: 393 })

Players.insert({name: 'Chris Hatcher', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Dillon Gee', position: 'SP,RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Michael McKenry', position: 'C', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Alex Presley', position: 'OF', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Hank Conger', position: 'C', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Eric Sogard', position: '2B,SS', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Daniel Descalso', position: '1B,2B,SS,OF', team: 'Colorado Rockies', rank: '', yrank: 929 })

Players.insert({name: 'Steve Cishek', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: 100 })

Players.insert({name: 'Brandon Beachy', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Vinnie Pestano', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Andrew Romine', position: '1B,2B,3B,SS,OF', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Al Alburquerque', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Randall Delgado', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'José Iglesias', position: 'SS', team: 'Detroit Tigers', rank: '', yrank: 875 })

Players.insert({name: 'Devin Mesoraco', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: 1349 })

Players.insert({name: 'Lonnie Chisenhall', position: '3B,OF', team: 'Cleveland Indians', rank: '', yrank: 606 })

Players.insert({name: 'Jacob Turner', position: 'SP,RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Jordan Lyles', position: 'SP,RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'John Lamb', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Kyle Gibson', position: 'SP', team: 'Minnesota Twins', rank: '', yrank: 999 })

Players.insert({name: 'Manny Bañuelos', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Grant Green', position: '2B', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Casey Kelly', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Charlie Furbush', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Brett Lawrie', position: '2B,3B', team: 'Chicago White Sox', rank: '', yrank: 864 })

Players.insert({name: 'Derek Norris', position: 'C,1B', team: 'Washington Nationals', rank: '', yrank: 930 })

Players.insert({name: 'Jake Goebbert', position: '1B', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Tom Wilhelmsen', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Iván De Jesús Jr.', position: '1B,2B,3B,SS,OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Michael Martínez', position: '2B,OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Tim Collins', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Cedric Hunter', position: 'OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Héctor Noesí', position: 'SP,RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Josh Collmenter', position: 'SP,RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Jerry Sands', position: '1B,OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Louis Coleman', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Cory Gearrin', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Evan Scribner', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: 267 })

Players.insert({name: 'Alexi Amarista', position: '2B,SS,OF', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Brandon Guyer', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: 917 })

Players.insert({name: 'Javy Guerra', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Tony Cruz', position: 'C', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Rubby De La Rosa', position: 'SP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Juan Nicasio', position: 'SP,RP', team: 'Pittsburgh Pirates', rank: '', yrank: 237 })

Players.insert({name: 'Rex Brothers', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Brad Hand', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: 141 })

Players.insert({name: 'Jemile Weeks', position: '2B', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Tony Watson', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: 206 })

Players.insert({name: 'Bryan Shaw', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: 276 })

Players.insert({name: 'Collin Cowgill', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Héctor Sánchez', position: 'C', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: "Chase d'Arnaud", position: '2B,3B,SS,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Eric Fryer', position: 'C', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Zach McAllister', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Scott Diamond', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Robinson Chirinos', position: 'C', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Ryan Cook', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Arodys Vizcaíno', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: 357 })

Players.insert({name: 'Manny Piña', position: 'C', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Jimmy Paredes', position: '2B,OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Nathan Eovaldi', position: 'SP', team: 'New York Yankees', rank: '', yrank: 730 })

Players.insert({name: 'J.B. Shuck', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Johnny Giavotella', position: '2B', team: 'Los Angeles Angels', rank: '', yrank: 925 })

Players.insert({name: 'Henderson Álvarez', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Anthony Recker', position: 'C', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Darin Mastroianni', position: 'OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Eric Surkamp', position: 'SP,RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Tommy Milone', position: 'SP,RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Zach Phillips', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Brad Peacock', position: 'SP,RP', team: 'Houston Astros', rank: '', yrank: 435 })

Players.insert({name: 'Brad Brach', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: 88 })

Players.insert({name: 'Eric Thames', position: '1B', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Martín Maldonado', position: 'C', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Logan Schafer', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Efrén Navarro', position: '1B,OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Addison Reed', position: 'RP', team: 'New York Mets', rank: '', yrank: 107 })

Players.insert({name: 'Eduardo Escobar', position: '2B,3B,SS,OF', team: 'Minnesota Twins', rank: '', yrank: 995 })

Players.insert({name: 'Liam Hendriks', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Chris Parmelee', position: '1B,OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'George Kontos', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: 352 })

Players.insert({name: 'Steve Delabar', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Jordan Pacheco', position: 'C,CI', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Pedro Florimón', position: 'SS', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Danny Farquhar', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Jared Hughes', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Jeff Locke', position: 'SP,RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Tim Federowicz', position: 'C', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Xavier Cedeño', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Austin Romine', position: 'C,1B', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Zach Putnam', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Justin De Fratus', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Steve Clevenger', position: 'C', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Kelvin Herrera', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: 124 })

Players.insert({name: 'Norichika Aoki', position: 'OF', team: 'Houston Astros', rank: '', yrank: 769 })

Players.insert({name: "Travis d'Arnaud", position: 'C', team: 'New York Mets', rank: '', yrank: 1079 })

Players.insert({name: 'Jon Singleton', position: '1B', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Matt Adams', position: '1B', team: 'St. Louis Cardinals', rank: '', yrank: 802 })

Players.insert({name: 'Cory Spangenberg', position: '2B,3B', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Kolten Wong', position: '2B,OF', team: 'St. Louis Cardinals', rank: '', yrank: 987 })

Players.insert({name: 'Will Middlebrooks', position: '3B', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Nick Franklin', position: '1B,2B,SS,OF', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Bubba Starling', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Anthony Gose', position: 'OF', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Andrew Susac', position: 'C', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Freddy Galvis', position: 'SS', team: 'Philadelphia Phillies', rank: '', yrank: 232 })

Players.insert({name: 'Lucas Luetge', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Munenori Kawasaki', position: '2B', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Erasmo Ramírez', position: 'SP,RP', team: 'Tampa Bay Rays', rank: '', yrank: 472 })

Players.insert({name: 'Robbie Ross Jr.', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: 282 })

Players.insert({name: 'Nate Jones', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: 111 })

Players.insert({name: 'Marwin González', position: '1B,2B,3B,SS,OF', team: 'Houston Astros', rank: '', yrank: 461 })

Players.insert({name: 'Ryan Flaherty', position: '1B,2B,3B,SS,OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Dan Otero', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: 152 })

Players.insert({name: 'Kirk Nieuwenhuis', position: 'OF', team: 'Milwaukee Brewers', rank: '', yrank: 905 })

Players.insert({name: 'Joe Wieland', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'J.J. Hoover', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: 904 })

Players.insert({name: 'Patrick Corbin', position: 'SP,RP', team: 'Arizona Diamondbacks', rank: '', yrank: 976 })

Players.insert({name: 'Tyler Moore', position: '1B,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Dan Jennings', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Scott Van Slyke', position: '1B,OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Jake Diekman', position: 'RP', team: 'Texas Rangers', rank: '', yrank: 227 })

Players.insert({name: 'Charlie Culberson', position: '2B,3B,SS', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Blake Parker', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Yan Gomes', position: 'C', team: 'Cleveland Indians', rank: '', yrank: 1059 })

Players.insert({name: 'Blake Lalli', position: '1B', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Gorkys Hernández', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Nick Vincent', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: 235 })

Players.insert({name: 'Dónovan Solano', position: '2B,3B,SS', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Will Smith', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: 271 })

Players.insert({name: 'Jordy Mercer', position: 'SS', team: 'Pittsburgh Pirates', rank: '', yrank: 615 })

Players.insert({name: 'Andrelton Simmons', position: 'SS', team: 'Los Angeles Angels', rank: '', yrank: 784 })

Players.insert({name: 'Sam Freeman', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Steve Johnson', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Shawn Tolleson', position: 'RP', team: 'Texas Rangers', rank: '', yrank: 794 })

Players.insert({name: 'Bryan Holaday', position: 'C', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Clint Robinson', position: '1B,OF', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Joe Kelly', position: 'SP,RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Brad Boxberger', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: 542 })

Players.insert({name: 'Justin Grimm', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'A.J. Griffin', position: 'SP', team: 'Texas Rangers', rank: '', yrank: 745 })

Players.insert({name: 'Bryan Morris', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Adam Warren', position: 'SP,RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Luis Avilán', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: 258 })

Players.insert({name: 'Josh Edgin', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Aaron Loup', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Josh Rutledge', position: '2B,3B', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Miguel Socolovich', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: 274 })

Players.insert({name: 'Trevor Rosenthal', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: 356 })

Players.insert({name: 'Jim Henderson', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Mike Olt', position: '3B', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Adeiny Hechavarria', position: 'SS', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Matt McBride', position: 'C,OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Chad Jenkins', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Brandon Barnes', position: 'OF', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Rob Brantly', position: 'C', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Steve Geltz', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Will Harris', position: 'RP', team: 'Houston Astros', rank: '', yrank: 160 })

Players.insert({name: 'Jake Elmore', position: '1B,2B,3B,OF', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Tommy Layne', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Chris Rusin', position: 'SP,RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Justin Wilson', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: 313 })

Players.insert({name: 'Darin Ruf', position: '1B,OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Avisail García', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: 761 })

Players.insert({name: 'Jean Machi', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Brock Holt', position: '1B,2B,3B,SS,OF', team: 'Boston Red Sox', rank: '', yrank: 927 })

Players.insert({name: 'Chris Withrow', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Tony Cingrani', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: 464 })

Players.insert({name: 'Rob Scahill', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Paco Rodríguez', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'L.J. Hoes', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Chris Herrmann', position: 'C,OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Oliver Drake', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Rafael Ortega', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Bruce Rondon', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: 201 })

Players.insert({name: 'Hyun-Jin Ryu', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: 653 })

Players.insert({name: 'Kaleb Cowart', position: '2B,3B', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Aaron Hicks', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Jarred Cosart', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Zach Lee', position: 'SP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Alex Meyer', position: 'SP,RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Matt Barnes', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Kyle Zimmer', position: 'SP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Matt Davidson', position: '3B', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Jake Marisnick', position: 'OF', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Oswaldo Arcia', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Leury García', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Nick Tepesch', position: 'SP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Brandon Maurer', position: 'RP', team: 'San Diego Padres', rank: '', yrank: 338 })

Players.insert({name: 'T.J. McFarland', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Nick Noonan', position: 'SS', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Josh Fields', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Ryan Pressly', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Kyle Skipworth', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Shane Peterson', position: 'OF', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Paul Clemens', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Alex Wilson', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: 406 })

Players.insert({name: 'Bobby LaFromboise', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Justin Miller', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Michael Roth', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Yoervis Medina', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Brett Oberholtzer', position: 'SP,RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Juan Lagares', position: 'OF', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Robbie Grossman', position: 'OF', team: 'Minnesota Twins', rank: '', yrank: 795 })

Players.insert({name: 'Robbie Erlin', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Vidal Nuño', position: 'SP,RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Matt Magill', position: 'SP,RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Seth Maness', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Derek Dietrich', position: '1B,2B,3B,OF', team: 'Miami Marlins', rank: '', yrank: 856 })

Players.insert({name: 'Tony Sánchez', position: 'C', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Cory Rasmus', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Tyler Lyons', position: 'SP,RP', team: 'St. Louis Cardinals', rank: '', yrank: 270 })

Players.insert({name: 'Chris Colabello', position: '1B,OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Jesús Sucre', position: 'C', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Sean Nolin', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Michael Blazek', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Ian Krol', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Kevin Siegrist', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: 176 })

Players.insert({name: 'José Álvarez', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Curtis Partch', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Jaff Decker', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'J.C. Ramírez', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'TJ House', position: 'SP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'José Domínguez', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Chaz Roe', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'González Germen', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Joey Terdoslavich', position: '1B', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Josh Phegley', position: 'C', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Michael Tonkin', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Luis García', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Brandon Workman', position: 'SP,RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Henry Urrutia', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Junior Lake', position: 'OF', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'André Rienzo', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Todd Cunningham', position: 'OF', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Cody Asche', position: '3B,OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Tuffy Gosewisch', position: 'C', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Andrew Albers', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Joey Butler', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Wilmer Flores', position: '1B,2B,3B,SS', team: 'New York Mets', rank: '', yrank: 797 })

Players.insert({name: 'Kevin Chapman', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Buddy Boshers', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Andrew Lambo', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Kevin Pillar', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: 379 })

Players.insert({name: 'Phil Gosselin', position: '2B,3B', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Arquímedes Caminero', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Jake Petricka', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Max Stassi', position: 'C', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Ryan Goins', position: '2B,SS', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Cody Clark', position: 'C', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Rey Fuentes', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'David Holmberg', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Matt den Dekker', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Josmil Pinto', position: 'C', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Abraham Almonte', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Stolmy Pimentel', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'John Ryan Murphy', position: 'C', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Michael Choice', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Eric Beaulac', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Jim Adduci', position: 'OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Brian Flynn', position: 'SP,RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Daniel Webb', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Miguel Gonzalez', position: 'C', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Erik Johnson', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Heath Hembree', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: 290 })

Players.insert({name: 'Cameron Rupp', position: 'C', team: 'Philadelphia Phillies', rank: '', yrank: 752 })

Players.insert({name: 'Ehire Adrianza', position: '2B,SS', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Johnny Monell', position: 'C', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Zac Rosscup', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Audry Pérez', position: 'C', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Zach Walters', position: 'Util', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Chang-Yong Lim', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'David Hale', position: 'SP,RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Juan Centeno', position: 'C', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Christian Bethancourt', position: 'C,OF', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Tommy Medica', position: '1B,OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Onelki García', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Nick Buss', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Chris Dwyer', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Wilfredo Tovar', position: '2B,SS', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Enny Romero', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Alex Guerrero', position: '3B,OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Stryker Trahan', position: 'C', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'J.R. Graham', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Tommy La Stella', position: '2B,3B', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Anthony Ranaudo', position: 'SP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Garin Cecchini', position: '1B', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Jon Denney', position: 'C', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Arismendy Alcántara', position: '2B', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Carl Edwards Jr.', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: 216 })

Players.insert({name: 'Pierce Johnson', position: 'SP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Micah Johnson', position: '2B', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Phillip Ervin', position: 'OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Eddie Butler', position: 'SP,RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Kyle Parker', position: 'OF', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Rosell Herrera', position: 'SS', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Delino DeShields', position: 'OF', team: 'Texas Rangers', rank: '', yrank: 1042 })

Players.insert({name: 'Mark Appel', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Rio Ruiz', position: '3B', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Miguel Almonte', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'C.J. Cron', position: '1B', team: 'Los Angeles Angels', rank: '', yrank: 309 })

Players.insert({name: 'Andrew Heaney', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: 486 })

Players.insert({name: 'Colin Moran', position: '3B', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Justin Nicolino', position: 'SP,RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Jed Bradley', position: 'SP,RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Eddie Rosario', position: 'OF', team: 'Minnesota Twins', rank: '', yrank: 827 })

Players.insert({name: 'Kennys Vargas', position: '1B', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Kohl Stewart', position: 'SP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'César Puello', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Kevin Plawecki', position: 'C', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Rafael Montero', position: 'SP,RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Mason Williams', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Rafael De Paula', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Max Muncy', position: '1B,2B,3B,OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Miles Head', position: '3B', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Jesse Biddle', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Alen Hanson', position: '2B,SS', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Nick Kingham', position: 'SP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Jace Peterson', position: '2B,OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Matt Wisler', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: 884 })

Players.insert({name: 'Max Fried', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Rymer Liriano', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'D.J. Peterson', position: '3B', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Ji-Man Choi', position: '1B,OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Clayton Blackburn', position: 'SP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Edwin Escobar', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Kyle Crick', position: 'SP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Marco Gonzales', position: 'SP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Luke Jackson', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Brian Goodwin', position: 'OF', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Miguel Alfredo Gónzalez', position: 'SP,RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Suk-min Yoon', position: 'SP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Stefen Romero', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Seth Rosin', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Bo Schultz', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Adrian Nieto', position: 'C', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Wei-Chung Wang', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Tyler Collins', position: 'OF', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Aaron Barrett', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Nick Martínez', position: 'SP,RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Roenis Elías', position: 'SP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Tommy Kahnle', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Dean Anna', position: '2B,SS', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Mario Hollands', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Ryan Buchter', position: 'RP', team: 'San Diego Padres', rank: '', yrank: 168 })

Players.insert({name: 'Michael Almánzar', position: '3B', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Brian Morán', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Gus Schlosser', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Ian Thomas', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Donn Roach', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Asher Wojciechowski', position: 'SP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Tucker Barnhart', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: 907 })

Players.insert({name: 'Vince Belnome', position: '2B', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Dominic Leone', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Marcus Walden', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Aaron Brooks', position: 'SP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Michael Mariot', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Shane Greene', position: 'SP,RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Steven Souza Jr.', position: 'OF', team: 'Tampa Bay Rays', rank: '', yrank: 616 })

Players.insert({name: 'Blake Treinen', position: 'RP', team: 'Washington Nationals', rank: '', yrank: 228 })

Players.insert({name: 'Mike Bolsinger', position: 'SP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'James Jones', position: 'OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Eric Fornataro', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Jorge Rondón', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Justin Marks', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'C.J. Riefenhauser', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Luis Sardiñas', position: '2B,SS', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Bryan Mitchell', position: 'SP,RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Daniel Robertson', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Neil Ramírez', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Kevin Quackenbush', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Chris Martín', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Scott Carroll', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Casey Sadler', position: 'SP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Mike Morin', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Greg García', position: '2B,3B,SS', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Red Patterson', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Logan Darnell', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Danny Santana', position: 'SS,OF', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Frank De Los Santos', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Pedro Báez', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: 174 })

Players.insert({name: 'Arnold León', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Evan Marshall', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Caleb Joseph', position: 'C', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Eric Campbell', position: '1B,3B', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Chase Whitley', position: 'SP', team: 'Tampa Bay Rays', rank: '', yrank: 395 })

Players.insert({name: 'Jesús Aguilar', position: '1B', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Cole Figueroa', position: '3B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Kyle Crockett', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'José Ramírez', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Rob Rasmussen', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Francisco Peña', position: 'C', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Erisbel Arruebarrena', position: '2B,SS', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'David Buchanan', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Corey Knebel', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Odrisamer Despaigne', position: 'SP,RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Jamie Romak', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Alex Hassan', position: 'OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Shae Simmons', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Jarrett Grube', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'David Peralta', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: 1043 })

Players.insert({name: 'Wilking Rodríguez', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Jesse Hahn', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Cam Bedrosian', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: 185 })

Players.insert({name: 'Justin Bour', position: '1B', team: 'Miami Marlins', rank: '', yrank: 838 })

Players.insert({name: 'Tim Berry', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Miguel Rojas', position: '1B,2B,3B,SS', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Kirby Yates', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Christian Bergman', position: 'SP,RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Tyler Matzek', position: 'SP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Ben Rowen', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Blaine Hardy', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Nick Greenwood', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Yohan Pino', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Chad Smith', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Matt Stites', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Juan Jaime', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Jumbo Diaz', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: 432 })

Players.insert({name: 'Jake Buchanan', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Carlos Contreras', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Patrick McCoy', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Jackson Williams', position: 'C', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Yohan Flande', position: 'SP,RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Taylor Hill', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Brad Glenn', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Dallas Beeler', position: 'SP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Nick Ahmed', position: 'SS', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Christian Colón', position: '2B,3B,SS', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Kiké Hernández', position: '2B,SS,OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Zelous Wheeler', position: '3B,OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Tyler Holt', position: 'OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Brooks Brown', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Román Méndez', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Jake Smolinski', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Roberto Pérez', position: 'C', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Christian Vázquez', position: 'C', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Austin Adams', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Carlos Sánchez', position: '2B', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Curt Casali', position: 'C', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Drew VerHagen', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Chasen Shreve', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Taylor Thompson', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Ben Paulsen', position: '1B,OF', team: 'Minnesota Twins', rank: '', yrank: 1182 })

Players.insert({name: 'Chris Taylor', position: '2B,3B,SS', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Matt Purke', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Billy Burns', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: 1006 })

Players.insert({name: 'Cristhian Adames', position: '2B,3B,SS', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Matt Duffy', position: '2B,3B,SS', team: 'Tampa Bay Rays', rank: '', yrank: 955 })

Players.insert({name: 'Jarrett Parker', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Phil Klein', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Daniel Butler', position: 'C', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Héctor Neris', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: 131 })

Players.insert({name: 'Carlos Frías', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Andrew Chafin', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Trevor May', position: 'SP,RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Michael A. Taylor', position: 'OF', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Caleb Clay', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Buck Farmer', position: 'SP,RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Álex Cláudio', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Bradin Hagens', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Melvin Mercedes', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Jon Edwards', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Matt Szczur', position: 'OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Frank Garcés', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Daniel Corcino', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Kyle Lobstein', position: 'SP,RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Rusney Castillo', position: 'OF', team: 'Boston Red Sox', rank: '', yrank: 1255 })

Players.insert({name: 'Carlos Rivero', position: '3B', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Tomás Telís', position: 'C', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Kyle Ryan', position: 'SP,RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Chris Bassitt', position: 'SP,RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Ryan Rua', position: '1B,OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Andy Wilkins', position: '1B,3B', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Scott Snodgress', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Terrance Gore', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Lane Adams', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Erik Goeddel', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Bryan Price', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Hunter Strickland', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: 245 })

Players.insert({name: 'Carson Smith', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Chris Domínguez', position: 'OF', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Rafael Ynoa', position: '3B,MI,OF', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Leonel Campos', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: "Shawn O'Malley", position: '2B,SS,OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Yimi García', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Darío Álvarez', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'James McCann', position: 'C', team: 'Detroit Tigers', rank: '', yrank: 979 })

Players.insert({name: 'Yorman Rodríguez', position: 'OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Ryan Dennick', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Kendall Graveman', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: 877 })

Players.insert({name: 'Dalton Pompey', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'A.J. Achter', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Lisalverto Bonilla', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Spencer Patton', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Nick Tropeano', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Slade Heathcott', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Raffy López', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Eric Jokisch', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Jason Rogers', position: '1B', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Matt Clark', position: '1B,OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Chris Heston', position: 'SP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Brett Bochy', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Erik Cordier', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'John Holdzkom', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'R.J. Álvarez', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Xavier Scruggs', position: '1B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Sam Tuivailala', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Guilder Rodríguez', position: '2B,SS', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Jairo Díaz', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Tommy Pham', position: 'OF', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'José Pirela', position: '2B', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Daniel Coulombe', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Bryce Brentz', position: 'OF', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Christian Walker', position: '1B', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Aaron Northcraft', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Angel Nesbitt', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Eddie Gamboa', position: 'SP,RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Rob Refsnyder', position: '1B,2B,OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Braden Shipley', position: 'SP', team: 'Arizona Diamondbacks', rank: '', yrank: 890 })

Players.insert({name: 'Braxton Davidson', position: 'OF', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Henry Owens', position: 'SP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Billy McKinney', position: 'OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Kyle Freeland', position: 'SP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Derek Hill', position: 'OF', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Jorge Bonifacio', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Tyler Kolek', position: 'SP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Austin Wates', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Nick Burdi', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Nick Gordon', position: 'SS', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Jacob Lindgren', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Daniel Robertson', position: 'SS', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Alex Jackson', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Gareth Morgan', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Michael Gettys', position: 'OF', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Taylor Lindsey', position: '2B', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Casey Gillaspie', position: '1B', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Mikie Mahtook', position: 'OF', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Mark Canha', position: '1B,OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Oscar Hernandez', position: 'C', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Miguel Castro', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Tyler Ladendorf', position: '2B,OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'David Rollins', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Sean Gilmartin', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Dan Winkler', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Andrew McKirahan', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Tyler Olson', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Matt Reynolds', position: '2B,SS', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Danny Muno', position: 'Util', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Logan Verrett', position: 'SP,RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Keone Kela', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Taylor Featherston', position: '2B,3B,SS', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Paulo Orlando', position: 'OF', team: 'Kansas City Royals', rank: '', yrank: 484 })

Players.insert({name: 'Jason García', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Cody Martin', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Brandon Cunniff', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Allan Dykstra', position: '1B', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Ed Easley', position: 'C', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Chris Rearick', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Matt Tracy', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Scott Oberg', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'A.J. Schugel', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Josh Smith', position: 'SP,RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Sugar Ray Marimón', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Joel De La Cruz', position: 'SP,RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'José Ureña', position: 'SP,RP', team: 'Miami Marlins', rank: '', yrank: 922 })

Players.insert({name: 'Rafael Martín', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Branden Pinder', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Felipe Rivero', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: 293 })

Players.insert({name: 'Ryan Brett', position: '2B', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Adam Liberatore', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: 284 })

Players.insert({name: 'Orlando Calixte', position: 'SS', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Hansel Robles', position: 'RP', team: 'New York Mets', rank: '', yrank: 240 })

Players.insert({name: 'Mitch Harris', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Danny Dorn', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Matt Grace', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'John Cornely', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Rey Navarro', position: '2B', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Severino Gonzalez', position: 'SP,RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Cody Stanley', position: 'C', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Cory Mazzoni', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Tim Cooney', position: 'SP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Jack Leathersich', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Michael Lorenzen', position: 'SP,RP', team: 'Cincinnati Reds', rank: '', yrank: 257 })

Players.insert({name: 'Enrique Burgos', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Sammy Solís', position: 'RP', team: 'Washington Nationals', rank: '', yrank: 252 })

Players.insert({name: 'Dalier Hinojosa', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Scott Copeland', position: 'SP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Elvis Araujo', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Ken Roberts', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Carlos Pérez', position: 'C', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Williams Pérez', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Preston Tucker', position: 'OF', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Ryan Tepera', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Ángel Castro', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Travis Shaw', position: '1B,3B', team: 'Milwaukee Brewers', rank: '', yrank: 269 })

Players.insert({name: 'Andrew Bellatti', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Chris Beck', position: 'SP,RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Mike Wright', position: 'SP,RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Wilfredo Boscán', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Tyler Wilson', position: 'SP,RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Kendry Flores', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Wilmer Difo', position: '2B', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Darrell Ceciliani', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Austin Barnes', position: 'C', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Dixon Machado', position: 'SS', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'David Goforth', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Héctor Olivera', position: '3B,OF', team: 'San Diego Padres', rank: '', yrank: 1266 })

Players.insert({name: 'Hanser Alberto', position: '2B,3B,SS', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Chi Chi González', position: 'SP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Tyler Wagner', position: 'SP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Michael Feliz', position: 'RP', team: 'Houston Astros', rank: '', yrank: 163 })

Players.insert({name: 'Ramón Flores', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Tyler Cravy', position: 'SP,RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Mayckol Guaipe', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Édgar Ibarra', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Daniel Fields', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Josh Ravin', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Jon Moscot', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Pat Venditte', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Taylor Jungmann', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Giovanny Urshela', position: '3B', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Kyle Kubitza', position: '3B', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Michael Broadway', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Trevor Gott', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Akeel Morris', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'José De Paula', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Daniel Castro', position: '2B,3B,SS', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Mychal Givens', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: 157 })

Players.insert({name: 'Cody Anderson', position: 'SP,RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Adam Morgan', position: 'SP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Danny Burawa', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Nick Rumbelow', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Diego Moreno', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Deven Marrero', position: '3B', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Jonathan Aro', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Deolis Guerra', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Jake Brigham', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Toru Murata', position: 'SP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Ryan Kelly', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Marcus Hatley', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Taylor Dugas', position: 'OF', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Jeff Ferrell', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Ryan Lollis', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Dusty Coleman', position: '3B', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Josh Osich', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Noé Ramírez', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Jefry Marte', position: '1B,3B,OF', team: 'Los Angeles Angels', rank: '', yrank: 848 })

Players.insert({name: 'Cheslor Cuthbert', position: '3B', team: 'Kansas City Royals', rank: '', yrank: 675 })

Players.insert({name: "Ryan O'Rourke", position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Tyler Saladino', position: '2B,3B,SS', team: 'Chicago White Sox', rank: '', yrank: 866 })

Players.insert({name: 'Abel De los Santos', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Zack Godley', position: 'SP,RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Nick Goody', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Caleb Cotham', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Keyvius Sampson', position: 'SP,RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Matt Marksberry', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'José Valdez', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Kyle Waldrop', position: 'OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Chris Reed', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Tyler Duffey', position: 'SP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Richie Shaffer', position: '1B', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Brian Ellington', position: 'RP', team: 'Miami Marlins', rank: '', yrank: 280 })

Players.insert({name: 'Kelby Tomlinson', position: '2B', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Ryan Strausborger', position: 'OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Kyle Barraclough', position: 'RP', team: 'Miami Marlins', rank: '', yrank: 110 })

Players.insert({name: 'Keith Hessler', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Shawn Armstrong', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Colin Rea', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Dustin Garneau', position: 'C', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Guido Knudson', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Darnell Sweeney', position: '2B,OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Scott McGough', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Ryan LaMarre', position: 'OF', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Dariel Álvarez', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'John Hicks', position: 'C', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Nefi Ogando', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Jason Gurka', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Andrew Faulkner', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Silvino Bracho', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Rico Noel', position: 'Util', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'James Pazos', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Colton Murray', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Luke Maile', position: 'C', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Ramón Cabrera', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Scott Alexander', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Tony Zych', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Ryan Dull', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: 140 })

Players.insert({name: 'Carson Blair', position: 'C', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Elías Díaz', position: 'C', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Pedro Severino', position: 'C', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Jett Bandy', position: 'C', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Cody Hall', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Raudel Lazo', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Rocky Gale', position: 'C', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Giovanni Soto', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Ariel Peña', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Nevin Ashley', position: 'C', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Ryan Weber', position: 'SP,RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Sócrates Brito', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Steven Baron', position: 'C', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Ronald Torreyes', position: '2B,3B,SS', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Cody Decker', position: '1B', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Matt Duffy', position: 'CI', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Trevor Brown', position: 'C', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Mac Williamson', position: 'OF', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Travis Tartamella', position: 'C', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Jorge López', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Michael Reed', position: 'OF', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Adrian Houser', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Yhónathan Barrios', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Yadiel Rivera', position: '2B,3B', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Tony Barnette', position: 'RP', team: 'Texas Rangers', rank: '', yrank: 213 })

Players.insert({name: 'Buddy Baumann', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'James Ramsey', position: 'OF', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Steven Okert', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Yoan López', position: 'SP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Gabriel Guerrero', position: 'OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Jake Barrett', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: 353 })

Players.insert({name: 'Jimmie Sherfy', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Tyrell Jenkins', position: 'SP,RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Chris Ellis', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Mallex Smith', position: 'OF', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Jason Hursh', position: 'SP', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Mike Yastrzemski', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Tyler Danish', position: 'SP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Erik González', position: 'SS', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'JaCoby Jones', position: 'SS', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Tony Kemp', position: '2B,OF', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Roberto Baldoquín', position: 'SS', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Greg Mahle', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Chris Anderson', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Avery Romero', position: '2B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Nick Wittgren', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'J.T. Chargois', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Taylor Rogers', position: 'SP,RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Jake Reed', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Chad Pinder', position: '2B', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Willy García', position: 'OF', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Trevor Williams', position: 'SP,RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Tayron Guerrero', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Boog Powell', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Ryan Yarbrough', position: 'SP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: "Justin O'Conner", position: 'C', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Patrick Kivlehan', position: '3B,OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Dwight Smith', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Johan Camargo', position: '2B,SS', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Chance Sisco', position: 'C', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'David Hess', position: 'SP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Jon Keller', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Sam Travis', position: '1B', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Trey Ball', position: 'SP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Wendell Rijo', position: '2B', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Ty Buttrey', position: 'SP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Mark Zagunis', position: 'OF', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Duane Underwood', position: 'SP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Jen-Ho Tseng', position: 'SP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Trey Michalczewski', position: '3B', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Rob Kaminsky', position: 'SP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Keury Mella', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Taylor Sparks', position: '3B', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Alex Blandino', position: 'SS', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Antonio Senzatela', position: 'SP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Jordan Patterson', position: 'OF', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Sam Moll', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Spencer Turnbull', position: 'SP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Kevin Ziomek', position: 'SP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Austin Kubitza', position: 'SP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'J.D. Davis', position: '3B', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Victor Alcántara', position: 'SP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Chase De Jong', position: 'SP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Jarlin García', position: 'SP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Austin Dean', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Brian Anderson', position: '3B', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Tyrone Taylor', position: 'OF', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Clint Coulter', position: 'OF', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Taylor Williams', position: 'SP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Eric Jagielo', position: '3B', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Ian Clarkin', position: 'SP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Tyler Wade', position: 'SS', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Rookie Davis', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Dillon Overton', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Harold Ramírez', position: 'OF', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Stephen Tarpley', position: 'SP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'José Rondón', position: 'SS', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Ryan Butler', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Samuel Coonrod', position: 'SP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Charlie Tilson', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Chih-Wei Hu', position: 'SP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Andrew Velazquez', position: 'SS', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Ryan Cordell', position: 'OF', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Max Pentecost', position: 'C', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Mitch Nay', position: '3B', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Drew Ward', position: '3B', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Joe Gatto', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Javier Guerra', position: 'SS', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Tyler Goeddel', position: 'OF', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Matt Bowman', position: 'RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Jabari Blash', position: 'OF', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Joey Rickard', position: 'OF', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Tyler White', position: '1B,3B', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Zack Jones', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Dae-Ho Lee', position: '1B', team: 'Seattle Mariners', rank: '', yrank: 910 })

Players.insert({name: 'Tony Wolters', position: 'C,MI', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Daniel Stumpf', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Colin Walsh', position: '2B,3B', team: 'Atlanta Braves', rank: '', yrank: '' })

Players.insert({name: 'Jeremy Hazelbaker', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Luis Cessa', position: 'SP,RP', team: 'New York Yankees', rank: '', yrank: 556 })

Players.insert({name: 'Johnny Barbato', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Ross Stripling', position: 'SP,RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'John Gant', position: 'SP,RP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Tim Melville', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Joe Biagini', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: 291 })

Players.insert({name: 'Luis Perdomo', position: 'SP,RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Chris Devenski', position: 'SP,RP', team: 'Houston Astros', rank: '', yrank: 103 })

Players.insert({name: 'Matt Buschmann', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Brett Nicholas', position: 'C', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Michael Ynoa', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Hunter Cervenka', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Derek Law', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: 193 })

Players.insert({name: 'Marco Hernández', position: '2B,3B,SS', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Drew Hayes', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'William Cuevas', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Chad Girodo', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Carlos Estévez', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: 404 })

Players.insert({name: 'César Vargas', position: 'SP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Cody Ege', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Pat Light', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Kevan Smith', position: 'C', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Layne Somsen', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Andrew Triggs', position: 'SP,RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Zac Curtis', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Tim Adleman', position: 'SP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Ben Gamel', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Andy Burns', position: 'SS', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Pat Dean', position: 'SP,RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'J.B. Wendelken', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Zach Neal', position: 'SP,RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Warwick Saupold', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Dean Kiekhefer', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Conor Mullee', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Chad Green', position: 'SP,RP', team: 'New York Yankees', rank: '', yrank: 446 })

Players.insert({name: 'Taylor Motter', position: '3B,SS,OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Dustin Antolin', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Mike Clevinger', position: 'SP,RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Alec Mills', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Whit Merrifield', position: '2B,OF', team: 'Kansas City Royals', rank: '', yrank: 894 })

Players.insert({name: 'Steve Selsky', position: 'OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Dayan Diaz', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'A.J. Morris', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Daniel Wright', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Tyler Sturdevant', position: 'RP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Ty Kelly', position: '3B,OF', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Ryan Merritt', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Jared Hoying', position: 'OF', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Ashur Tolliver', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Ryan Garton', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Richard Bleier', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Brett Eibner', position: 'OF', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Chris Stratton', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Chris Jones', position: 'SP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Jacob Barnes', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Jason Coats', position: 'OF', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Adrian Sampson', position: 'SP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Jacob Stallings', position: 'C', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Dustin Molleken', position: 'RP', team: 'Detroit Tigers', rank: '', yrank: '' })

Players.insert({name: 'Gerardo Concepción', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Edubray Ramos', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'Adam Frazier', position: '2B,OF', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Mike Miller', position: '2B', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Mauricio Cabrera', position: 'RP', team: 'Atlanta Braves', rank: '', yrank: 260 })

Players.insert({name: 'Shawn Morimando', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Jeimer Candelario', position: '3B', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Yefri Pérez', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Patrick Schuster', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Jayson Aquino', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Steven Brault', position: 'SP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Brooks Pounders', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'José Leclerc', position: 'RP', team: 'Texas Rangers', rank: '', yrank: '' })

Players.insert({name: 'Omar Narváez', position: 'C', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Dylan Floro', position: 'RP', team: 'Tampa Bay Rays', rank: '', yrank: '' })

Players.insert({name: 'Alberto Rosario', position: 'C', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Joe Colon', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Andrew Toles', position: 'OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Donnie Hart', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Mike Freeman', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Juan Graterol', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Koda Glover', position: 'RP', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Grant Dayton', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: 219 })

Players.insert({name: 'Bruce Maxwell', position: 'C', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Mike Mayers', position: 'SP', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Josh Smoker', position: 'RP', team: 'New York Mets', rank: '', yrank: '' })

Players.insert({name: 'Guillermo Heredia', position: 'OF', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Steve Hathaway', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Max Moroff', position: 'SS', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Rob Whalen', position: 'SP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'James Hoyt', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Tony Renda', position: '2B,OF', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Danny Barnes', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Madison Younginer', position: 'RP', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Rob Segedin', position: '3B,OF', team: 'Los Angeles Dodgers', rank: '', yrank: '' })

Players.insert({name: 'Austin Brice', position: 'RP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Jandel Gustave', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Ben Heller', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Teoscar Hernández', position: 'OF', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Matt Carasiti', position: 'RP', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Damien Magnifico', position: 'RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Brent Suter', position: 'SP,RP', team: 'Milwaukee Brewers', rank: '', yrank: '' })

Players.insert({name: 'Rob Zastryzny', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Félix Peña', position: 'RP', team: 'Chicago Cubs', rank: '', yrank: '' })

Players.insert({name: 'Parker Bridwell', position: 'RP', team: 'Baltimore Orioles', rank: '', yrank: '' })

Players.insert({name: 'Vicente Campos', position: 'RP', team: 'Los Angeles Angels', rank: '', yrank: '' })

Players.insert({name: 'Shawn Zarraga', position: 'C', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Alex Wimmers', position: 'RP', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'Stephen Cardullo', position: '1B', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Dan Altavilla', position: 'RP', team: 'Seattle Mariners', rank: '', yrank: '' })

Players.insert({name: 'Kelvin Marte', position: 'RP', team: 'Pittsburgh Pirates', rank: '', yrank: '' })

Players.insert({name: 'Joey Wendle', position: '2B', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'Perci Garner', position: 'RP', team: 'Cleveland Indians', rank: '', yrank: '' })

Players.insert({name: 'Jake Esch', position: 'SP', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Ty Blach', position: 'RP', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Juan Minaya', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Destin Hood', position: 'OF', team: 'Miami Marlins', rank: '', yrank: '' })

Players.insert({name: 'Matt Dermody', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })

Players.insert({name: 'Robby Scott', position: 'RP', team: 'Boston Red Sox', rank: '', yrank: '' })

Players.insert({name: 'Brady Rodgers', position: 'RP', team: 'Houston Astros', rank: '', yrank: '' })

Players.insert({name: 'Jonathan Holder', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Wandy Peralta', position: 'RP', team: 'Cincinnati Reds', rank: '', yrank: '' })

Players.insert({name: 'Joe Mantiply', position: 'RP', team: 'New York Yankees', rank: '', yrank: '' })

Players.insert({name: 'Kyle Jensen', position: 'OF', team: 'Arizona Diamondbacks', rank: '', yrank: '' })

Players.insert({name: 'Carson Kelly', position: 'C', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Raúl Alcántara', position: 'SP', team: 'Oakland Athletics', rank: '', yrank: '' })

Players.insert({name: 'James Beresford', position: '2B,3B', team: 'Minnesota Twins', rank: '', yrank: '' })

Players.insert({name: 'José Martínez', position: '1B,OF', team: 'St. Louis Cardinals', rank: '', yrank: '' })

Players.insert({name: 'Blake Smith', position: 'RP', team: 'Chicago White Sox', rank: '', yrank: '' })

Players.insert({name: 'Kevin McCarthy', position: 'RP', team: 'Kansas City Royals', rank: '', yrank: '' })

Players.insert({name: 'Pat Valaika', position: 'SS', team: 'Colorado Rockies', rank: '', yrank: '' })

Players.insert({name: 'Matt Koch', position: 'RP', team: 'Arizona Diamondbacks', rank: '', yrank: 337 })

Players.insert({name: 'Jake Smith', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Joely Rodríguez', position: 'RP', team: 'Philadelphia Phillies', rank: '', yrank: '' })

Players.insert({name: 'José Torres', position: 'RP', team: 'San Diego Padres', rank: '', yrank: '' })

Players.insert({name: 'Juniel Querecuto', position: '3B,SS', team: 'San Francisco Giants', rank: '', yrank: '' })

Players.insert({name: 'Spencer Kieboom', position: 'C', team: 'Washington Nationals', rank: '', yrank: '' })

Players.insert({name: 'Chris Smith', position: 'RP', team: 'Toronto Blue Jays', rank: '', yrank: '' })
  
    }


if (draftOrder.find().count() < 60)
  draftOrder.insert({turn: 1, name: "Daniel A."})
  draftOrder.insert({turn: 2, name: "Alex"})
  draftOrder.insert({turn: 3, name: "Zach"})
  draftOrder.insert({turn: 4, name: "Eli"})
  draftOrder.insert({turn: 5, name: "Dan G."})
  draftOrder.insert({turn: 6, name: "Yamil"})
  draftOrder.insert({turn: 7, name: "Eli"})
  draftOrder.insert({turn: 8, name: "Alex"})
  draftOrder.insert({turn: 9, name: "Bill"})
  draftOrder.insert({turn: 10, name: "Kevin"})
  draftOrder.insert({turn: 11, name: "Theresa"})
  draftOrder.insert({turn: 12, name: "Alex"})
  draftOrder.insert({turn: 13, name: "Daniel A."})
  draftOrder.insert({turn: 14, name: "Pablo"})
  draftOrder.insert({turn: 15, name: "Theresa"})
  draftOrder.insert({turn: 16, name: "Alex"})
  draftOrder.insert({turn: 17, name: "Dan G."})
  draftOrder.insert({turn: 18, name: "Kevin"})
  draftOrder.insert({turn: 19, name: "Daniel A."})
  draftOrder.insert({turn: 20, name: "Daniel A."})
  draftOrder.insert({turn: 21, name: "Theresa"})
  draftOrder.insert({turn: 22, name: "Kevin"})
  draftOrder.insert({turn: 23, name: "John"})
  draftOrder.insert({turn: 24, name: "Eli"})
  draftOrder.insert({turn: 25, name: "Daniel A."})
  draftOrder.insert({turn: 26, name: "Pablo"})
  draftOrder.insert({turn: 27, name: "Theresa"})
  draftOrder.insert({turn: 28, name: "Bill"})
  draftOrder.insert({turn: 29, name: "Dan G."})
  draftOrder.insert({turn: 30, name: "John"})
  draftOrder.insert({turn: 31, name: "Steven"})
  draftOrder.insert({turn: 32, name: "Bill"})
  draftOrder.insert({turn: 33, name: "Bill"})
  draftOrder.insert({turn: 34, name: "Kevin"})
  draftOrder.insert({turn: 35, name: "John"})
  draftOrder.insert({turn: 36, name: "Eli"})
  draftOrder.insert({turn: 37, name: "Daniel A."})
  draftOrder.insert({turn: 38, name: "Pablo"})
  draftOrder.insert({turn: 39, name: "Theresa"})
  draftOrder.insert({turn: 40, name: "Theresa"})
  draftOrder.insert({turn: 41, name: "Dan G."})
  draftOrder.insert({turn: 42, name: "Yamil"})
  draftOrder.insert({turn: 43, name: "Zach"})
  draftOrder.insert({turn: 44, name: "Alex"})
  draftOrder.insert({turn: 45, name: "Zach"})
  draftOrder.insert({turn: 46, name: "Kevin"})
  draftOrder.insert({turn: 47, name: "Alex"})
  draftOrder.insert({turn: 48, name: "Eli"})
  draftOrder.insert({turn: 49, name: "Bill"})
  draftOrder.insert({turn: 50, name: "Pablo"})
  draftOrder.insert({turn: 51, name: "Theresa"})
  draftOrder.insert({turn: 52, name: "Zach"})
  draftOrder.insert({turn: 53, name: "Dan G."})
  draftOrder.insert({turn: 54, name: "Alex"})
  draftOrder.insert({turn: 55, name: "Steven"})
  draftOrder.insert({turn: 56, name: "Yamil"})
  draftOrder.insert({turn: 57, name: "Zach"})
  draftOrder.insert({turn: 58, name: "Kevin"})
  draftOrder.insert({turn: 59, name: "John"})
  draftOrder.insert({turn: 60, name: "Steven"})
  draftOrder.insert({turn: 61, name: "Pablo"})
  draftOrder.insert({turn: 62, name: "Steven"})
  draftOrder.insert({turn: 63, name: "Yamil"})
  draftOrder.insert({turn: 64, name: "John"})
  draftOrder.insert({turn: 65, name: "Steven"})
  draftOrder.insert({turn: 66, name: "Yamil"})
});

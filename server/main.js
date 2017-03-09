import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('getMessages', function(){
    return Messages.find({}, {sort : { date : -1}, limit : 5});

    if(this.userId){
        // return Messages here
    }else{
        throw new Error('Must be logged in to fetch messages');
    }
});

Meteor.methods({
    insertMessage: function(msg){
        if(Meteor.user()){
            return Messages.insert(msg);
        }else{
           throw new Error('Cannot publis message while not logged in');
        }
    }
});
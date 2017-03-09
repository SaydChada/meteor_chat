

import { Template } from 'meteor/templating';

Template.chatBox.events({
    'click #logout' : function(ev){
        console.log('okok deco');
        Meteor.logout(function(err){
            if(err){
                console.log(err);
            }else {
                console.log('vous êtes déco');
            }
        })
    },
});
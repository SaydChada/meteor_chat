Meteor.subscribe('getMessages');

Template.showMessages.helpers({
    getMessages : function(){

        return Messages.find();
    },
    formatDate: function(ts){
        var date = new Date(ts);
        console.log(date);
        return date.toLocaleTimeString()
    }
});
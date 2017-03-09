Template.addMessage.events({
    'submit form' : function(e){
        e.preventDefault();
        var msg = {};
        msg.username = $('#username').val();

        msg.content = $('#content').val();
        $('#content').val('');
        msg.date = + new Date();
        Meteor.call('insertMessage', msg, function(err, result){
            if(err){
                console.log('error :', err);
            }else{
                console.log('result :', result);
            }
            var $messages = $('.messages');
            $messages.animate({
                scrollTop: $(".message.left:last").offset().top
            }, 1000);
            $messages.clearQueue();

        });
    }
});

Template.addMessage.helpers({
    isDisabled: function(user, cssClass){
        console.log('user', user);
        return user ? cssClass : '';
    },
    isLogedIn: function(user){
        return !user;
    }
});
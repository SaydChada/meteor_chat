import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

Template.loginBox.events({
    'submit #register-form': function(ev){
        ev.preventDefault();
        var $form = $(ev.target);

        Accounts.createUser({
            username: $('input[name="username"]', $form).val(),
            email : $('input[name="email"]', $form).val(),
            password: $('input[name="password"]', $form).val(),
            profile : {
                created: + new Date()
            }
        }, function(err){
            if(err){
                console.log(err);
            }
        });
    },
    'submit #login-form': function(ev){
        ev.preventDefault();
        var $form = $(ev.target);
        var data = {
            email : $('input[name="email"]', $form).val(),
            password: $('input[name="password"]', $form).val()
        };

        Meteor.loginWithPassword(data.email, data.password, function(err){

            if(err){
                console.log(err);
            }else{
                console.log('success');
            }
        })

    }

});
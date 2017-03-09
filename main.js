// Code exécuté côté client et serveur

import { Mongo } from 'meteor/mongo';

Messages = new Mongo.Collection('messages');

Router.configure({
    noRoutesTemplate : true
});
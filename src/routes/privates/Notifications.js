const {Router}=require('express');
const {getAllNotifications}=require('../../handlers/NotificationsHandlers')

const router=Router();

router.get('/',getAllNotifications)
module.exports =router
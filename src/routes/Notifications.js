const {Router}=require('express');
const {getNotificationsHandler}=require('../handlers/NotificationHandlers')

const router=Router();

router.get('/',getNotificationsHandler)
module.exports =router
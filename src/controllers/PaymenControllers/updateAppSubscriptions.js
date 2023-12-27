const { asignCorrectMembership } = require(".");
const { User } = require("../../DB");
const { getSubscriptions } = require("../../payments");
module.exports = async (user) => {
  try {
    if (!user) throw new Error("User not found");
    if (!user.recurrenteId) {
      //in this case we need to create a subscription ,first time
      const subscriptions = await getSubscriptions(); //array of subscriptions from recurrente
      const correctSubscription = subscriptions.find(
        (i) => i.subscriber.email === user.email //if user exist is because it is recurrente subcriptor
      );
      if (!correctSubscription) return;
      await User.update(
        ///update with recurrente info, because it is the first time and the next time will not necessary search in recurrente array
        //update recurrenteId
        {
          recurrenteId: correctSubscription.id,
          MembershipStatus: correctSubscription.status,
        },
        { where: { id: user.id } }
      );
      return correctSubscription;
    }

    const subscription = await getSubscriptions(user.recurrenteId); //if user has a subscription is more easy to get recurrente info
    if (!subscription) return;
    await User.update(
      //so we need  update status to allow content, this info come from recurrente
      { MembershipStatus: subscription.status }, //***update membership status to allow content */
      { where: { id: user.id } }
    );
    await asignCorrectMembership(user, subscription); // to do , we need to test this
    return subscription;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'updateAppSubscriptions': ${error.message}`
    );
  }
};

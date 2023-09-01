const { User } = require('../../DB')
const { hashpassword, sendEmailLogin } = require('../../utils')
module.exports = async ({ id,firstName, lastName, email, password }) => {
    const is_Admin = ['joakig6@gmail.com'].includes(email)
    const hashedPassword = await hashpassword(password)
    const create = await User.create({
        id,
        firstName,
        lastName,
        password: hashedPassword,
        email,
        is_Admin
    })
    // await sendEmailLogin(firstName, email);
    return create
}
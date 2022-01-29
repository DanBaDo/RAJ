import ('dotenv').config()
process.env

export const registerPost = ()=>{
    fetch(
        `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.PORT}${process.env.BASENAME}`,
        )
}
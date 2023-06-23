const validateAdmin = () => {
    try {
        const {user}= req;
        // if (user.role != "admin") throw new Error("No tiene permisos") 
        // implementar roles
        next()
    } catch (err) {
        next(err)
    }
}

export default validateAdmin
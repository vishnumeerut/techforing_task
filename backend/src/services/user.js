


class UserService {
    constructor(respository){
        this.respository = respository;
    }

    async createUser(userdetails) {
        try{
            const {username, email, password} = userdetails;
            const response = await this.respository.createUser(username, email, password)
            return response;
        }
        catch(error) {
            console.log("error while creating user", error)
            throw error;
        }
    }
}

module.exports = UserService;
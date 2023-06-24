import Api from "@/services/Api"

export default {
    register(credentials){
        return Api().post('register', credentials)
    }, 
    login(credentials){
        return Api().post('login', credentials)
    }
}

/**
 * sample
 * 
 * AuthenticationService.register({
 *      email: "test@hello.com",
 *      password: "12345"
 * })
 */
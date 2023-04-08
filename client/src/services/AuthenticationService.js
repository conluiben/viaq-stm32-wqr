import Api from "@/services/Api"

export default {
    register(credentials){
        return Api().post('register', credentials)
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
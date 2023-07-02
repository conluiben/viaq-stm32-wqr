import Api from "@/services/Api"

export default {
    getAllWarnings(){
        return Api().post('dashboard-warning')
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
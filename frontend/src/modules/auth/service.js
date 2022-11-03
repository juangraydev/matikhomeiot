import HTTP from '../../shared/util/http/Http'


export function userLogin(data){
    return function (dispatch){
        return new Promise((resolve, reject) => {
            console.log("ddd")
            HTTP.post('/api/v1/auth/signin', data)
                .then(function (res) {
                    console.log("assaaa")
                    // // handle success
                    // // alert("succes boang");
                    // dispatch(successUserInfo(res.data))
                    localStorage.setItem('TOKEN', res.data.token);  
                    
                    var user_info = {name: res.data.displayName, username: res.data.username};
                    console.log("user_info: ", user_info);
                    localStorage.setItem('USER_INFO', JSON.stringify(user_info));                    
                    
                    resolve();

                })
                .catch(function (error) {
                    // handle error
                    // alert("ka bogo");
                    // dispatch(failUserInfo(error))
                })
                .then(function () {
                    // always executed
                });
        });
            
    }
}
export function userRegister(data){
    return function (dispatch){
        return new Promise((resolve, reject) => {
            HTTP.post('/api/v1/auth/signup', data)
                .then(function (res) {


                })
                .catch(function (error) {

                })
                .then(function () {
                    // always executed
                });
        });
            
    }
}

import Axios from 'axios';

export default function UserService() {

    const USER_API_END_POINT = 'http://localhost:8080/user'

    function getUsers() {
        Axios.get(USER_API_END_POINT + '/getAllUsers')
    }
}
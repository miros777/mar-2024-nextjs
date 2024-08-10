import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";

const baseUrl = 'https://jsonplaceholder.typicode.com';

const serviceUsers = {
    getAllUsers: async ():Promise<IUser[]> => {
        let response = await fetch(baseUrl + '/users')
            .then((value) => value.json());
        return response;
    },
    getOneUser: async (id:number):Promise<IUser> => {
        let response = await fetch(baseUrl + '/users/' + id)
        .then(value => value.json());
        return response;
    }
};

const servicePosts = {
    getAllUsers: () => {

    },
    postsByUserID: async (id:number):Promise<IPost[]> => {
        let response = await fetch(baseUrl + '/posts?userId=' + id)
            .then(value => value.json());
        return response;
    }
};

const serviceComments = {
    getAllUsers: () => {

    },
    getOneUser: () => {

    }
}

export {
    serviceUsers,
    servicePosts,
    serviceComments
}
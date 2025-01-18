import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

interface createAccountAttributes {
	email: string;
	password: string;
	name: string;
}

interface createSession {
	email: string;
	password: string;
}

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }: createAccountAttributes) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async login({ email, password }: createSession) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
        } catch (error) {
            console.log(error);
        }
    }
    
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
        }
        return null
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
            
        }
    }
}

const authService = new AuthService()
export default authService

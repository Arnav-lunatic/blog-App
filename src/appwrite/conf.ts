import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

interface post {
	title: string;
	slug: string;
	content: string;
	featuredImg: string;
	status: string;
	userId: string;
}

export class DbService {
	client: Client = new Client();
	databases!: Databases;
	bucket!: Storage;

	constructer() {
		this.client.setProject(conf.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	async createPost({ title, slug, content, featuredImg, status, userId }: post) {
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{ title, content, featuredImg, status, userId }
			);
		} catch (error) {
			console.log(error);
		}
	}

	async updatePost(slug:string , { title, content, featuredImg, status }: post) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug,
				{ title, content, featuredImg, status }
			)
		} catch (error) {
			
		}
	}

	async deletePost(slug:string) {
		try {
			return await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			)
			return true
		} catch (error) {
			console.log(error);
			return false
		}
	}

	async getPost(slug:string) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				slug
			)
		} catch (error) {
			console.log(error);
		}
	}

	async listPost(query=[Query.equal('status', 'active')]) {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteCollectionId,
				query,
			)
		} catch (error) {
			console.log(error);
		}
	}

	async uploadFile(file:File) {
		try {
			return await this.bucket.createFile(
				conf.appwriteBuckerId,
				ID.unique(),
				file
				
			)
		} catch (error) {
			console.log(error);
		}
	}

	async deleteFile(fileId: string) {
		try {
			await this.bucket.deleteFile(
				conf.appwriteBuckerId,
				fileId
			)
			return true
		} catch (error) {
			console.log(error);
			return false
		}
	}

	getFilePreview(fileId: string) {
		return this.bucket.getFilePreview(
			conf.appwriteBuckerId,
			fileId
		)
	}
}

const dbService = new DbService();
export default dbService;

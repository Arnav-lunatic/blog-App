interface confType {
    appwriteUrl: string,
    appwriteProjectId: string,
    appwriteDatabaseId: string,
    appwriteCollectionId: string,
    appwriteBuckerId: string
}

const conf:confType = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteBuckerId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID
}

export default conf
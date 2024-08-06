import { Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/vi",
  platform: "com.henix.aora",
  projectId: "66b1ed2500124f20239f",
  databaseId: "66b1f46c000a6dd3e71f",
  userCollectionId: "66b1f4ac0022d0deb87e",
  videosCollectionId: "66b1f4e2002ee7629600",
  storageId: "66b1f7330014796a984f",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) 
  .setProject(config.projectId)
  .setPlatform(config.platform);

  const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}    
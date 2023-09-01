import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// import type { ServiceAccount } from "firebase-admin";

const serviceAccount = {
  type: "service_account",
  project_id: "adctanzania-70012",
  private_key_id: "42f5d8cd24bdc325cb55cc46e39b419f2bd79959",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWG9e1xTawGo8m\nFi30FGg3VaeFXFnLDC0kugPxSs2gGMy7/psk92b2cO5bk0XJESHOfnG/cvxOs407\ny64lAFypGGdJ0KKn/+6VGpiUbiPaEBbeu2pa18FgACg1JT3VwSgYyPu4dV0AHUoN\nCYaWAQhvI4Fz3CR9AaTVIn8BENxzKgk0cKAA1yLurUn5HONQdu5ddLtWhE9x6lEC\nn8y9m1HdByDTiqsjGMAI05KRqPtySeRXaf9oQQfE+Rc+2sCThFdGc482tqTt5E9c\nSDDbVLdrrrCsWL8pZ3uB17cE0/an03UEP1EdKNBmpI/wDNdASuSbXowu3lz6kyvY\n837kkhGtAgMBAAECggEAANsAxDbvBFrqZO+sbF8vZt1UmpR3qIoVucdbnWTtPhPW\nGt4tGS1Vx2LGYPw6YhZ4aFpdIJexq2sni2cyQ2C4pngOoqOPQcDaJbxkkTf9eVEt\nKDDOPt1K61ak5ASl0RGMPnPqx1bX5FfGY8Ohojo4R5Xet3/SL2oye8p6CdIER527\n+iQnpXhQw68SKPI25EQmuCQl5p3QtT2IR3PWXEU7rC3sGOkkwEuynpdozH+JmInh\nDZSJF8N7c0A1o7XOIAe+s/0YFCFyoYx0sKO2Y1vEs/dRJdmvDhM8LwLnioPlXQON\n0bZUCHnZ9W1aQwLnEGbIN861VLmaglPM8B+6FMLHwQKBgQDMxQPexFMly0jA46qL\ntiy836PU3C94QGOriQxmDbw/YXBrIiKbYiLBuk9KJi3PDYS6plby4VWMAdzQAkcU\nRSY9cMlOd5iSmI5//HfceQpESYqj+z0XIpZzbemvTtjHHNfIfZg/HqjhH1gJfy2O\nb0eu0c2REmE9K23qL6paz8WJ4QKBgQC7qe/QOtQFXRRzI5VowEzx5Ahjue0fH4pn\nHPdBmd/L8hlu3iK5bxbzfBObwqPkB+ocsmJwDIXlf3z++yiFAgibjzUAgcFcs9ys\nAqpFQaBtJY3d+CnFqhZsUj3YIUpvAUXP/BldhfJxUK5ouArBlSUOUKRrkF4e1BLp\nS51OPgS5TQKBgQCxmVqu9mYLTJHwQkWj4UBSHEHTF5nQWUBZAYeQZ+9SpWdEdBnB\n3M66aaXlcNGgWGA7JpQZGdkBkof6nU8axJLTDSR7+vyIgOpvFQC8ZvrBmWs2qGwm\nyaflu3nHw8H+iASbblsCu8vLXU0VB4nylI9+j5cUcPWHgUhWqjq9gqEY4QKBgCj4\nfObVMRzKqYBJsIDiGupkgoBjQyWcWTcR19l2oql//ZV64dHiMvyNhipnYCiUocQK\nHfuggEsOflectcf0HbT4mvW1XmXCztau7kWYglHR9RsU5unErIiRm/bnrbx2Zqt1\nuoP0jm22050BMTf6O9DYQk1Jg4LvggF1BK7kU1uxAoGAFbAwekENKaOCdjOxqwZO\nwFTU2btKtlzkwMf46nJIwm8tkxtedHDIXWsxA8q7gahwOHTyTT+/TmC+JgPBWLjW\nhVm3vtO2iALCkQyKshGo3lTVgSCO0peI65zC0MgNx2o/5UYsz+JAVaFha2acb+Np\n2wQdE8+Klseo/mKQO+oWUOw=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ccivt@adctanzania-70012.iam.gserviceaccount.com",
  client_id: "114545981344436676826",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ccivt%40adctanzania-70012.iam.gserviceaccount.com",
};

const app = initializeApp({
  credential: cert(serviceAccount),
});

const post = async ({ request, redirect }) => {
  const formData = await request.formData();
  const user_name = formData.get("user_name").toString();
  const user_email = formData.get("user_email").toString();
  const message = formData.get("message").toString();

  if (!user_name || !user_email || !message) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const messagesRef = db.collection("messages");
    await messagesRef.add({
      user_name,
      user_email,
      message,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/thanks");
};

export { post };

import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const post = async ({ request, redirect }) => {
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

import { initializeApp } from "firebase/app";
import { Button, Form, Input } from 'antd';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCylkGuBp05s8oncX9KRmshr3c2_gZbcQk",
  authDomain: "my-first-firestore-mb.firebaseapp.com",
  projectId: "my-first-firestore-mb",
  storageBucket: "my-first-firestore-mb.appspot.com",
  messagingSenderId: "823400274545",
  appId: "1:823400274545:web:b332dae86f1acf437ad9d0"
};

export default function Login(setUser) {
    const handleLogin = (email, password) => { 
        const app = initializeApp(firebaseConfig); // connects to firebase
        const auth = getAuth(app) // connects to firebase authentication
        //Login with firebase auth
        signInWithEmailAndPassword(auth, email, password)
        .then(res => setUser(res.user))
        .catch(console.error)
    }
    const handleGoogleLogin = () => {
        const app = initializeApp(firebaseConfig); // connects to firebase
        const auth = getAuth(app) // connects to firebase authentication
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(res => setUser(res.user))
        .catch(console.error)

    }
    return(
        <section style={{ padding: '2em'}}>
        <Form 
            onFinish={handleLogin}
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
        >
            <Form.Item label='Email' name="email"
            rules={[{ required: true, message: 'Please enter a valid email'}]}>
                <Input />
            </Form.Item>
            <Form.Item label='Password' name="password"
            rules={[{ required: true, message: 'Please enter a password that is a minimum of 6 characters'}]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item
            wrapperCol={{span: 16, offset: 8}}
            >
                <Button type='primary' htmlType='submit'>Login</Button>
            </Form.Item>
            <Form.Item
            wrapperCol={{span: 16, offset: 8}}
            >
                <Button onClick={handleGoogleLogin}>Google Login</Button>
            </Form.Item>
        </Form>
        </section>
    )
}
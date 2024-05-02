// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   getDocs,
//   doc,
//   setDoc,
// } from "firebase/firestore";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyBdZ6qViWW7waek-PQIDvVhZVK6zU7uXfk",
//   authDomain: "olx-project-aece2.firebaseapp.com",
//   projectId: "olx-project-aece2",
//   storageBucket: "olx-project-aece2.appspot.com",
//   messagingSenderId: "357606776999",
//   appId: "1:357606776999:web:fa1bce1639e3f07c607b82",
//   measurementId: "G-0DGHZCKFL8"
// };







// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();

// // USER-SIGNUP
// async function userSignUp(userInfo, navigator) {
//   try {
//     const { userName, userType, email, password } = userInfo;
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     delete userInfo.password;
//     userInfo.uid = user.uid;
//     await setDoc(doc(db, "users/" + user.uid), userInfo);
//     // const id = docRef.id;
//     // await addDoc(collection(db, "users/" + id), {
//     //   userName,
//     //   email,
//     //   id,
//     // });
//     // await setDoc(doc(db, "users/", ""), data)
//     navigator && navigator("Dashboard");
//   } catch (error) {
//     console.log(error);
//   }
// }

// // USER-LOGIN
// async function userLogin(userInfo, navigator) {
//   try {
//     const { email, password } = userInfo;
//     await signInWithEmailAndPassword(auth, email, password);
//     navigator && navigator("Dashboard");
//   } catch (e) {
//     alert(e.message);
//   }
// }

// // RIDES-REQUEST
// async function rideRequest(rideData) {
//   const {
//     pickUpLat,
//     pickUpLong,
//     destinationLat,
//     destinationLong,
//     carType: vehale,
//     fare,
//     status,
//   } = rideData;

//   await setDoc(doc(db, "rides/" + "passenger/"), rideData);

//   // const docRef = await addDoc(collection(db, "Rides"), userData);
//   // const id = docRef.id;
// }

// //  GETING ALL RIDES
// async function getingRides() {
//   const querySnapshot = await getDocs(collection(db, "rides"));
//   const rides = [];
//   querySnapshot.forEach((doc) => {
//     rides.push(doc.data());
//   });
//   return rides;
// }

// export {
//   rideRequest,
//   userSignUp,
//   userLogin,
//   db,
//   collection,
//   onSnapshot,
//   orderBy,
//   doc,
//   getingRides,
// };

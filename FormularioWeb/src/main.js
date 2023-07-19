 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAecM7BgW8OOtjekH-ULdmKwoAkVUUAapI",
    authDomain: "registroweb-4a2d3.firebaseapp.com",
    projectId: "registroweb-4a2d3",
    storageBucket: "registroweb-4a2d3.appspot.com",
    messagingSenderId: "1012710257644",
    appId: "1:1012710257644:web:14edcc749fa5d2f0abc6c9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Llamar al Autenticador de Firebase
  const auth = firebase.auth();

  //LLAMANDO ELEMENTOS DEL DOM
  const btnAceptarIniciarSesion = document.getElementById('btnAceptarIniciarSesion');
  const btnAceptarRegistrarse = document.getElementById('btnAceptarRegistrarse');

  // CREAR CUENTA O REGISTRARSE
  btnAceptarRegistrarse.addEventListener('click', ()=>{
    let email = document.getElementById('emailRegistrarse').value;
    let password = document.getElementById('passwordRegistrarse').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential)=>{
        console.log(email);
        
    })
  })

class AuthenticatorClass {
    metodoAutenticador() {
        this.ingresarUsuario();
        if (this.ingresarContraseña) {
            this.ingresarContraseña();
            this.verificarContraseña();
        }
        if (this.enviarCodigoAutenticador) {
            this.enviarCodigoAutenticador();
            this.verificarAutExterno();
        }
        this.login();
    }

    ingresarUsuario() {
        throw new Error("ingresarUsuario() debe ser implementado.");
    }
    //Métodos opcionales
    ingresarContraseña() {}
    verificarContraseña() {}
    enviarCodigoAutenticador() {}
    verificarAutExterno() {}

    login() {
        throw new Error("login() debe ser implementado.");
    }
}

class AutPorContraseña extends AuthenticatorClass {
    ingresarUsuario() {
        console.log("Usuario ingresado para autenticación por contraseña.");
    }

    ingresarContraseña() {
        console.log("Contraseña ingresada.");
    }

    verificarContraseña() {
        console.log("Contraseña verificada.");
    }

    login() {
        console.log("Inicio de sesión exitoso con autenticación por contraseña.");
    }
}

class TwoFA extends AuthenticatorClass {
    ingresarUsuario() {
        console.log("Usuario ingresado para autenticación 2FA.");
    }

    enviarCodigoAutenticador() {
        console.log("Código de autenticación enviado.");
    }

    verificarAutExterno() {
        console.log("Autenticación 2FA verificada.");
    }

    login() {
        console.log("Inicio de sesión exitoso con 2FA.");
    }
}

// Ejemplo de uso:
const authPorContraseña = new AutPorContraseña();
authPorContraseña.metodoAutenticador();

console.log("\n");

const authTwoFA = new TwoFA();
authTwoFA.metodoAutenticador();

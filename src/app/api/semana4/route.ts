import { NextResponse } from 'next/server'

// Clase base (Authenticator)
class Authenticator {
  authenticate(username: string, password: string) {
    // Lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      return true
    }
    return false
  }
}

// Decorador para el registro de eventos de autenticación
class AuthenticationSuscriptionDecorator {
  authenticator: Authenticator

  constructor(authenticator: Authenticator) {
    this.authenticator = authenticator
  }

  subscribe(username: string, password: string) {
    const isSuccess = this.authenticator.authenticate(username, password)

    if (isSuccess) {
      console.log(`Suscribir al usuario a un newsletter`)
    } else {
      console.log(
        `[WARNING] Intento de autenticación fallido para el usuario "${username}".`
      )
    }

    return isSuccess
  }
}

export async function GET(req: any) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username') || ''
  const password = searchParams.get('password') || ''

  // Crea una instancia de autenticador decorado
  const authenticator = new Authenticator()
  const authenticatorWithLogging = new AuthenticationSuscriptionDecorator(authenticator)

  // Llama al método authenticate del autenticador decorado
  const result = authenticatorWithLogging.subscribe(username, password)

  if (result) {
    return NextResponse.json({ message: 'Autenticación exitosa y suscripcion realizada' })
  } else {
    return NextResponse.json({ message: 'Autenticación fallida' })
  }
}

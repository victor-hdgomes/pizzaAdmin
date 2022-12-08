import { toast } from "react-toastify"

import {db} from '../firebase/config'

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup - deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    // Register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)

        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth, data.email, data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user;
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha tem que ter no minimo 6 caracteres!"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já está registrado!"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!"
            }

            setLoading(false)

            setError(systemErrorMessage)
        }
    }

    // Logout - sign out
    const logOut = () => {
        checkIfIsCancelled()
        signOut(auth)
        toast.success("Log out com sucesso.")
    }

    // Login - sign in
    const logIn = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
            toast.success("Log in com sucesso.")
        } catch (error) {
            let systemErrorMessage

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuario não encontrado!"
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta!"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!"
            }

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth, createUser, error, loading, logOut, logIn
    }

}
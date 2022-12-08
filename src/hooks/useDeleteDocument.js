import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config'
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify"

const inicialState = {
    loading: null,
    erro: null
}

const deleteReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "DELETED_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, inicialState)

    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }

    const deleteDocument = async (id) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
        })

        try {
            const deletedDocument = await deleteDoc(doc(db, docCollection, id))

            checkCancelBeforeDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument
            })

            toast.success("Post deleted with successes.")
        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message
            })
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { deleteDocument, response }
}
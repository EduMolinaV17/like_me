import { Router } from 'express'
import { actualizarPosts, allPosts, borrarPosts, crearPosts, editarLikePosts, obtenerPosts, obtenerPostsPorId } from '../controllers/postsController.js'

const router = Router()

router.get('/posts', obtenerPosts)
router.post('/posts', crearPosts)
router.put('/posts/like/:id',editarLikePosts)
router.delete('/posts/:id', borrarPosts)
router.put('/posts/:id', actualizarPosts)
router.get('/posts/:id', obtenerPostsPorId)
router.all('*', allPosts)

export default router

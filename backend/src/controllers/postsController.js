import * as sql from '../server/models/posts.dao.js'

export const obtenerPosts = (_, res) => sql.obtenerPostsModel()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const crearPosts = (req, res) => sql.crearPostsModel(req.body.titulo, req.body.img, req.body.descripcion)
  .then((result) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const editarLikePosts = (req, res) => sql.editarLikePostsModel(req.params.id)
  .then((result) => res.status(201).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const borrarPosts = (req, res) => sql.borrarPostsModel(req.params.id, req.body.titulo, req.body.img, req.body.descripcion)
  .then((result) => res.status(201).json({ status: true, code: 20, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const actualizarPosts = (req, res) => sql.actualizarPostsModel(req.params.id, req.body.titulo, req.body.img, req.body.descripcion, req.body.likes)
.then((result) => res.status(201).json({ status: true, code: 201, message: result }))
.catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const obtenerPostsPorId = (req, res) => sql.obtenerPostsPorIdModel(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const allPosts = (_, res) => {
  res.status(404).json({ status: false, code: 404, message: 'Page not found.' })
}

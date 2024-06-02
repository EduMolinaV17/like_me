import dbConection from '../database/dbConection.js'

export const obtenerPostsModel = () => dbConection('SELECT * FROM posts;')

export const obtenerPostsPorIdModel = (id) => dbConection('SELECT * FROM posts WHERE id = $1;', [id])

export const crearPostsModel = (titulo, img, descripcion) => 
    dbConection('INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *;', [titulo, img, descripcion])

export const editarLikePostsModel = (id) => dbConection("UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *;", [id])

export const borrarPostsModel = (id) => dbConection("DELETE FROM posts WHERE id = $1 RETURNING *", [id])

export const actualizarPostsModel = (id, titulo, img, descripcion, likes) =>
    dbConection('UPDATE posts SET titulo = $2, img = $3, descripcion = $4, likes = $5 WHERE id = $1 RETURNING *;', [id, titulo, img, descripcion, likes])
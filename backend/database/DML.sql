SELECT * FROM posts;
SELECT * FROM posts WHERE id = $1;
INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *;
UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *;
DELETE FROM posts WHERE id = $1 RETURNING *;
UPDATE posts SET titulo = $2, img = $3, descripcion = $4, likes = $5 WHERE id = $1 RETURNING *;
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('andres','$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86',true, 'Andres', 'Guzman','profesor@bolsadeideas.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$qGyDfZLBB.SgLv7GCP3uZe3oM38fVtr58T1iZ1LNOvO61loNUAAaK',true, 'John', 'Doe','juandavid.francob@gmail.com');
-- Administradores adicionales
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin2', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Alice', 'Smith', 'alice.smith@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin3', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Bob', 'Johnson', 'bob.johnson@domain.com');

-- Usuarios estándar adicionales
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user1', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Carlos', 'Lopez', 'carlos.lopez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user2', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Maria', 'Gonzalez', 'maria.gonzalez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user3', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Luis', 'Martinez', 'luis.martinez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user4', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Ana', 'Perez', 'ana.perez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user5', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Jorge', 'Ramirez', 'jorge.ramirez@domain.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuario_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (2, 1);


-- Roles de los usuarios
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (3, 2); -- admin2 con ROLE_ADMIN
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (4, 2); -- admin3 con ROLE_ADMIN
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (5, 1); -- user1 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (6, 1); -- user2 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (7, 1); -- user3 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (8, 1); -- user4 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (9, 1); -- user5 con ROLE_USER

-- Usuarios adicionales
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user6', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Pedro', 'Sanchez', 'pedro.sanchez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user7', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Sofia', 'Martinez', 'sofia.martinez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user8', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Ricardo', 'Fernandez', 'ricardo.fernandez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user9', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Laura', 'Gomez', 'laura.gomez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user10', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Diego', 'Hernandez', 'diego.hernandez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user11', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Isabel', 'Morales', 'isabel.morales@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user12', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Fernando', 'Diaz', 'fernando.diaz@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user13', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Adriana', 'Lopez', 'adriana.lopez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user14', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Felipe', 'Torres', 'felipe.torres@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user15', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Vanessa', 'Perez', 'vanessa.perez@domain.com');

-- Roles de los usuarios
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (10, 1); -- user6 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (11, 1); -- user7 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (12, 1); -- user8 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (13, 1); -- user9 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (14, 1); -- user10 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (15, 1); -- user11 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (16, 1); -- user12 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (17, 1); -- user13 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (18, 1); -- user14 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (19, 1); -- user15 con ROLE_USER

-- Usuarios adicionales
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user16', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Carlos', 'Rodriguez', 'carlos.rodriguez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user17', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Elena', 'Martinez', 'elena.martinez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user18', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Victor', 'Perez', 'victor.perez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user19', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Gabriela', 'Lopez', 'gabriela.lopez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user20', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Jose', 'Hernandez', 'jose.hernandez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user21', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Clara', 'Diaz', 'clara.diaz@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user22', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Manuel', 'Torres', 'manuel.torres@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user23', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Patricia', 'Gonzalez', 'patricia.gonzalez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user24', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Antonio', 'Martinez', 'antonio.martinez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user25', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Rosa', 'Rodriguez', 'rosa.rodriguez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user26', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Sergio', 'Martinez', 'sergio.martinez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user27', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Cristina', 'Gomez', 'cristina.gomez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user28', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Alvaro', 'Sanchez', 'alvaro.sanchez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user29', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Marta', 'Perez', 'marta.perez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user30', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Javier', 'Lopez', 'javier.lopez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user31', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Ines', 'Sanchez', 'ines.sanchez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user32', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Raul', 'Moreno', 'raul.moreno@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user33', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Nuria', 'Torres', 'nuria.torres@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user34', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Josefina', 'Lopez', 'josefina.lopez@domain.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('user35', '$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86', true, 'Pablo', 'Gonzalez', 'pablo.gonzalez@domain.com');

-- Roles de los usuarios
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (20, 1); -- user16 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (21, 1); -- user17 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (22, 1); -- user18 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (23, 1); -- user19 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (24, 1); -- user20 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (25, 1); -- user21 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (26, 1); -- user22 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (27, 1); -- user23 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (28, 1); -- user24 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (29, 1); -- user25 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (30, 1); -- user26 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (31, 1); -- user27 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (32, 1); -- user28 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (33, 1); -- user29 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (34, 1); -- user30 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (35, 1); -- user31 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (36, 1); -- user32 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (37, 1); -- user33 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (38, 1); -- user34 con ROLE_USER
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (39, 1); -- user35 con ROLE_USER




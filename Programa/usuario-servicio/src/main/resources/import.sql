INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('andres','$2a$10$ykhXmCAam5FUEF9GN.4Z8OwwWJidvMii6VFYe77cmS2X6oF6p4W86',true, 'Andres', 'Guzman','profesor@bolsadeideas.com');
INSERT INTO usuarios (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$qGyDfZLBB.SgLv7GCP3uZe3oM38fVtr58T1iZ1LNOvO61loNUAAaK',true, 'John', 'Doe','juandavid.francob@gmail.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuario_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuario_roles (usuario_id, role_id) VALUES (2, 1);

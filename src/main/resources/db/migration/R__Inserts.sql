INSERT INTO h_role (id, description, name) VALUES (1, 'Admin role', 'ROLE_ADMIN');
INSERT INTO h_role (id, description, name) VALUES (2, 'User role', 'ROLE_USER');
INSERT INTO h_role (id, description, name) VALUES (3, 'Worker role', 'ROLE_WORKER');

INSERT INTO h_user(id, username, password, id_role, active, request_status) VALUES
(999999999, 'Admin', '$2a$11$4PrnvTVVPJBGO/DG8ftrCeoJz3s3SeumjQHgjqO8jxUhg.4D239Pi',1, true, 'ACCEPTED');
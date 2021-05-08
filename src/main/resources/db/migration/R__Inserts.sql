INSERT INTO h_role (id, description, name) VALUES (1, 'Admin role', 'ROLE_ADMIN');
INSERT INTO h_role (id, description, name) VALUES (2, 'User role', 'ROLE_USER');
INSERT INTO h_role (id, description, name) VALUES (3, 'Worker role', 'ROLE_WORKER');

INSERT INTO h_user(id, username, password, id_role) VALUES
(1, 'Admin', '$2a$04$iRsccpxqihb7QvTewwyncOVpMTF/xLX4YekCDIgUi4b.BBzM4uRdi',1);

INSERT INTO h_user(id, username, password, id_role) VALUES
(2, 'Worker', '$2a$04$iRsccpxqihb7QvTewwyncOVpMTF/xLX4YekCDIgUi4b.BBzM4uRdi',3);

INSERT INTO h_user(id, username, password,id_role) VALUES
(3, 'User', '$2a$04$gpcSxxNLO/pNfvxVDCAFqeInF9RrmQadtyMFX9Mywum22eEz7Lvqa', 2);

INSERT INTO h_user(id, username, password,id_role) VALUES
(4, 'User1', '$2a$04$gpcSxxNLO/pNfvxVDCAFqeInF9RrmQadtyMFX9Mywum22eEz7Lvqa', 2);

INSERT INTO h_user(id, username, password,id_role) VALUES
(5, 'User2', '$2a$04$gpcSxxNLO/pNfvxVDCAFqeInF9RrmQadtyMFX9Mywum22eEz7Lvqa', 2);

INSERT INTO h_user(id, username, password,id_role) VALUES
(6, 'User3', '$2a$04$gpcSxxNLO/pNfvxVDCAFqeInF9RrmQadtyMFX9Mywum22eEz7Lvqa', 2);
CREATE TABLE h_role
(
    id         SERIAL,
    description varchar(255),
    name        varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE h_user
(
    id         SERIAL,
    username   varchar(255),
    password   varchar(255),
    active     BOOLEAN NOT NULL DEFAULT false,
    id_role    bigint,
    last_login TIMESTAMP       default null,
    registered TIMESTAMP       default null,
    phone_number varchar(20),
    email varchar(100),
    age int default null,
    first_name varchar(100),
    last_name varchar(100),
    city varchar(100),
    nip varchar,
    house_number varchar,
    street_number varchar,
    request_status varchar,
    street varchar,
    company_name varchar,
    PRIMARY KEY (id),
    foreign key (id_role) references h_role (id) on delete cascade
);

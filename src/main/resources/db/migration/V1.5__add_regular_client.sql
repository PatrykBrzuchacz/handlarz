CREATE TABLE IF NOT EXISTS h_regular_client
(
    id            SERIAL,
    phone_number  varchar(20),
    email         varchar(100),
    first_name    varchar(100),
    last_name     varchar(100),
    city          varchar(100),
    nip           varchar,
    house_number  varchar,
    street_number varchar,
    street        varchar,
    active        BOOLEAN NOT NULL DEFAULT true,
    user_id       bigint,
    company_name varchar,
    PRIMARY KEY (id),
    foreign key (user_id) references h_user (id) on delete cascade
)
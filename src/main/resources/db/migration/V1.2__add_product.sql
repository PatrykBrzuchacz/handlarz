CREATE TABLE h_product
(
    id           serial primary key,
    name         varchar,
    manufacturer varchar,
    amount       int,
    price        float,
    ean          varchar,
    sku          varchar,
    vat          int,
    user_id      bigint,
    foreign key (user_id) references h_user (id)
);
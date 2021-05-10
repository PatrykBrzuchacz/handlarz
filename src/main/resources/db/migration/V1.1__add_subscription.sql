CREATE TABLE h_subscription
(
    id bigserial primary key,
    name varchar(255),
    price int,
    from_orders int,
    to_orders int
);
CREATE TABLE h_external_shipment
(
    id             serial primary key,
    amount         int,
    price          float,
    user_id        bigint,
    issue_date     varchar,
    admission_date varchar,
    product_id     bigint,
    foreign key (user_id) references h_user (id),
    foreign key (product_id) references h_product (id)
);
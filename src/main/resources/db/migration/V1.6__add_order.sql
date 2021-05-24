CREATE TABLE IF NOT EXISTS h_order
(
    id            SERIAL,
    client_id bigint,
    user_id       bigint,
    created_date varchar,
    order_status varchar,
    final_price varchar,
    wz_created_date varchar,
    order_number varchar,
    wz_number varchar,
    PRIMARY KEY (id),
    foreign key (user_id) references h_user (id) on delete cascade,
    foreign key (client_id) references h_regular_client (id) on delete cascade
);

create table if not exists h_product_order
(
    id serial,
    order_id bigint,
    product_id bigint,
    amount int,
    PRIMARY KEY (id),
    foreign key (order_id) references h_order (id) on delete cascade,
    foreign key (product_id) references h_product (id) on delete cascade
)
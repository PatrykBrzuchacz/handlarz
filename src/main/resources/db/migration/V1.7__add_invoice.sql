CREATE TABLE IF NOT EXISTS h_invoice
(
    id            SERIAL,
    order_id bigint,
    user_id       bigint,
    created_date varchar,
    type varchar,
    price float,
    vat  float,
    invoice_number varchar,
    PRIMARY KEY (id),
    foreign key (user_id) references h_user (id) on delete cascade,
    foreign key (order_id) references h_order (id) on delete cascade
);

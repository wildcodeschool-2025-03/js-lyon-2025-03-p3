create table ship (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null,
  image varchar(250),
  quantity int unsigned not null,
  catchphrase varchar(200) not null
);

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(100) not null UNIQUE,
  hashed_password varchar(255) not null
);

create table rent (
  id int unsigned primary key auto_increment not null,
  user_id int unsigned not null,
  ship_id int unsigned not null,
  rent_time datetime not null default current_timestamp,
  foreign key (user_id) references user(id),
  foreign key (ship_id) references ship(id)
);

insert into ship (id, name, image, catchphrase, quantity)
values
  (1, "Zeta Leonis", "/upload/ship1.png", "Reussissez vos spaceTrips", 2),
  (2, "Alpha Andromedae", "/upload/ship2.png", "Laissez vous emporter", 3),
  (3, "Theta Eridani", "/upload/ship3.png", "Plus vite que la lumière", 1);

  insert into user (id, email, hashed_password)
  values
  (1, "test@test.com", "test123nohash");

create table ship (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null,
  image varchar(250),
  catchphrase varchar(200) not null
);

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(100) not null UNIQUE,
  hashed_password varchar(255) not null
);

insert into ship (id, name, image, catchphrase)
values
  (1, "Zeta Leonis", "/upload/ship1.png", "Reussissez vos spaceTrips"),
  (2, "Alpha Andromedae", "/upload/ship2.png", "Laissez vous emporter"),
  (3, "Theta Eridani", "/upload/ship3.png", "Plus vite que la lumière");

  insert into user (id, email, hashed_password)
  values
  (1, "test@test.com", "test123nohash");
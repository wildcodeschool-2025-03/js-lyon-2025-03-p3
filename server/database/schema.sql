create table ship (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null,
  image varchar(250),
  catchphrase varchar(200) not null
);

insert into ship (id, name, image, catchphrase)
values
  (1, "Zeta Leonis", "../../client/src/assests/images/ships/ship1.png", "Reussissez vos spaceTrips"),
  ( 2, "Alpha Andromedae", "../../client/src/assests/images/ships/ship2.png", "Laissez vous emporter"),
  (3, "Theta Eridani", "../../client/src/assests/images/ships/ship3.png", "Plus vite que la lumière");

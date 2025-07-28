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
  hashed_password varchar(255) not null,
  is_accept_cgu boolean default true,
  is_admin boolean default false
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
  (3, "Theta Eridani", "/upload/ship3.png", "Plus vite que la lumière", 1),
  (4,"Alpha Ursae", "/upload/ship4.png", "Partez là ou les étoiles vous appellent",2),
  (5,"Kappa Persei",  "/upload/ship5.png","Àu-delà des confins connus",2),
  (6,"Kappa Herculis", "/upload/ship6.png","Là où commence le voyage, finit la peur",1),
  (7," -XI Cephei", "/upload/ship7.png","Naviguez entre les étoiles",4),
  (8,"Beta Centauri", "/upload/ship8.png","Plus rapide qu'un battement de coeur",3),
  (9," Epsilon Delphini", "/upload/ship9.png", "Vitesse interstellaire garantie",1);

  insert into user (id, email, hashed_password, is_admin)
  values
  (1, "test@test.com", "$argon2id$v=19$m=19456,t=2,p=1$GVpZNGth5OIb9A3Z+PE3LA$ldaza/bh5hi9efVHluwDibMmAJ1buNfNCAS51xCKfE0", 1);

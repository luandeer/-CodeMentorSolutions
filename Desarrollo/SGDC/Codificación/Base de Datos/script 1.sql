USE BD_SGDC;
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  DNI VARCHAR(8),
  Celular VARCHAR(15),
  Direccion VARCHAR(100),
  Distrito VARCHAR(50),
  contraseña VARCHAR(50)
);


INSERT INTO usuarios (nombre, apellido, DNI, Celular, Direccion, Distrito, contraseña)
VALUES 
  ('Juan', 'Perez', '12345678', '987654321', 'Calle A, 123', 'Distrito A', 'contraseña1'),
  ('María', 'González', '87654321', '123456789', 'Calle B, 456', 'Distrito B', 'contraseña2'),
  ('Pedro', 'López', '56789012', '987654321', 'Calle C, 789', 'Distrito C', 'contraseña3'),
  ('Ana', 'Martínez', '34567890', '123456789', 'Calle D, 012', 'Distrito D', 'contraseña4'),
  ('Carlos', 'Sánchez', '23456789', '987654321', 'Calle E, 345', 'Distrito E', 'contraseña5'),
  ('Laura', 'Ramírez', '90123456', '123456789', 'Calle F, 678', 'Distrito F', 'contraseña6'),
  ('Luis', 'Gómez', '78901234', '987654321', 'Calle G, 901', 'Distrito G', 'contraseña7'),
  ('Sofía', 'Torres', '67890123', '123456789', 'Calle H, 234', 'Distrito H', 'contraseña8'),
  ('Javier', 'Hernández', '45678901', '987654321', 'Calle I, 567', 'Distrito I', 'contraseña9'),
  ('Marta', 'Vargas', '01234567', '123456789', 'Calle J, 890', 'Distrito J', 'contraseña10');

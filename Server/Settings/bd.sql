USE bn4hwksq4bwo2vaytc6a;

DROP TABLE IF EXISTS preguntas;

CREATE TABLE preguntas(
    id INT(10) NOT NULL PRIMARY KEY,
    categoria VARCHAR(100) NOT NULL,
    pregunta VARCHAR(250) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS respuestas;

CREATE TABLE respuestas (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    id_pregunta INT(10) NOT NULL,
    respuesta VARCHAR(255) NOT NULL,
    valor BOOLEAN NOT NULL,
    CONSTRAINT `fk_pregunta_respuesta` FOREIGN KEY (`id_pregunta`) REFERENCES preguntas(id)
)ENGINE=InnoDB;

DROP TABLE IF EXISTS historial;

CREATE TABLE historial(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    puntos INT(10)
)ENGINE=InnoDB;

INSERT INTO preguntas(id, categoria, pregunta)
VALUES (1, 'Deportes/Pasatiempos', '¿Qué pieza de ajedrez puede hacer un movimiento en forma de L?'),
(2, 'Deportes/Pasatiempos', '¿Cómo se llaman los deportistas que practican el judo?'),
(3, 'Deportes/Pasatiempos', '¿A qué equipo de fútbol pertenecía el estadio Metropolitano?'),
(4, 'Deportes/Pasatiempos', '¿Cuántos jugadores tiene un equipo de voleibol?'),
(5, 'Deportes/Pasatiempos', '¿En qué país se encuentra el circuito de Le Mans?');

INSERT INTO respuestas(id_pregunta, respuesta, valor)
VALUES (1,'Peon', false),
(1, 'Rey', false),
(1, 'Torre', false),
(1, 'Caballo', true),
(2, 'taekwondista', false),
(2, 'Futbolistas', false),
(2, 'Nadadores', false),
(2, 'Judokas', true),
(3, 'Atlético Nacional', false),
(3, 'Club América', false),
(3, 'Porto', false),
(3, 'Atlético de Madrid', true),
(4, 'Dos', false),
(4, 'Cinco', false),
(4, 'Once', false),
(4, 'Seis', true),
(5, 'Argentina', false),
(5, 'Canadá', false),
(5, 'Colombia', false),
(5, 'Francia', true);

INSERT INTO preguntas(id, categoria, pregunta)
VALUES (6, 'Arte y literatura', '¿Qué mide en París alrededor de 333 metros?'),
(7, 'Arte y literatura', '¿Quién escribió La Guerra de los Mundos en 1898?'),
(8, 'Arte y literatura', ' ¿Cuál era el lema de los Tres Mosqueteros?'),
(9, 'Arte y literatura', '¿Quién visitó un país gobernado por caballos?'),
(10, 'Arte y literatura', '¿Quién escribió las aventuras de Sandokán?');

INSERT INTO respuestas(id_pregunta, respuesta, valor)
VALUES (6, 'La Torre Eiffel', true),
(6, 'Notre Dame', false),
(6, 'Museo del Louvre', false),
(6, 'Arco del Triunfo', false),
(7, 'H.G. Wells', true),
(7, 'Gabriel García Márquez', false),
(7, 'William Shakespeare', false),
(7, 'Dante Alighieri', false),
(8, 'Todos para uno y uno para todos', true),
(8, 'Llegar juntos es el principio', false),
(8, 'Debes hacer las cosas que crees que no puedes hacer', false),
(8, 'La fuerza del equipo viene de cada miembro', false),
(9, 'Gulliver', true),
(9, 'El emperador de Lilipu', false),
(9, 'El rey laputiano', false),
(9, 'Luggnagg', false),
(10, 'Emilio Salgari', true),
(10, 'Julio Cortázar', false),
(10, 'Edgar Allan Poe', false),
(10, 'Julio Verne', false);

INSERT INTO preguntas(id, categoria, pregunta)
VALUES (11, 'Historia', '¿De qué nacionalidad era Juana de Arco?'),
(12, 'Historia', '¿Quién fue el primer presidente de los Estados Unidos?'),
(13, 'Historia', '¿Quién fue el primer hombre que pisó la luna?'),
(14, 'Historia', '¿En qué país se inició la Revolución Industrial?'),
(15, 'Historia', 'Qué volcán devastó Pompeya.');

INSERT INTO respuestas(id_pregunta, respuesta, valor)
VALUES (11, 'Italiana', false),
(11, 'Inglesa', false),
(11, 'Francesa', true),
(11, 'Española', false),
(12, 'Thomas Jefferson', false),
(12, 'John Adams', false),
(12, 'George Wasghington', true),
(12, 'Álvaro Uribe Vélez', false),
(13, 'Buzz Aldrin', false),
(13, 'Valentina Tereshckova', false),
(13, 'Neil Amstrong', true),
(13, 'Alan Shepard', false),
(14, 'Francia', false),
(14, 'Colombia', false),
(14, 'Gran Bretaña', true),
(14, 'Italia', false),
(15, 'El Santa Helena', false),
(15, 'El Etna', false),
(15, 'El Vesubio', true),
(15, 'El volcán Empédocles', false);

INSERT INTO preguntas(id, categoria, pregunta)
VALUES (16, 'Geografia', '¿Cuál es el idioma más hablado en Suiza?'),
(17, 'Geografia', '¿Qué país está entre Perú y Colombia?'),
(18, 'Geografia', '¿A qué país pertenece la isla de Creta?'),
(19, 'Geografia', '¿Qué lago baña la ciudad de Ginebra?'),
(20, 'Geografia', '¿Cuál es la capital de Indonesia?');

INSERT INTO respuestas(id_pregunta, respuesta, valor)
VALUES (16, 'Ingles', false),
(16, 'Alemán', true),
(16, 'Frances', false),
(16, 'Español', false),
(17, 'México', false),
(17, 'Ecuador', true),
(17, 'Brasil', false),
(17, 'Chile', false),
(18, 'Mecedonia del norte', false),
(18, 'Grecia', true),
(18, 'Turquía', false),
(18, 'Bulgaria', false),
(19, 'Lago Onega', false),
(19, 'El lago Lemán', true),
(19, 'Lago Ládoga', false),
(19, 'Lago Peipus', false),
(20, 'Londres', false),
(20, 'Jakarta', true),
(20, 'Moscú', false),
(20, 'Oslo', false);

INSERT INTO preguntas(id, categoria, pregunta)
VALUES (21, 'Ciencias y Naturaleza', '¿Cómo se llaman las células nerviosas?'),
(22, 'Ciencias y Naturaleza', ' ¿Cuál es el pájaro símbolo de la paz?'),
(23, 'Ciencias y Naturaleza', '¿Cuál es el dedo más sensible de la mano?'),
(24, 'Ciencias y Naturaleza', '¿Cuál de los cinco sentidos se desarrolla el primero?'),
(25, 'Ciencias y Naturaleza', '¿Cómo se llama la ciencia que estudia la sangre?');

INSERT INTO respuestas(id_pregunta, respuesta, valor)
VALUES (21, 'Fibroblastos', false),
(21, 'Adipocitos', false),
(21, 'Macrófagos', false),
(21, 'Neuronas', true),
(22, 'Cuervo', false),
(22, 'Gaviota', false),
(22, 'Gorrión', false),
(22, 'Paloma', true),
(23, 'Corazón', false),
(23, 'Pulgar', false),
(23, 'Anular', false),
(23, 'Índice', true),
(24, 'Vista', false),
(24, 'Gusto', false),
(24, 'Tacto', false),
(24, 'Olfato', true),
(25, 'Neurociencias', false),
(25, 'Miología ', false),
(25, 'Osteología', false),
(25, 'Hematología', true);


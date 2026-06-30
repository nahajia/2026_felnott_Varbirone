-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Jún 30. 19:51
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `pizzarendeles`
--
CREATE DATABASE IF NOT EXISTS `pizzarendeles` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `pizzarendeles`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `megrendelo`
--

CREATE TABLE `megrendelo` (
  `mrendel_id` int(11) NOT NULL,
  `mrendel_nev` varchar(255) NOT NULL,
  `mrendel_telefon` varchar(255) NOT NULL,
  `mrendel_utcahazszam` varchar(255) NOT NULL,
  `mrendel_varosid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `megrendelo`
--

INSERT INTO `megrendelo` (`mrendel_id`, `mrendel_nev`, `mrendel_telefon`, `mrendel_utcahazszam`, `mrendel_varosid`) VALUES
(1, 'Lakatos Gazsi', '06111111111', 'Vég u. 5.', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `pizza`
--

CREATE TABLE `pizza` (
  `pizza_id` int(11) NOT NULL,
  `pizza_nev` varchar(255) NOT NULL,
  `pizza_leiras` text NOT NULL,
  `pizza_meret` int(11) NOT NULL,
  `pizza_ar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `pizza`
--

INSERT INTO `pizza` (`pizza_id`, `pizza_nev`, `pizza_leiras`, `pizza_meret`, `pizza_ar`) VALUES
(1, 'Margaritha pizza', 'paradicsom, sajt', 30, 2500),
(2, 'Barbeque pizza', 'pari, sajt, barbeque szósz, csikemell, hagyma', 30, 3000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rendeles`
--

CREATE TABLE `rendeles` (
  `rendeles_id` int(11) NOT NULL,
  `rendeles_datumido` datetime NOT NULL,
  `rendeles_megrendeloid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `rendeles`
--

INSERT INTO `rendeles` (`rendeles_id`, `rendeles_datumido`, `rendeles_megrendeloid`) VALUES
(1, '2026-06-30 19:19:54', 1),
(2, '2026-06-29 19:32:30', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tetel`
--

CREATE TABLE `tetel` (
  `tetel_id` int(11) NOT NULL,
  `tetel_rendelesid` int(11) NOT NULL,
  `tetel_pizzaid` int(11) NOT NULL,
  `tetel_db` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tetel`
--

INSERT INTO `tetel` (`tetel_id`, `tetel_rendelesid`, `tetel_pizzaid`, `tetel_db`) VALUES
(1, 1, 1, 2),
(2, 1, 2, 2),
(3, 2, 1, 1),
(4, 2, 2, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `varos`
--

CREATE TABLE `varos` (
  `varos_id` int(11) NOT NULL,
  `varos_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `varos`
--

INSERT INTO `varos` (`varos_id`, `varos_nev`) VALUES
(1, 'Debrecen'),
(2, 'Józsa');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `megrendelo`
--
ALTER TABLE `megrendelo`
  ADD PRIMARY KEY (`mrendel_id`),
  ADD KEY `mrendel_varosid` (`mrendel_varosid`);

--
-- A tábla indexei `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`pizza_id`);

--
-- A tábla indexei `rendeles`
--
ALTER TABLE `rendeles`
  ADD PRIMARY KEY (`rendeles_id`),
  ADD KEY `rendeles_megrendeloid` (`rendeles_megrendeloid`);

--
-- A tábla indexei `tetel`
--
ALTER TABLE `tetel`
  ADD PRIMARY KEY (`tetel_id`),
  ADD KEY `tetel_rendelesid` (`tetel_rendelesid`),
  ADD KEY `tetel_pizzaid` (`tetel_pizzaid`);

--
-- A tábla indexei `varos`
--
ALTER TABLE `varos`
  ADD PRIMARY KEY (`varos_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `megrendelo`
--
ALTER TABLE `megrendelo`
  MODIFY `mrendel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `pizza`
--
ALTER TABLE `pizza`
  MODIFY `pizza_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `rendeles`
--
ALTER TABLE `rendeles`
  MODIFY `rendeles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `tetel`
--
ALTER TABLE `tetel`
  MODIFY `tetel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `varos`
--
ALTER TABLE `varos`
  MODIFY `varos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `megrendelo`
--
ALTER TABLE `megrendelo`
  ADD CONSTRAINT `megrendelo_ibfk_1` FOREIGN KEY (`mrendel_varosid`) REFERENCES `varos` (`varos_id`);

--
-- Megkötések a táblához `rendeles`
--
ALTER TABLE `rendeles`
  ADD CONSTRAINT `rendeles_ibfk_1` FOREIGN KEY (`rendeles_megrendeloid`) REFERENCES `megrendelo` (`mrendel_id`);

--
-- Megkötések a táblához `tetel`
--
ALTER TABLE `tetel`
  ADD CONSTRAINT `tetel_ibfk_1` FOREIGN KEY (`tetel_rendelesid`) REFERENCES `rendeles` (`rendeles_id`),
  ADD CONSTRAINT `tetel_ibfk_2` FOREIGN KEY (`tetel_pizzaid`) REFERENCES `pizza` (`pizza_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Jún 16. 19:50
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
-- Adatbázis: `szinhazadatb`
--
CREATE DATABASE IF NOT EXISTS `szinhazadatb` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `szinhazadatb`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eloadas`
--

CREATE TABLE `eloadas` (
  `eloadas_id` int(11) NOT NULL,
  `eloadas_szindarabid` int(11) NOT NULL,
  `eloadas_epuletid` int(11) NOT NULL,
  `eloadas_datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eloadas`
--

INSERT INTO `eloadas` (`eloadas_id`, `eloadas_szindarabid`, `eloadas_epuletid`, `eloadas_datum`) VALUES
(1, 1, 1, '2026-03-10'),
(2, 2, 2, '2026-05-11'),
(3, 2, 2, '2026-04-16');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `epulet`
--

CREATE TABLE `epulet` (
  `epulet_id` int(11) NOT NULL,
  `epulet_nev` varchar(255) NOT NULL,
  `epulet_varosid` int(11) NOT NULL,
  `epulet_utca` varchar(255) NOT NULL,
  `epulet_tipusid` int(11) NOT NULL,
  `epulet_ferohely` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `epulet`
--

INSERT INTO `epulet` (`epulet_id`, `epulet_nev`, `epulet_varosid`, `epulet_utca`, `epulet_tipusid`, `epulet_ferohely`) VALUES
(1, 'Kölcsey', 1, 'Bethlen utca 10', 2, 250),
(2, 'Csokonai ', 1, 'Kossuth utca 50', 1, 500);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `epulettipus`
--

CREATE TABLE `epulettipus` (
  `epulettipus_id` int(11) NOT NULL,
  `epulettipus_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `epulettipus`
--

INSERT INTO `epulettipus` (`epulettipus_id`, `epulettipus_nev`) VALUES
(1, 'Színhaz'),
(2, 'Művelődési Központ');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szindarab`
--

CREATE TABLE `szindarab` (
  `szindarab_id` int(11) NOT NULL,
  `szindarab_nev` varchar(255) NOT NULL,
  `szindarab_ido` int(11) NOT NULL,
  `szindarab_tipus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `szindarab`
--

INSERT INTO `szindarab` (`szindarab_id`, `szindarab_nev`, `szindarab_ido`, `szindarab_tipus`) VALUES
(1, 'Hulla jó nászéjszaka', 150, 1),
(2, 'Dzsungel könyve', 120, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szindarabtipus`
--

CREATE TABLE `szindarabtipus` (
  `szindarabtipus_id` int(11) NOT NULL,
  `szindarabtipus_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `szindarabtipus`
--

INSERT INTO `szindarabtipus` (`szindarabtipus_id`, `szindarabtipus_nev`) VALUES
(1, 'Vígjáték'),
(2, 'Musical'),
(3, 'Dráma');

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
(2, 'Miskolc'),
(4, 'Szolnok'),
(5, 'Nyiregyháza');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `eloadas`
--
ALTER TABLE `eloadas`
  ADD PRIMARY KEY (`eloadas_id`),
  ADD KEY `eloadas_szindarabid` (`eloadas_szindarabid`),
  ADD KEY `eloadas_epuletid` (`eloadas_epuletid`);

--
-- A tábla indexei `epulet`
--
ALTER TABLE `epulet`
  ADD PRIMARY KEY (`epulet_id`),
  ADD KEY `epulet_varosid` (`epulet_varosid`),
  ADD KEY `epulet_tipusid` (`epulet_tipusid`);

--
-- A tábla indexei `epulettipus`
--
ALTER TABLE `epulettipus`
  ADD PRIMARY KEY (`epulettipus_id`);

--
-- A tábla indexei `szindarab`
--
ALTER TABLE `szindarab`
  ADD PRIMARY KEY (`szindarab_id`),
  ADD KEY `szindarab_tipus` (`szindarab_tipus`);

--
-- A tábla indexei `szindarabtipus`
--
ALTER TABLE `szindarabtipus`
  ADD PRIMARY KEY (`szindarabtipus_id`);

--
-- A tábla indexei `varos`
--
ALTER TABLE `varos`
  ADD PRIMARY KEY (`varos_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `eloadas`
--
ALTER TABLE `eloadas`
  MODIFY `eloadas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `epulet`
--
ALTER TABLE `epulet`
  MODIFY `epulet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `epulettipus`
--
ALTER TABLE `epulettipus`
  MODIFY `epulettipus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `szindarab`
--
ALTER TABLE `szindarab`
  MODIFY `szindarab_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `szindarabtipus`
--
ALTER TABLE `szindarabtipus`
  MODIFY `szindarabtipus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `varos`
--
ALTER TABLE `varos`
  MODIFY `varos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `eloadas`
--
ALTER TABLE `eloadas`
  ADD CONSTRAINT `eloadas_ibfk_1` FOREIGN KEY (`eloadas_szindarabid`) REFERENCES `szindarab` (`szindarab_id`),
  ADD CONSTRAINT `eloadas_ibfk_2` FOREIGN KEY (`eloadas_epuletid`) REFERENCES `epulet` (`epulet_id`);

--
-- Megkötések a táblához `epulet`
--
ALTER TABLE `epulet`
  ADD CONSTRAINT `epulet_ibfk_1` FOREIGN KEY (`epulet_varosid`) REFERENCES `varos` (`varos_id`),
  ADD CONSTRAINT `epulet_ibfk_2` FOREIGN KEY (`epulet_tipusid`) REFERENCES `epulettipus` (`epulettipus_id`);

--
-- Megkötések a táblához `szindarab`
--
ALTER TABLE `szindarab`
  ADD CONSTRAINT `szindarab_ibfk_1` FOREIGN KEY (`szindarab_tipus`) REFERENCES `szindarabtipus` (`szindarabtipus_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

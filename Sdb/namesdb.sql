-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2022 at 07:00 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `namesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `namtbl`
--

CREATE TABLE `namtbl` (
  `UidCol` bigint(20) NOT NULL,
  `NamCol` varchar(50) NOT NULL,
  `MblCol` varchar(10) NOT NULL,
  `MylCol` varchar(50) NOT NULL,
  `TymCol` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `namtbl`
--

INSERT INTO `namtbl` (`UidCol`, `NamCol`, `MblCol`, `MylCol`, `TymCol`) VALUES
(1, 'Chethan', '767687699', 'Chethan@everi.com', '2022-08-21 04:59:22'),
(2, 'Akshay', '9960088721', 'akshay@everi.com', '2022-08-21 07:58:24'),
(3, 'Shadab', '7760080271', 'Shadab@everi.com', '2022-08-21 07:59:10'),
(4, 'Thanuja', '8782254271', 'Thanuja@everi.com', '2022-08-21 07:59:37'),
(5, 'Karthik', '7894554271', 'Karthik@everi.com', '2022-08-21 08:00:02');

-- --------------------------------------------------------

--
-- Table structure for table `ordtbl`
--

CREATE TABLE `ordtbl` (
  `UidCol` bigint(20) NOT NULL,
  `UsrUidCol` bigint(20) NOT NULL,
  `PrdUidCol` bigint(20) NOT NULL,
  `QtyCol` int(11) NOT NULL,
  `TymCol` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordtbl`
--

INSERT INTO `ordtbl` (`UidCol`, `UsrUidCol`, `PrdUidCol`, `QtyCol`, `TymCol`) VALUES
(1, 1, 2, 3, '2022-08-21 10:17:38'),
(2, 3, 1, 5, '2022-08-21 10:54:45'),
(3, 4, 4, 4, '2022-08-21 10:54:57'),
(4, 5, 4, 2, '2022-08-21 10:55:05'),
(5, 3, 5, 1, '2022-08-21 10:55:19');

-- --------------------------------------------------------

--
-- Table structure for table `prdtbl`
--

CREATE TABLE `prdtbl` (
  `UidCol` bigint(20) NOT NULL,
  `TitleCol` varchar(100) NOT NULL,
  `DetCol` varchar(1000) NOT NULL,
  `CostCol` int(11) NOT NULL,
  `TymCol` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prdtbl`
--

INSERT INTO `prdtbl` (`UidCol`, `TitleCol`, `DetCol`, `CostCol`, `TymCol`) VALUES
(1, 'Watch', 'Fastrack Dial Watch', 3500, '2022-08-21 10:10:49'),
(2, 'Shoes', 'Nike Air', 5000, '2022-08-21 10:11:36'),
(3, 'Mobile', 'Oneplus 7', 32000, '2022-08-21 10:12:21'),
(4, 'Laptop', 'Dell latitude 7420', 175000, '2022-08-21 10:12:51'),
(5, 'TV', 'Samsung Smart TV', 76000, '2022-08-21 10:13:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `namtbl`
--
ALTER TABLE `namtbl`
  ADD PRIMARY KEY (`UidCol`);

--
-- Indexes for table `ordtbl`
--
ALTER TABLE `ordtbl`
  ADD PRIMARY KEY (`UidCol`);

--
-- Indexes for table `prdtbl`
--
ALTER TABLE `prdtbl`
  ADD PRIMARY KEY (`UidCol`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `namtbl`
--
ALTER TABLE `namtbl`
  MODIFY `UidCol` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ordtbl`
--
ALTER TABLE `ordtbl`
  MODIFY `UidCol` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `prdtbl`
--
ALTER TABLE `prdtbl`
  MODIFY `UidCol` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

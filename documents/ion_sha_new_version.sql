-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2020 at 10:06 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ion_sha`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `adr_id` int(6) NOT NULL COMMENT 'หมายเลขแฟ้มเก็บที่อยู่ เช่น 1 ,2 ,3',
  `adr_home_number` varchar(255) DEFAULT NULL COMMENT 'บ้านเลขที่ เช่น 14/53 , 25/98',
  `adr_hmo` int(6) DEFAULT NULL COMMENT 'หมู่ที่ เช่น 1 ,2 ,3',
  `adr_road` varchar(255) DEFAULT NULL COMMENT 'ถนน เช่น สีลม ,เพชรเกษม',
  `adr_tum_id` int(6) DEFAULT NULL COMMENT 'หมายเลขตำบล เช่น 1 ,2 ,3 ',
  `adr_aum_id` int(6) DEFAULT NULL COMMENT 'หมายเลขอำเภอ เช่น 1 ,2 ,3',
  `adr_pro_id` int(6) DEFAULT NULL COMMENT 'หมายเลขจังหวัด เช่น 1 ,2 ,3',
  `adr_pri_id` int(6) DEFAULT NULL COMMENT 'หมายเลขไปรษณีย์ เช่น 1 ,2 ,3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`adr_id`, `adr_home_number`, `adr_hmo`, `adr_road`, `adr_tum_id`, `adr_aum_id`, `adr_pro_id`, `adr_pri_id`) VALUES
(1, '56/32', 1, 'ลงหาด', 1, 1, 1, 1),
(2, '98/12', 1, 'อ่างศิลา', 1, 1, 1, 1),
(3, '445/234', 2, 'ทุ่งนา', 2, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `address_tab`
--

CREATE TABLE `address_tab` (
  `adt_id` int(6) NOT NULL COMMENT 'หมายเลขข้อมูลส่วนของที่อยู่',
  `adt_type_id` int(6) DEFAULT NULL COMMENT 'หมายเลขประเภทข้อมูลที่อยู่',
  `adt_adr_id` int(6) DEFAULT NULL COMMENT 'หมายเลขที่อยู่	',
  `adt_app_id` int(6) DEFAULT NULL COMMENT 'หมายเลขใบสมัคร  เช่น   1 ,2 ,3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address_tab`
--

INSERT INTO `address_tab` (`adt_id`, `adt_type_id`, `adt_adr_id`, `adt_app_id`) VALUES
(2, 2, 1, 4),
(3, 1, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `address_type`
--

CREATE TABLE `address_type` (
  `art_id` int(6) NOT NULL COMMENT 'หมายเลขประเภทที่อยู่',
  `art_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อประเภทที่อยู๋',
  `art_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานประเภทที่อยู๋'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address_type`
--

INSERT INTO `address_type` (`art_id`, `art_name`, `art_use`) VALUES
(1, 'ที่อยู่ปัจจุบัน', 'y'),
(2, 'ที่อยู่ชั่วคราว', 'n');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `app_id` int(6) NOT NULL COMMENT 'หมายเลขใบสมัคร  เช่น   1 ,2 ,3',
  `app_code` varchar(255) DEFAULT NULL COMMENT 'รหัสใบสมัคร  เช่น   AAA123	',
  `app_reg_date` timestamp NULL DEFAULT current_timestamp() COMMENT 'วันที่สมัคร เช่น 2020-01-01 00:00:00',
  `app_update_date` datetime DEFAULT current_timestamp() COMMENT 'วันที่แก้ไขล่าสุด 2020-01-01 00:00:01',
  `app_sta_id` int(6) DEFAULT NULL COMMENT 'หมายเลขสถานะใบสมัคร',
  `app_usr_id` int(6) DEFAULT NULL COMMENT 'หมายเลขผู้ใช้งาน (ผู้ทำใบสมัคร) เช่น  1 ,2 ,3',
  `app_pro_id` int(6) DEFAULT NULL COMMENT 'หมายเลขแฟ้มเก็บประวัติ (นักเรียนที่สมัครเรียน) เช่น 1 ,2 ,3',
  `app_reg_id` int(6) DEFAULT NULL COMMENT 'หมายเลขการลงทะเบียน เช่น  1 ,2 ,3	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`app_id`, `app_code`, `app_reg_date`, `app_update_date`, `app_sta_id`, `app_usr_id`, `app_pro_id`, `app_reg_id`) VALUES
(3, 'กกกก001', '2019-12-31 05:11:57', '2020-12-31 00:00:00', 1, 1, 4, 1),
(4, '000001', '2020-05-29 17:00:00', '2020-09-30 00:00:00', 1, 5, 3, 2),
(11, NULL, '2020-01-12 07:38:46', '2020-01-12 14:38:46', 1, 1, 8, 3),
(12, NULL, '2020-01-12 08:23:16', '2020-01-12 15:23:16', 1, 1, 8, 3),
(13, NULL, '2020-01-12 08:23:53', '2020-01-12 15:23:53', 1, 1, 8, 7),
(14, NULL, '2020-01-12 08:26:32', '2020-01-12 15:26:32', 1, 1, 8, 6),
(15, NULL, '2020-01-12 08:33:03', '2020-01-12 15:33:03', 1, 1, 8, 7),
(16, NULL, '2020-01-12 08:34:10', '2020-01-12 15:34:10', 1, 1, 8, 4);

-- --------------------------------------------------------

--
-- Table structure for table `applications_status`
--

CREATE TABLE `applications_status` (
  `aps_id` int(6) NOT NULL COMMENT 'หมายเลขสถานะใบสมัคร เช่น  1 ,2 ,3	',
  `aps_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อสถานะใบสมัคร ช่น อนุมัติ , รออนุมัติ ',
  `aps_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานสถานใบสมัคร เช่น y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `applications_status`
--

INSERT INTO `applications_status` (`aps_id`, `aps_name`, `aps_use`) VALUES
(1, 'กำลังทำ', 'y'),
(2, 'ผ่านการคัดเลือก', 'y'),
(3, 'ไม่ผ่านการคัดเลือก', 'y'),
(4, 'รอผลดำเนินการ', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `cls_id` int(6) NOT NULL COMMENT 'หมายเลขห้องเรียน เช่น   1 ,2 ,3',
  `cls_title` varchar(125) DEFAULT NULL COMMENT 'ชื่อห้องเรียนหลัก เช่น   1 ,2 ,3',
  `cls_sub` varchar(125) DEFAULT NULL COMMENT 'ชื่อห้องเรียนลอง เช่น   1 ,2 ,3',
  `cls_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานของห้องเรียน เช่น   y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`cls_id`, `cls_title`, `cls_sub`, `cls_use`) VALUES
(1, '6', '*', 'y'),
(2, '5', '*', 'y'),
(3, '4', '*', 'y'),
(4, '3', '*', 'y'),
(5, '2', '*', 'y'),
(6, '1', '*', 'y'),
(7, '6', '1', 'y'),
(8, '6', '2', 'y'),
(9, '6', '3', 'y'),
(10, '5', '1', 'y'),
(11, '5', '2', 'y'),
(12, '5', '3', 'y'),
(13, '4', '1', 'y'),
(14, '4', '2', 'y'),
(15, '4', '3', 'y'),
(16, '3', '1', 'y'),
(17, '3', '2', 'y'),
(18, '3', '3', 'y'),
(19, '2', '1', 'y'),
(20, '2', '2', 'y'),
(21, '2', '3', 'y'),
(22, '1', '1', 'y'),
(23, '1', '2', 'y'),
(24, '1', '3', 'y'),
(25, '*', '1', 'y'),
(26, '*', '2', 'y'),
(27, '*', '3', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `crs_id` int(6) NOT NULL COMMENT 'หมายเลขหลักสูตร เช่น   1 ,2 ,3',
  `crs_th_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อหลักสูตรภาษาไทย เช่น ภาษาไทย ,ภาษาอังกฤษ ,สองภาษา',
  `crs_en_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อหลักสูตรภาษาอังกฤษ เช่น thai ,english ,gif',
  `crs_ment` varchar(255) DEFAULT NULL COMMENT 'คำอธิบายหลักสูตร เช่น หลักสูตรเปิดใหม่',
  `crs_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานหลักสูตร เช่น   y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`crs_id`, `crs_th_name`, `crs_en_name`, `crs_ment`, `crs_use`) VALUES
(1, 'ภาษาไทย', 'thai', 'หลักสูตรภาษาไทย', 'y'),
(2, 'ภาษาอังกฤษ', 'english', 'หลักสูตรภาษาอังกฤษ', 'y'),
(3, 'ภาษาอังกฤษพิเศษ', 'english special', 'หลักสูตรภาษาอังกฤษพิเศษ', 'y'),
(4, 'สองภาษา', 'mixed', 'หลักสูตรภาษาไทยและภาษาอังกฤษ', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `education_levels`
--

CREATE TABLE `education_levels` (
  `edl_id` int(6) NOT NULL COMMENT 'หมายเลขระดับการศึกษา เช่น  1 ,2 ,3	',
  `edl_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อระดับการศึกษา เช่น มัธยม',
  `edl_sub_name` varchar(255) DEFAULT NULL,
  `edl_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานสถานะระดับการศึกษา เช่น y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `education_levels`
--

INSERT INTO `education_levels` (`edl_id`, `edl_name`, `edl_sub_name`, `edl_use`) VALUES
(1, 'ประถมศึกษา', 'ป.', 'y'),
(2, 'อนุบาล', 'อ.', 'y'),
(3, 'เตรียมอนุบาล', 'ตอ.', 'y'),
(4, 'หมาวิทยาลัย', 'ม.', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `parent_sta_tab`
--

CREATE TABLE `parent_sta_tab` (
  `pst_id` int(11) NOT NULL COMMENT 'หมายเลขข้อมูลส่วนของสถานะผู้ปกครอง',
  `pst_salary` double DEFAULT NULL COMMENT 'รายได้ครอบครัวต่อเดือน',
  `pst_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อผู้นำนักเรียนมาสมัครเรียน',
  `pst_phone` int(10) DEFAULT NULL COMMENT 'เบอร์โทรศัพท์ผู้นำนักเรียนมาสมัครเรียน',
  `pst_rela` varchar(255) DEFAULT NULL COMMENT 'ความสัมพันธ์ผู้นำนักเรียนมาสมัครเรียน',
  `pst_pf_id` int(6) DEFAULT NULL COMMENT 'คำนำหน้าชื่อผู้นำนักเรียนมาสมัครเรียน',
  `pst_type_id` int(6) DEFAULT NULL COMMENT 'หมายเลขสถานะข้อมูลส่วนของสถานะผู้ปกครอง',
  `pst_app_id` int(6) DEFAULT NULL COMMENT 'หมายเลขใบสมัคร  เช่น   1 ,2 ,3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parent_sta_tab`
--

INSERT INTO `parent_sta_tab` (`pst_id`, `pst_salary`, `pst_name`, `pst_phone`, `pst_rela`, `pst_pf_id`, `pst_type_id`, `pst_app_id`) VALUES
(3, 125000, 'สมชาย จงจอหอ', 223640611, 'น้า', 1, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `parent_sta_type`
--

CREATE TABLE `parent_sta_type` (
  `ptt_id` int(11) NOT NULL COMMENT 'หมายเลขประเภทสถานะผูปกครอง',
  `ptt_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อประเภทสถานะผูปกครอง',
  `ptt_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานประเภทสถานะผูปกครอง'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parent_sta_type`
--

INSERT INTO `parent_sta_type` (`ptt_id`, `ptt_name`, `ptt_use`) VALUES
(1, 'อยู่ด้วยกัน', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `parent_tab`
--

CREATE TABLE `parent_tab` (
  `pat_id` int(6) NOT NULL COMMENT 'หมายเลขข้อมูลส่วนของผู้ปกครอง',
  `pat_job` varchar(255) DEFAULT NULL COMMENT 'อาชีพผู้ปกครอง',
  `pat_phone` int(10) DEFAULT NULL COMMENT 'เบอร์โทรศัพท์	',
  `pat_salary` double DEFAULT NULL COMMENT 'เงินเดือนผู้ปกครอง',
  `pat_type_id` int(6) DEFAULT NULL COMMENT 'หมายเลขประเภทข้อมูลส่วนของผู้ปกครอง',
  `pat_app_id` int(6) DEFAULT NULL COMMENT 'หมายเลขใบสมัคร  เช่น   1 ,2 ,3',
  `pat_pro_id` int(6) DEFAULT NULL COMMENT 'หมายเลขแฟ้มประวัติ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parent_tab`
--

INSERT INTO `parent_tab` (`pat_id`, `pat_job`, `pat_phone`, `pat_salary`, `pat_type_id`, `pat_app_id`, `pat_pro_id`) VALUES
(1, 'ขายตรง', 551260788, 125325, 1, 4, 6),
(2, 'พนักงานบริษัท', 1948544433, 35000, 2, 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `parent_type`
--

CREATE TABLE `parent_type` (
  `prt_id` int(6) NOT NULL COMMENT 'หมายเลขประเภทผู้ปกครอง',
  `prt_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อประเภทผู้ปกครอง',
  `prt_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานประเภทผู้ปกครอง'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parent_type`
--

INSERT INTO `parent_type` (`prt_id`, `prt_name`, `prt_use`) VALUES
(1, 'บิดา', 'y'),
(2, 'มารดา', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `pro_id` int(11) NOT NULL COMMENT 'หมายเลขแฟ้มเก็บประวัติ เช่น 1 ,2 ,3',
  `pro_first_th_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อจริงภาษาไทย เช่น สุภัค , วีรพงศ์',
  `pro_last_th_name` varchar(255) DEFAULT NULL COMMENT 'นามสกุลภาษาไทย เช่น พุกดำ , วีรพงศ์',
  `pro_first_en_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อจริงภาษาอังกฤษ เช่น Supak , Weerapong',
  `pro_last_en_name` varchar(255) DEFAULT NULL COMMENT 'นามสกุลภาษาอังกฤษ เช่น Pukdam , Pongsiri',
  `pro_id_card` varchar(13) DEFAULT NULL COMMENT 'หมายเลขบัตประจำตัวประชาชน เช่น 1608806315876',
  `pro_race` varchar(255) DEFAULT NULL COMMENT 'เชื้อชาติ เช่น ไทย-เยอร์มัน',
  `pro_bod` datetime DEFAULT NULL COMMENT 'วันเดือนปีที่เกิด เช่น 2020-01-01 00:00:00',
  `pro_nation_id` int(6) DEFAULT NULL COMMENT 'หมายเลขสัญชาติ เช่น 1 ,2 ,3',
  `pro_blood_id` int(6) DEFAULT NULL COMMENT 'หมายเลขกรุ๊ปเลือด เช่น 1 ,2 ,3',
  `pro_prefix_id` int(6) DEFAULT NULL COMMENT 'หมายเลขคำนำหน้าชื่อ เช่น 1 ,2 ,3',
  `pro_province_id` int(6) DEFAULT NULL COMMENT 'หมายเลขจังหวัด เช่น 1 ,2 ,3',
  `pro_religion_id` int(6) DEFAULT NULL COMMENT 'หมายเลขศาสนา เช่น 1 ,2 ,3',
  `pro_usr_id` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`pro_id`, `pro_first_th_name`, `pro_last_th_name`, `pro_first_en_name`, `pro_last_en_name`, `pro_id_card`, `pro_race`, `pro_bod`, `pro_nation_id`, `pro_blood_id`, `pro_prefix_id`, `pro_province_id`, `pro_religion_id`, `pro_usr_id`) VALUES
(1, 'มาโนทย์', 'รักษ์ดี', 'manote', 'lukdee', '2147483647', 'ไทย-ลาว', '0000-00-00 00:00:00', 1, 1, 1, 1, 1, NULL),
(2, 'มานี', 'รักษ์ดี', 'manee', 'lukdee', '2147483647', 'ไทย-ลาว', '2020-12-10 00:00:00', 1, 1, 1, 1, 1, NULL),
(3, 'สึนะ', 'ซาวาดะ', 'Tsuna', 'Sawada', '60160123', 'ฟินแลนด์', '1997-06-14 00:00:00', 1, 1, 1, 1, 1, NULL),
(4, 'โงกุน', 'ซุน', 'Goku', 'Tsun', '60160768', 'อังกฤษ', '1979-04-08 00:00:00', 1, 1, 1, 1, 1, NULL),
(5, 'นภาพร', 'กนกพร', 'Npaporn', 'Kanokporn', '2012378234', 'ฮ่องกง', '1960-03-26 00:00:00', 1, 1, 1, 1, 1, NULL),
(6, 'ฮายาเตะ', 'กนกพร', 'Hayate', 'Kanokporn', '1642300923', 'ฮ่องกง', '1955-11-01 00:00:00', 1, 1, 1, 1, 1, NULL),
(8, 'พลยุด', 'โสภาพ', 'polyut', 'solpab', '1709902541369', 'ไทย', '2020-01-15 00:00:00', 1, 1, 1, 1, 1, 1),
(9, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 1, 1, 1, NULL),
(10, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(11, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(12, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(13, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(14, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(15, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(16, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(17, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL),
(18, 'สุภกิต', 'ทีวี', 'Supakit', 'Tv', '1706602154978', 'ไทย-รัฐเซีย', '2020-12-30 00:00:00', 1, 1, 2, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `reg_id` int(6) NOT NULL COMMENT 'หมายเลขการลงทะเบียน เช่น  1 ,2 ,3	',
  `reg_code` varchar(255) DEFAULT NULL COMMENT 'รหัสการลงทะเบียน เช่น AAA	',
  `reg_start` datetime DEFAULT NULL COMMENT 'วันที่เริ่มการลงทะเบียน เช่น 2020-01-01 00:00:00',
  `reg_end` datetime DEFAULT NULL COMMENT 'วันที่สิ้นสุดการลงทะเบียน เช่น 2020-12-01 00:00:00',
  `reg_round` int(2) DEFAULT NULL COMMENT 'รอบการลงทะเบียน เช่น 1 ,2 ,3',
  `reg_max` int(4) DEFAULT NULL COMMENT 'จำนวนที่รับสมัครมากสุด เช่น 120 ,55',
  `reg_now` int(4) DEFAULT NULL COMMENT 'จำนวนที่ลงทะเบียนปัจจุบัน เช่น 10 ,50',
  `reg_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานใบสมัคร เช่น y ,n	',
  `reg_sta_id` int(6) DEFAULT NULL COMMENT 'หมายเลขสถานะการลงทะเบียน เช่น 1 ,2 ,3',
  `reg_yrs_id` int(6) DEFAULT NULL COMMENT 'หมายเลขปีการศึกษา เช่น  1 ,2 ,3	',
  `reg_tem_id` int(6) DEFAULT NULL COMMENT 'หมายเลขเทอมการศึกษา เช่น   1 ,2 ,3 ',
  `reg_cls_id` int(6) DEFAULT NULL COMMENT 'หมายเลขห้องเรียน เช่น   1 ,2 ,3',
  `reg_crs_id` int(6) DEFAULT NULL COMMENT 'หมายเลขหลักสูตร เช่น   1 ,2 ,3',
  `reg_edl_id` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`reg_id`, `reg_code`, `reg_start`, `reg_end`, `reg_round`, `reg_max`, `reg_now`, `reg_use`, `reg_sta_id`, `reg_yrs_id`, `reg_tem_id`, `reg_cls_id`, `reg_crs_id`, `reg_edl_id`) VALUES
(1, '0101001', '2020-01-01 00:00:00', '2020-02-01 00:00:00', 1, 10, 0, 'n', 1, 1, 1, 1, 1, 1),
(2, '123456', '2020-05-30 00:00:00', '2020-09-30 00:00:00', 1, 13, 0, 'y', 1, 3, 1, 6, 1, 3),
(3, '123456', '2020-10-30 00:00:00', '2020-12-30 00:00:00', 2, 13, 0, 'y', 1, 3, 2, 5, 1, 3),
(4, '123456', '2020-05-30 00:00:00', '2020-09-30 00:00:00', 1, 13, 0, 'y', 1, 3, 1, 4, 1, 2),
(5, '123456', '2020-10-30 00:00:00', '2020-12-30 00:00:00', 2, 13, 0, 'y', 1, 3, 2, 3, 1, 2),
(6, '123456', '2020-05-30 00:00:00', '2020-09-30 00:00:00', 1, 13, 0, 'y', 1, 3, 1, 2, 1, 1),
(7, '123456', '2020-10-30 00:00:00', '2020-12-30 00:00:00', 2, 13, 0, 'y', 1, 3, 2, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `register_status`
--

CREATE TABLE `register_status` (
  `rgs_id` int(6) NOT NULL COMMENT 'หมายเลขสถานะการลงทะเบียน เช่น  1 ,2 ,3',
  `rgs_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อสถานะการลงทะเบียน เช่น เต็มแล้ว , ยังสมัครได้ ',
  `rgs_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานสถานะการลงทะเบียนเช่น y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `register_status`
--

INSERT INTO `register_status` (`rgs_id`, `rgs_name`, `rgs_use`) VALUES
(1, 'เปิดรับสมัคร', 'y'),
(2, 'ปิดรับสมัคร', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `student_tab`
--

CREATE TABLE `student_tab` (
  `stt_id` int(6) NOT NULL COMMENT 'หมายเลขข้อมูลส่วนของนักเรียน	',
  `stt_pro_id` int(6) DEFAULT NULL COMMENT 'หมายเลขแฟ้มเก็บประวัติ เช่น 1 ,2 ,3	',
  `stt_app_id` int(6) DEFAULT NULL COMMENT 'หมายเลขใบสมัคร  เช่น   1 ,2 ,3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student_tab`
--

INSERT INTO `student_tab` (`stt_id`, `stt_pro_id`, `stt_app_id`) VALUES
(1, 1, 3),
(2, 4, 4),
(4, 13, 11),
(5, 14, 12),
(6, 15, 13),
(7, 16, 14),
(8, 17, 15),
(9, 18, 16);

-- --------------------------------------------------------

--
-- Table structure for table `terms`
--

CREATE TABLE `terms` (
  `tem_id` int(6) NOT NULL COMMENT 'หมายเลขเทอมการศึกษา เช่น   1 ,2 ,3 	',
  `tem_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อเทอมการศึกษา เช่น กลางภาคเรียน , ปลายภาคเรียน , ฤดูร้อน',
  `tem_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานเทอมการศึกษา เช่น   y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `terms`
--

INSERT INTO `terms` (`tem_id`, `tem_name`, `tem_use`) VALUES
(1, 'กลางภาคเรียน', 'y'),
(2, 'ปลายภาคเรียน', 'y'),
(3, '*', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usr_id` int(11) NOT NULL COMMENT 'หมายเลขผู้ใช้งาน เช่น  1 ,2 ,3',
  `usr_name` varchar(255) NOT NULL COMMENT 'ชื่อผู้ใช้งาน เช่น lnwza007',
  `usr_pass` varchar(255) NOT NULL COMMENT 'รหัสผ่าน เช่น gre01243$%68',
  `usr_sta_id` int(6) NOT NULL COMMENT 'หมายเลขสถานะผู้ใช้งาน เช่น 1 ,2 ,3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`usr_id`, `usr_name`, `usr_pass`, `usr_sta_id`) VALUES
(1, '60160025', '12345', 1),
(2, '60160026', '5555', 2),
(5, '60160123', 'lordofdark666', 1),
(6, '60160768', 'kamekame555', 1),
(8, 'ไทย', 'ไทยนะ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users_status`
--

CREATE TABLE `users_status` (
  `uss_id` int(6) NOT NULL COMMENT 'หมายเลขสถานะผู้ใช้งาน เช่น  1 ,2 ,3',
  `uss_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อสถานะผู้ใช้งาน เช่น ผู้ใช้งานทั่วไป',
  `uss_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานสถานะผู้ใช้งาน เช่น y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_status`
--

INSERT INTO `users_status` (`uss_id`, `uss_name`, `uss_use`) VALUES
(1, 'สมาชิก', 'y'),
(2, 'ผู้ดูแลระบบ', 'y'),
(3, 'เจ้าหน้าที่ดูแลระดับอนุบาล', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `years`
--

CREATE TABLE `years` (
  `yrs_id` int(6) NOT NULL COMMENT 'หมายเลขปีการศึกษา เช่น  1 ,2 ,3',
  `yrs_name` varchar(255) DEFAULT NULL COMMENT 'ชื่อปีการศึกษา เช่น 2561 ,2562',
  `yrs_use` char(1) DEFAULT 'y' COMMENT 'การใช้งานปีการศึกษา เช่น   y ,n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `years`
--

INSERT INTO `years` (`yrs_id`, `yrs_name`, `yrs_use`) VALUES
(1, '2560', 'y'),
(2, '2561', 'y'),
(3, '2562', 'y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`adr_id`);

--
-- Indexes for table `address_tab`
--
ALTER TABLE `address_tab`
  ADD PRIMARY KEY (`adt_id`),
  ADD KEY `adt_type_id` (`adt_type_id`),
  ADD KEY `adt_adr_id` (`adt_adr_id`),
  ADD KEY `adt_app_id` (`adt_app_id`);

--
-- Indexes for table `address_type`
--
ALTER TABLE `address_type`
  ADD PRIMARY KEY (`art_id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `app_sta_id` (`app_sta_id`),
  ADD KEY `app_reg_id` (`app_reg_id`),
  ADD KEY `app_pro_id` (`app_pro_id`),
  ADD KEY `app_usr_id` (`app_usr_id`);

--
-- Indexes for table `applications_status`
--
ALTER TABLE `applications_status`
  ADD PRIMARY KEY (`aps_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`cls_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`crs_id`);

--
-- Indexes for table `education_levels`
--
ALTER TABLE `education_levels`
  ADD PRIMARY KEY (`edl_id`);

--
-- Indexes for table `parent_sta_tab`
--
ALTER TABLE `parent_sta_tab`
  ADD PRIMARY KEY (`pst_id`),
  ADD KEY `pst_type_id` (`pst_type_id`),
  ADD KEY `pst_app_id` (`pst_app_id`);

--
-- Indexes for table `parent_sta_type`
--
ALTER TABLE `parent_sta_type`
  ADD PRIMARY KEY (`ptt_id`);

--
-- Indexes for table `parent_tab`
--
ALTER TABLE `parent_tab`
  ADD PRIMARY KEY (`pat_id`),
  ADD KEY `pat_type_id` (`pat_type_id`),
  ADD KEY `pat_pro_id` (`pat_pro_id`),
  ADD KEY `pat_app_id` (`pat_app_id`);

--
-- Indexes for table `parent_type`
--
ALTER TABLE `parent_type`
  ADD PRIMARY KEY (`prt_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`reg_id`),
  ADD KEY `reg_sta_id` (`reg_sta_id`),
  ADD KEY `reg_crs_id` (`reg_crs_id`),
  ADD KEY `reg_edl_id` (`reg_edl_id`),
  ADD KEY `reg_tem_id` (`reg_tem_id`),
  ADD KEY `reg_cls_id` (`reg_cls_id`),
  ADD KEY `reg_yrs_id` (`reg_yrs_id`);

--
-- Indexes for table `register_status`
--
ALTER TABLE `register_status`
  ADD PRIMARY KEY (`rgs_id`);

--
-- Indexes for table `student_tab`
--
ALTER TABLE `student_tab`
  ADD PRIMARY KEY (`stt_id`),
  ADD KEY `stt_pro_id` (`stt_pro_id`),
  ADD KEY `stt_app_id` (`stt_app_id`);

--
-- Indexes for table `terms`
--
ALTER TABLE `terms`
  ADD PRIMARY KEY (`tem_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usr_id`),
  ADD KEY `usr_sta_id` (`usr_sta_id`);

--
-- Indexes for table `users_status`
--
ALTER TABLE `users_status`
  ADD PRIMARY KEY (`uss_id`);

--
-- Indexes for table `years`
--
ALTER TABLE `years`
  ADD PRIMARY KEY (`yrs_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `adr_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขแฟ้มเก็บที่อยู่ เช่น 1 ,2 ,3', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `address_tab`
--
ALTER TABLE `address_tab`
  MODIFY `adt_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขข้อมูลส่วนของที่อยู่', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `address_type`
--
ALTER TABLE `address_type`
  MODIFY `art_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขประเภทที่อยู่', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `app_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขใบสมัคร  เช่น   1 ,2 ,3', AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `applications_status`
--
ALTER TABLE `applications_status`
  MODIFY `aps_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขสถานะใบสมัคร เช่น  1 ,2 ,3	', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `cls_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขห้องเรียน เช่น   1 ,2 ,3', AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `crs_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขหลักสูตร เช่น   1 ,2 ,3', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `education_levels`
--
ALTER TABLE `education_levels`
  MODIFY `edl_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขระดับการศึกษา เช่น  1 ,2 ,3	', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `parent_sta_tab`
--
ALTER TABLE `parent_sta_tab`
  MODIFY `pst_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขข้อมูลส่วนของสถานะผู้ปกครอง', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `parent_sta_type`
--
ALTER TABLE `parent_sta_type`
  MODIFY `ptt_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขประเภทสถานะผูปกครอง', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `parent_tab`
--
ALTER TABLE `parent_tab`
  MODIFY `pat_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขข้อมูลส่วนของผู้ปกครอง', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `parent_type`
--
ALTER TABLE `parent_type`
  MODIFY `prt_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขประเภทผู้ปกครอง', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขแฟ้มเก็บประวัติ เช่น 1 ,2 ,3', AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `reg_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขการลงทะเบียน เช่น  1 ,2 ,3	', AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `register_status`
--
ALTER TABLE `register_status`
  MODIFY `rgs_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขสถานะการลงทะเบียน เช่น  1 ,2 ,3', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student_tab`
--
ALTER TABLE `student_tab`
  MODIFY `stt_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขข้อมูลส่วนของนักเรียน	', AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `terms`
--
ALTER TABLE `terms`
  MODIFY `tem_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขเทอมการศึกษา เช่น   1 ,2 ,3 	', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `usr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขผู้ใช้งาน เช่น  1 ,2 ,3', AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users_status`
--
ALTER TABLE `users_status`
  MODIFY `uss_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขสถานะผู้ใช้งาน เช่น  1 ,2 ,3', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `years`
--
ALTER TABLE `years`
  MODIFY `yrs_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'หมายเลขปีการศึกษา เช่น  1 ,2 ,3', AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address_tab`
--
ALTER TABLE `address_tab`
  ADD CONSTRAINT `address_tab_ibfk_1` FOREIGN KEY (`adt_type_id`) REFERENCES `address_type` (`art_id`),
  ADD CONSTRAINT `address_tab_ibfk_2` FOREIGN KEY (`adt_adr_id`) REFERENCES `address` (`adr_id`),
  ADD CONSTRAINT `address_tab_ibfk_3` FOREIGN KEY (`adt_app_id`) REFERENCES `applications` (`app_id`);

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`app_sta_id`) REFERENCES `applications_status` (`aps_id`),
  ADD CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`app_reg_id`) REFERENCES `register` (`reg_id`),
  ADD CONSTRAINT `applications_ibfk_3` FOREIGN KEY (`app_pro_id`) REFERENCES `profiles` (`pro_id`),
  ADD CONSTRAINT `applications_ibfk_4` FOREIGN KEY (`app_usr_id`) REFERENCES `users` (`usr_id`);

--
-- Constraints for table `parent_sta_tab`
--
ALTER TABLE `parent_sta_tab`
  ADD CONSTRAINT `parent_sta_tab_ibfk_1` FOREIGN KEY (`pst_type_id`) REFERENCES `parent_sta_type` (`ptt_id`),
  ADD CONSTRAINT `parent_sta_tab_ibfk_2` FOREIGN KEY (`pst_app_id`) REFERENCES `applications` (`app_id`);

--
-- Constraints for table `parent_tab`
--
ALTER TABLE `parent_tab`
  ADD CONSTRAINT `parent_tab_ibfk_1` FOREIGN KEY (`pat_type_id`) REFERENCES `parent_type` (`prt_id`),
  ADD CONSTRAINT `parent_tab_ibfk_2` FOREIGN KEY (`pat_pro_id`) REFERENCES `profiles` (`pro_id`),
  ADD CONSTRAINT `parent_tab_ibfk_3` FOREIGN KEY (`pat_app_id`) REFERENCES `applications` (`app_id`);

--
-- Constraints for table `register`
--
ALTER TABLE `register`
  ADD CONSTRAINT `register_ibfk_1` FOREIGN KEY (`reg_sta_id`) REFERENCES `register_status` (`rgs_id`),
  ADD CONSTRAINT `register_ibfk_2` FOREIGN KEY (`reg_crs_id`) REFERENCES `courses` (`crs_id`),
  ADD CONSTRAINT `register_ibfk_3` FOREIGN KEY (`reg_edl_id`) REFERENCES `education_levels` (`edl_id`),
  ADD CONSTRAINT `register_ibfk_4` FOREIGN KEY (`reg_tem_id`) REFERENCES `terms` (`tem_id`),
  ADD CONSTRAINT `register_ibfk_5` FOREIGN KEY (`reg_cls_id`) REFERENCES `classes` (`cls_id`),
  ADD CONSTRAINT `register_ibfk_6` FOREIGN KEY (`reg_yrs_id`) REFERENCES `years` (`yrs_id`);

--
-- Constraints for table `student_tab`
--
ALTER TABLE `student_tab`
  ADD CONSTRAINT `student_tab_ibfk_1` FOREIGN KEY (`stt_pro_id`) REFERENCES `profiles` (`pro_id`),
  ADD CONSTRAINT `student_tab_ibfk_2` FOREIGN KEY (`stt_app_id`) REFERENCES `applications` (`app_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`usr_sta_id`) REFERENCES `users_status` (`uss_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

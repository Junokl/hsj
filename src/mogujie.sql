/*
Navicat MySQL Data Transfer

Source Server         : hsj
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mogujie

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-27 19:01:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `admin` varchar(255) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `Sname` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `curprice` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('laoxie', '003', '网红XX号XX衣服XX27', '../images/L27.jpg', '400', '35.9', '11');
INSERT INTO `car` VALUES ('laoxie', '001', '网红XX号XX衣服XX28', '../images/L28.jpg', '401', '36.9', '2');
INSERT INTO `car` VALUES ('aa', '80', '网红XX号XX衣服XX80', '../images/L80.jpg', '411', '88.9', '1');
INSERT INTO `car` VALUES ('aa', '17', '网红XX号XX衣服XX17', '../images/L17.jpg', '99', '24.9', '1');
INSERT INTO `car` VALUES ('aa', '99', '网红XX号XX衣服XX99', '../images/L99.jpg', '430', '107.9', '1');
INSERT INTO `car` VALUES ('lemon', '10', '网红XX号XX衣服XX10', '../images/L10.jpg', '66', '18.9', '1');
INSERT INTO `car` VALUES ('lemon', '71', '网红XX号XX衣服XX71', '../images/L71.jpg', '1024', '79.9', '1');
INSERT INTO `car` VALUES ('laoxie', '96', '网红XX号XX衣服XX96', '../images/L96.jpg', '427', '104.9', '9');
INSERT INTO `car` VALUES ('laoxie', '009', '网红XX号XX衣服XX29', '../images/L29.jpg', '402', '37.9', '1');
INSERT INTO `car` VALUES ('aa', '19', '网红XX号XX衣服XX19', '../images/L19.jpg', '194', '27.9', '1');
INSERT INTO `car` VALUES ('hsj', '45', '网红XX号XX衣服XX45', '../images/L45.jpg', '998', '53.9', '1');
INSERT INTO `car` VALUES ('aa', '1', '网红XX号XX衣服XX1', '../images/L1.jpg', '118', '9.9', '2');
INSERT INTO `car` VALUES ('aa', '1', '网红XX号XX衣服XX1', '../images/L1.jpg', '118', '9.9', '1');
INSERT INTO `car` VALUES ('aa', '7', '网红XX号XX衣服XX7', '../images/L7.jpg', '718', '15.9', '1');
INSERT INTO `car` VALUES ('hsj', '53', '网红XX号XX衣服XX53', '../images/L53.jpg', '1006', '61.9', '3');
INSERT INTO `car` VALUES ('hsj', '52', '网红XX号XX衣服XX52', '../images/L52.jpg', '1005', '60.9', '2');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('001', 'images/nvzhuang1', '三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '56');
INSERT INTO `goods` VALUES ('002', 'images/nvzhuang2', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '77');
INSERT INTO `goods` VALUES ('003', 'images/nvzhuang3', '三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女2', '108');
INSERT INTO `goods` VALUES ('004', 'images/nvzhuang4', '三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '99');
INSERT INTO `goods` VALUES ('005', 'images/nvzhuang1.1', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '66');
INSERT INTO `goods` VALUES ('006', 'images/nvzhuang1.2', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '98');
INSERT INTO `goods` VALUES ('007', 'images/nvzhuang1.3', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '130');
INSERT INTO `goods` VALUES ('008', 'images/nvzhuang1.4', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('009', 'images/nvbao1-1', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('010', 'images/nvbao1-2', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('011', 'images/nvbao1-3', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('012', 'images/nvbao1-4', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('013', 'images/nvbao1-5', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('014', 'images/nvbao1-6', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('015', 'images/nvbao2-1', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('016', 'images/nvbao2-2', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('017', 'images/nvbao2-3', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('018', 'images/nvbao2-4', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('019', 'images/nvbao2-5', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');
INSERT INTO `goods` VALUES ('020', 'images/nvbao2-6', '2三件套秋冬新款韩版复古针织衫毛衣马甲女行业+高腰打底衫+高腰气质显瘦阔腿裤慵懒风时尚套装女', '9.9');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(22) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `lprice` varchar(255) NOT NULL,
  `shouc` varchar(255) NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('45', '../images/L45.jpg', '网红XX号XX衣服XX45', '998', '53.9', '18524', '2018-10-26 13:55:46');
INSERT INTO `list` VALUES ('46', '../images/L46.jpg', '网红XX号XX衣服XX46', '999', '54.9', '185', '2018-10-26 13:55:48');
INSERT INTO `list` VALUES ('47', '../images/L47.jpg', '网红XX号XX衣服XX47', '1000', '55.9', '14', '2018-10-26 13:55:51');
INSERT INTO `list` VALUES ('48', '../images/L48.jpg', '网红XX号XX衣服XX48', '1001', '56.9', '185544', '2018-10-26 13:55:54');
INSERT INTO `list` VALUES ('49', '../images/L49.jpg', '网红XX号XX衣服XX49', '1002', '57.9', '1447', '2018-10-26 13:55:59');
INSERT INTO `list` VALUES ('50', '../images/L50.jpg', '网红XX号XX衣服XX50', '1003', '58.9', '161', '2018-10-26 13:56:04');
INSERT INTO `list` VALUES ('51', '../images/L51.jpg', '网红XX号XX衣服XX51', '1004', '59.9', '2515', '2018-10-26 13:56:09');
INSERT INTO `list` VALUES ('52', '../images/L52.jpg', '网红XX号XX衣服XX52', '1005', '60.9', '3333', '2018-10-26 13:56:11');
INSERT INTO `list` VALUES ('53', '../images/L53.jpg', '网红XX号XX衣服XX53', '1006', '61.9', '1121', '2018-10-26 13:56:18');
INSERT INTO `list` VALUES ('54', '../images/L54.jpg', '网红XX号XX衣服XX54', '1007', '62.9', '1644', '2018-10-26 13:56:22');
INSERT INTO `list` VALUES ('55', '../images/L55.jpg', '网红XX号XX衣服XX55', '1008', '63.9', '1862', '1997-10-22 00:00:00');
INSERT INTO `list` VALUES ('56', '../images/L56.jpg', '网红XX号XX衣服XX56', '1009', '64.9', '1863', '1997-10-23 00:00:00');
INSERT INTO `list` VALUES ('57', '../images/L57.jpg', '网红XX号XX衣服XX57', '1010', '65.9', '1864', '1997-10-24 00:00:00');
INSERT INTO `list` VALUES ('58', '../images/L58.jpg', '网红XX号XX衣服XX58', '1011', '66.9', '1865', '1997-10-25 00:00:00');
INSERT INTO `list` VALUES ('59', '../images/L59.jpg', '网红XX号XX衣服XX59', '1012', '67.9', '123', '2018-10-26 13:56:35');
INSERT INTO `list` VALUES ('60', '../images/L60.jpg', '网红XX号XX衣服XX60', '1013', '68.9', '321', '2018-10-26 13:56:39');
INSERT INTO `list` VALUES ('61', '../images/L61.jpg', '网红XX号XX衣服XX61', '1014', '69.9', '6', '2018-10-26 13:56:42');
INSERT INTO `list` VALUES ('62', '../images/L62.jpg', '网红XX号XX衣服XX62', '1015', '70.9', '1869', '1997-10-29 00:00:00');
INSERT INTO `list` VALUES ('63', '../images/L63.jpg', '网红XX号XX衣服XX63', '1016', '71.9', '13', '2018-10-26 13:56:45');
INSERT INTO `list` VALUES ('64', '../images/L64.jpg', '网红XX号XX衣服XX64', '1017', '72.9', '1871', '1997-10-31 00:00:00');
INSERT INTO `list` VALUES ('65', '../images/L65.jpg', '网红XX号XX衣服XX65', '1018', '73.9', '25', '2018-10-26 13:56:48');
INSERT INTO `list` VALUES ('66', '../images/L66.jpg', '网红XX号XX衣服XX66', '1019', '74.9', '1873', '1997-11-02 00:00:00');
INSERT INTO `list` VALUES ('67', '../images/L67.jpg', '网红XX号XX衣服XX67', '1020', '75.9', '1874', '1997-11-03 00:00:00');
INSERT INTO `list` VALUES ('68', '../images/L68.jpg', '网红XX号XX衣服XX68', '1021', '76.9', '222', '2018-10-26 13:56:53');
INSERT INTO `list` VALUES ('69', '../images/L69.jpg', '网红XX号XX衣服XX69', '1022', '77.9', '666', '2018-10-26 13:56:55');
INSERT INTO `list` VALUES ('70', '../images/L70.jpg', '网红XX号XX衣服XX70', '1023', '78.9', '1877', '1997-11-06 00:00:00');
INSERT INTO `list` VALUES ('71', '../images/L71.jpg', '网红XX号XX衣服XX71', '1024', '79.9', '1878', '1997-11-07 00:00:00');
INSERT INTO `list` VALUES ('72', '../images/L72.jpg', '网红XX号XX衣服XX72', '1025', '80.9', '1879', '1997-11-08 00:00:00');
INSERT INTO `list` VALUES ('73', '../images/L73.jpg', '网红XX号XX衣服XX73', '1026', '81.9', '1234', '2018-10-26 13:57:01');
INSERT INTO `list` VALUES ('74', '../images/L74.jpg', '网红XX号XX衣服XX74', '1027', '82.9', '1881', '1997-11-10 00:00:00');
INSERT INTO `list` VALUES ('75', '../images/L75.jpg', '网红XX号XX衣服XX75', '1028', '83.9', '555', '2018-10-26 13:57:06');
INSERT INTO `list` VALUES ('76', '../images/L76.jpg', '网红XX号XX衣服XX76', '1029', '84.9', '1883', '1997-11-12 00:00:00');
INSERT INTO `list` VALUES ('39', '../images/L39.jpg', '网红XX号XX衣服XX39', '412', '47.9', '1846', '1997-10-06 00:00:00');
INSERT INTO `list` VALUES ('40', '../images/L40.jpg', '网红XX号XX衣服XX40', '413', '48.9', '432', '2018-10-26 13:57:14');
INSERT INTO `list` VALUES ('41', '../images/L41.jpg', '网红XX号XX衣服XX41', '414', '49.9', '1848', '1997-10-08 00:00:00');
INSERT INTO `list` VALUES ('42', '../images/L42.jpg', '网红XX号XX衣服XX42', '415', '50.9', '654', '2018-10-26 13:57:22');
INSERT INTO `list` VALUES ('43', '../images/L43.jpg', '网红XX号XX衣服XX43', '416', '51.9', '1850', '1997-10-10 00:00:00');
INSERT INTO `list` VALUES ('44', '../images/L44.jpg', '网红XX号XX衣服XX44', '417', '52.9', '934', '2018-10-26 13:57:30');
INSERT INTO `list` VALUES ('30', '../images/L30.jpg', '网红XX号XX衣服XX30', '403', '38.9', '1837', '1997-09-27 00:00:00');
INSERT INTO `list` VALUES ('31', '../images/L31.jpg', '网红XX号XX衣服XX31', '404', '39.9', '123', '2018-10-26 13:57:33');
INSERT INTO `list` VALUES ('32', '../images/L32.jpg', '网红XX号XX衣服XX32', '405', '40.9', '1839', '1997-09-29 00:00:00');
INSERT INTO `list` VALUES ('33', '../images/L33.jpg', '网红XX号XX衣服XX33', '406', '41.9', '1840', '1997-09-30 00:00:00');
INSERT INTO `list` VALUES ('34', '../images/L34.jpg', '网红XX号XX衣服XX34', '407', '42.9', '543', '2018-10-26 13:57:38');
INSERT INTO `list` VALUES ('35', '../images/L35.jpg', '网红XX号XX衣服XX35', '408', '43.9', '1842', '1997-10-02 00:00:00');
INSERT INTO `list` VALUES ('36', '../images/L36.jpg', '网红XX号XX衣服XX36', '409', '44.9', '1843', '1997-10-03 00:00:00');
INSERT INTO `list` VALUES ('37', '../images/L37.jpg', '网红XX号XX衣服XX37', '410', '45.9', '325', '2018-10-26 13:57:42');
INSERT INTO `list` VALUES ('38', '../images/L38.jpg', '网红XX号XX衣服XX38', '411', '46.9', '1845', '1997-10-05 00:00:00');
INSERT INTO `list` VALUES ('77', '../images/L77.jpg', '网红XX号XX衣服XX77', '408', '85.9', '1884', '1997-11-13 00:00:00');
INSERT INTO `list` VALUES ('78', '../images/L78.jpg', '网红XX号XX衣服XX78', '409', '86.9', '125', '2018-10-26 13:57:47');
INSERT INTO `list` VALUES ('79', '../images/L79.jpg', '网红XX号XX衣服XX79', '410', '87.9', '1886', '1997-11-15 00:00:00');
INSERT INTO `list` VALUES ('80', '../images/L80.jpg', '网红XX号XX衣服XX80', '411', '88.9', '563', '2018-10-26 13:57:50');
INSERT INTO `list` VALUES ('81', '../images/L81.jpg', '网红XX号XX衣服XX81', '412', '89.9', '1888', '1997-11-17 00:00:00');
INSERT INTO `list` VALUES ('82', '../images/L82.jpg', '网红XX号XX衣服XX82', '413', '90.9', '1889', '1997-11-18 00:00:00');
INSERT INTO `list` VALUES ('83', '../images/L83.jpg', '网红XX号XX衣服XX83', '414', '91.9', '71212', '2018-10-26 13:57:56');
INSERT INTO `list` VALUES ('84', '../images/L84.jpg', '网红XX号XX衣服XX84', '415', '92.9', '1891', '1997-11-20 00:00:00');
INSERT INTO `list` VALUES ('85', '../images/L85.jpg', '网红XX号XX衣服XX85', '416', '93.9', '325', '2018-10-26 13:57:58');
INSERT INTO `list` VALUES ('86', '../images/L86.jpg', '网红XX号XX衣服XX86', '417', '94.9', '1893', '1997-11-22 00:00:00');
INSERT INTO `list` VALUES ('87', '../images/L87.jpg', '网红XX号XX衣服XX87', '418', '95.9', '1894', '1997-11-23 00:00:00');
INSERT INTO `list` VALUES ('88', '../images/L88.jpg', '网红XX号XX衣服XX88', '419', '96.9', '521', '2018-10-26 13:58:05');
INSERT INTO `list` VALUES ('89', '../images/L89.jpg', '网红XX号XX衣服XX89', '420', '97.9', '2131', '2018-10-26 13:58:01');
INSERT INTO `list` VALUES ('90', '../images/L90.jpg', '网红XX号XX衣服XX90', '421', '98.9', '1897', '1997-11-26 00:00:00');
INSERT INTO `list` VALUES ('91', '../images/L91.jpg', '网红XX号XX衣服XX91', '422', '99.9', '1898', '1997-11-27 00:00:00');
INSERT INTO `list` VALUES ('92', '../images/L92.jpg', '网红XX号XX衣服XX92', '423', '100.9', '216', '2018-10-26 13:58:08');
INSERT INTO `list` VALUES ('93', '../images/L93.jpg', '网红XX号XX衣服XX93', '424', '101.9', '1900', '1997-11-29 00:00:00');
INSERT INTO `list` VALUES ('94', '../images/L94.jpg', '网红XX号XX衣服XX94', '425', '102.9', '1901', '1997-11-30 00:00:00');
INSERT INTO `list` VALUES ('95', '../images/L95.jpg', '网红XX号XX衣服XX95', '426', '103.9', '76', '2018-10-26 13:58:13');
INSERT INTO `list` VALUES ('96', '../images/L96.jpg', '网红XX号XX衣服XX96', '427', '104.9', '1903', '1997-12-02 00:00:00');
INSERT INTO `list` VALUES ('97', '../images/L97.jpg', '网红XX号XX衣服XX97', '428', '105.9', '1904', '1997-12-03 00:00:00');
INSERT INTO `list` VALUES ('98', '../images/L98.jpg', '网红XX号XX衣服XX98', '429', '106.9', '452', '2018-10-26 13:58:17');
INSERT INTO `list` VALUES ('99', '../images/L99.jpg', '网红XX号XX衣服XX99', '430', '107.9', '1906', '1997-12-05 00:00:00');
INSERT INTO `list` VALUES ('100', '../images/L100.jpg', '网红XX号XX衣服XX100', '431', '108.9', '1907', '1997-12-06 00:00:00');
INSERT INTO `list` VALUES ('20', '../images/L20.jpg', '网红XX号XX衣服XX20', '195', '28.9', '1827', '1997-09-17 00:00:00');
INSERT INTO `list` VALUES ('21', '../images/L21.jpg', '网红XX号XX衣服XX21', '196', '29.9', '1828', '1997-09-18 00:00:00');
INSERT INTO `list` VALUES ('22', '../images/L22.jpg', '网红XX号XX衣服XX22', '197', '30.9', '24', '2018-10-26 13:58:31');
INSERT INTO `list` VALUES ('23', '../images/L23.jpg', '网红XX号XX衣服XX23', '198', '31.9', '1830', '1997-09-20 00:00:00');
INSERT INTO `list` VALUES ('24', '../images/L24.jpg', '网红XX号XX衣服XX24', '199', '32.9', '2213', '2018-10-26 13:58:26');
INSERT INTO `list` VALUES ('25', '../images/L25.jpg', '网红XX号XX衣服XX25', '200', '33.9', '32', '2018-10-26 13:58:37');
INSERT INTO `list` VALUES ('26', '../images/L26.jpg', '网红XX号XX衣服XX26', '399', '34.9', '1833', '1997-09-23 00:00:00');
INSERT INTO `list` VALUES ('27', '../images/L27.jpg', '网红XX号XX衣服XX27', '400', '35.9', '834', '2018-10-26 13:58:39');
INSERT INTO `list` VALUES ('28', '../images/L28.jpg', '网红XX号XX衣服XX28', '401', '36.9', '1835', '1997-09-25 00:00:00');
INSERT INTO `list` VALUES ('29', '../images/L29.jpg', '网红XX号XX衣服XX29', '402', '37.9', '36', '2018-10-26 13:58:42');
INSERT INTO `list` VALUES ('19', '../images/L19.jpg', '网红XX号XX衣服XX19', '194', '27.9', '1808', '2018-10-26 13:58:50');
INSERT INTO `list` VALUES ('1', '../images/L1.jpg', '网红XX号XX衣服XX1', '118', '9.9', '1808', '2018-10-19 14:58:24');
INSERT INTO `list` VALUES ('2', '../images/L2.jpg', '网红XX号XX衣服XX2', '218', '10.9', '180', '2018-10-26 13:58:53');
INSERT INTO `list` VALUES ('3', '../images/L3.jpg', '网红XX号XX衣服XX3', '318', '11.9', '810', '2018-10-26 13:58:55');
INSERT INTO `list` VALUES ('4', '../images/L4.jpg', '网红XX号XX衣服XX4', '418', '12.9', '1811', '2018-10-23 15:00:13');
INSERT INTO `list` VALUES ('5', '../images/L5.jpg', '网红XX号XX衣服XX5', '518', '13.9', '1812', '2018-10-23 15:00:32');
INSERT INTO `list` VALUES ('6', '../images/L6.jpg', '网红XX号XX衣服XX6', '618', '14.9', '211', '2018-10-26 13:59:04');
INSERT INTO `list` VALUES ('7', '../images/L7.jpg', '网红XX号XX衣服XX7', '718', '15.9', '1814', '2018-10-23 15:01:24');
INSERT INTO `list` VALUES ('8', '../images/L8.jpg', '网红XX号XX衣服XX8', '1', '16.9', '626', '2018-10-26 13:59:00');
INSERT INTO `list` VALUES ('9', '../images/L9.jpg', '网红XX号XX衣服XX9', '2', '17.9', '1816', '2018-10-23 15:02:04');
INSERT INTO `list` VALUES ('10', '../images/L10.jpg', '网红XX号XX衣服XX10', '66', '18.9', '1817', '2018-10-23 15:02:29');
INSERT INTO `list` VALUES ('11', '../images/L11.jpg', '网红XX号XX衣服XX11', '44', '19.9', '985', '2018-10-26 13:59:10');
INSERT INTO `list` VALUES ('12', '../images/L12.jpg', '网红XX号XX衣服XX12', '55', '20.9', '1819', '2018-10-23 15:03:03');
INSERT INTO `list` VALUES ('13', '../images/L13.jpg', '网红XX号XX衣服XX13', '150', '21.9', '1820', '2018-10-23 15:04:45');
INSERT INTO `list` VALUES ('14', '../images/L14.jpg', '网红XX号XX衣服XX14', '14', '22.9', '2252', '2018-10-26 13:59:16');
INSERT INTO `list` VALUES ('15', '../images/L15.jpg', '网红XX号XX衣服XX15', '51', '23.9', '1822', '2018-10-23 15:04:30');
INSERT INTO `list` VALUES ('16', '../images/L16.jpg', '网红XX号XX衣服XX16', '56', '24.9', '31', '2018-10-26 13:59:13');
INSERT INTO `list` VALUES ('17', '../images/L17.jpg', '网红XX号XX衣服XX17', '99', '24.9', '1824', '2018-10-23 15:05:34');
INSERT INTO `list` VALUES ('18', '../images/L18.jpg', '网红XX号XX衣服XX18', '188', '25.9', '1825', '2018-10-23 15:05:53');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `urname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('lemon', '666');
INSERT INTO `login` VALUES ('laoxie', '666');
INSERT INTO `login` VALUES ('laoxie1', '123456');
INSERT INTO `login` VALUES ('', '');
INSERT INTO `login` VALUES ('abc', '111');
INSERT INTO `login` VALUES ('aa', '11');
INSERT INTO `login` VALUES ('hsj', '111');
SET FOREIGN_KEY_CHECKS=1;

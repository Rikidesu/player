-- phpMyAdmin SQL Dump
-- version 3.3.8.1
-- http://www.phpmyadmin.net
--
-- 主机: w.rdc.sae.sina.com.cn:3307
-- 生成日期: 2016 年 06 月 18 日 20:30
-- 服务器版本: 5.6.23
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `app_riki`
--

-- --------------------------------------------------------

--
-- 表的结构 `discuss`
--

CREATE TABLE IF NOT EXISTS `discuss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci,
  `email` text COLLATE utf8_unicode_ci,
  `content` text COLLATE utf8_unicode_ci,
  `uid` int(11) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=38 ;

--
-- 转存表中的数据 `discuss`
--

INSERT INTO `discuss` (`id`, `name`, `email`, `content`, `uid`, `datetime`) VALUES
(11, 'Riki', '', '以后有心情再去弄好这个留言板好了， 反正不会有人来。。。以后有心情再去弄好这个留言板好了， 反正不会有人来。。。以后有心情再去弄好这个留言板好了， 反正不会有人来。。。以后有心情再去弄好这个留言板好了， 反正不会有人来。。。以后有心情再去弄好这个留言板好了， 反正不会有人来。。。', NULL, NULL),
(12, '测试', '', '还是好难看啊-0-', NULL, NULL),
(13, '三十', '', '啦啦啦', NULL, NULL),
(14, '第四个', '', '第四个', NULL, NULL),
(15, '第五个', '', '第五个', NULL, NULL),
(16, 'test', 'test', '2014.06.08', NULL, NULL),
(17, 'router', '', 'test', NULL, NULL),
(18, 'Riki', 'l@riki.cc', '2014年10月18日 18:11:40', NULL, NULL),
(19, 'SAE', '', 'TEST', NULL, NULL),
(20, '猫', '', '棒棒的', NULL, NULL),
(21, 'Riki', '', '玩了单机这么多年了= =终于有人来留言了= = ', NULL, NULL),
(22, '豆沙包Riki', '', 'test', 1, NULL),
(27, 'Rikiponzu*', '', 'test', 18, NULL),
(26, 'Otakutachi -宅货捕捉计划', '', 'test', 13, NULL),
(28, 'Rikiponzu*', '', '啦啦啦', 1, NULL),
(29, 'body', '', '....', 21, NULL),
(30, 'Rikiponzu*', '', '各种更新中= =', 1, '2014-11-12 23:55:58'),
(31, 'Riki', '2014年11月13日 23:03:50', '神歌词（改）第一版本诞生= =', NULL, '2014-11-13 23:04:17'),
(32, 'Rikiponzu*', '', '花了1个多小时对着界外科学的PV做了个比较还原的字体颜色的神lrc效果', 1, '2014-11-15 00:34:51'),
(33, 'kagayaki', '1843006191@qq.com', 'chrome不支持好桑心\n', NULL, '2014-12-06 18:24:11'),
(34, 'Rikiponzu*', '', '回复kagayaki：\nchrome可以的呀0 0就是谷歌的内核嘛，是不是版本低了？出现什么问题了0 0', 1, '2014-12-07 11:54:04'),
(35, '年刊少女猫耳くん', 'weinai@live.com', '随便传个刚做的玩玩...', 25, '2015-01-10 12:08:47'),
(36, 'Rikiponzu*', 'QQ：584031082', '回复：年刊少女猫耳くん\n  欢迎~ 可以试试做效果噢，像这首一样，有兴趣加我企鹅吧~ http://music.riki.cc/m79', 1, '2015-01-11 12:37:01'),
(37, 'Rikiponzu*', '2015年11月1日23:05:23', '页面翻新计划开始', 1, '2015-11-01 23:05:22');

-- --------------------------------------------------------

--
-- 表的结构 `dislikes`
--

CREATE TABLE IF NOT EXISTS `dislikes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL COMMENT '用户ID',
  `songid` int(11) NOT NULL COMMENT '歌曲ID',
  `time` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`,`songid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `dislikes`
--


-- --------------------------------------------------------

--
-- 表的结构 `exp_log`
--

CREATE TABLE IF NOT EXISTS `exp_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `action` char(20) NOT NULL,
  `exp` int(11) NOT NULL,
  `time` date NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`,`action`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `exp_log`
--


-- --------------------------------------------------------

--
-- 表的结构 `likes`
--

CREATE TABLE IF NOT EXISTS `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL COMMENT '用户ID',
  `songid` int(11) NOT NULL COMMENT '歌曲ID',
  `time` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`,`songid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- 转存表中的数据 `likes`
--

INSERT INTO `likes` (`id`, `userid`, `songid`, `time`) VALUES
(4, 1, 6, '2015-12-07 19:20:08'),
(14, 1, 22, '2015-12-13 18:05:57'),
(6, 1, 30, '2015-12-07 23:05:26'),
(7, 1, 26, '2015-12-07 23:12:48'),
(25, 1, 23, '2015-12-15 22:13:42'),
(21, 1, 36, '2015-12-15 21:41:13'),
(13, 1, 1, '2015-12-13 18:05:46'),
(15, 1, 7, '2015-12-13 18:06:09'),
(16, 1, 20, '2015-12-13 18:06:19'),
(31, 1, 21, '2015-12-15 22:47:06'),
(18, 1, 2, '2015-12-13 20:24:56'),
(19, 1, 3, '2015-12-13 21:43:18'),
(26, 1, 37, '2015-12-15 22:18:32'),
(22, 1, 16, '2015-12-15 22:04:11'),
(23, 1, 35, '2015-12-15 22:13:12'),
(24, 1, 29, '2015-12-15 22:13:27'),
(27, 1, 15, '2015-12-15 22:41:55'),
(28, 1, 32, '2015-12-15 22:42:00'),
(30, 1, 39, '2015-12-15 22:44:31');

-- --------------------------------------------------------

--
-- 表的结构 `login_log`
--

CREATE TABLE IF NOT EXISTS `login_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `type` char(20) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=45 ;

--
-- 转存表中的数据 `login_log`
--

INSERT INTO `login_log` (`id`, `userid`, `type`, `time`) VALUES
(1, 1, 'normal_login', '2015-12-07 23:02:40'),
(2, 1, 'QQlogin', '2015-12-07 23:03:00'),
(3, 1, 'QQlogin', '2015-12-07 23:04:41'),
(4, 1, 'normal_login', '2015-12-07 23:04:57'),
(5, 1, 'QQlogin', '2015-12-07 23:15:43'),
(6, 1, 'normal_login', '2015-12-08 09:35:33'),
(7, 1, 'QQlogin', '2015-12-08 09:36:28'),
(8, 1, 'QQlogin', '2015-12-08 09:38:12'),
(9, 1, 'QQlogin', '2015-12-08 09:38:26'),
(10, 1, 'normal_login', '2015-12-08 16:36:50'),
(11, 1, 'normal_login', '2015-12-08 17:05:24'),
(12, 1, 'normal_login', '2015-12-08 17:15:16'),
(13, 1, 'normal_login', '2015-12-08 22:39:02'),
(14, 1, 'normal_login', '2015-12-09 14:16:53'),
(15, 1, 'normal_login', '2015-12-09 18:25:57'),
(16, 1, 'QQlogin', '2015-12-09 18:54:38'),
(17, 1, 'normal_login', '2015-12-09 21:22:05'),
(18, 1, 'normal_login', '2015-12-09 23:10:06'),
(19, 31, 'normal_login', '2015-12-11 11:16:47'),
(20, 32, 'QQregister', '2015-12-11 22:54:14'),
(21, 1, 'normal_login', '2015-12-12 00:55:41'),
(22, 1, 'normal_login', '2015-12-13 00:34:31'),
(23, 1, 'normal_login', '2015-12-13 00:45:41'),
(24, 1, 'normal_login', '2015-12-13 16:50:57'),
(25, 1, 'normal_login', '2015-12-13 17:28:21'),
(26, 1, 'normal_login', '2015-12-13 17:42:45'),
(27, 1, 'normal_login', '2015-12-13 23:05:18'),
(28, 1, 'normal_login', '2015-12-13 23:47:44'),
(29, 1, 'normal_login', '2015-12-13 23:48:08'),
(30, 1, 'normal_login', '2015-12-13 23:48:31'),
(31, 1, 'normal_login', '2015-12-15 21:20:00'),
(32, 1, 'normal_login', '2015-12-15 21:42:25'),
(33, 1, 'normal_login', '2015-12-15 22:46:57'),
(34, 1, 'normal_login', '2015-12-15 22:49:22'),
(35, 1, 'normal_login', '2015-12-19 21:16:41'),
(36, 1, 'normal_login', '2015-12-21 18:46:30'),
(37, 1, 'QQlogin', '2015-12-22 22:15:37'),
(38, 1, 'normal_login', '2016-01-02 13:24:39'),
(39, 1, 'normal_login', '2016-01-10 18:51:08'),
(40, 1, 'normal_login', '2016-02-27 22:04:33'),
(41, 1, 'normal_login', '2016-05-14 19:15:22'),
(42, 1, 'normal_login', '2016-05-14 21:28:35'),
(43, 1, 'normal_login', '2016-06-12 22:16:46'),
(44, 1, 'normal_login', '2016-06-12 22:18:42');

-- --------------------------------------------------------

--
-- 表的结构 `music_list`
--

CREATE TABLE IF NOT EXISTS `music_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `yueurl` text COLLATE utf8_unicode_ci,
  `bdurl` text COLLATE utf8_unicode_ci,
  `name` text CHARACTER SET utf8,
  `cname` text COLLATE utf8_unicode_ci,
  `singer` text COLLATE utf8_unicode_ci,
  `datetime` datetime DEFAULT NULL,
  `display` int(11) NOT NULL DEFAULT '1',
  `tag` text COLLATE utf8_unicode_ci NOT NULL,
  `owner` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=94 ;

--
-- 转存表中的数据 `music_list`
--

INSERT INTO `music_list` (`id`, `yueurl`, `bdurl`, `name`, `cname`, `singer`, `datetime`, `display`, `tag`, `owner`) VALUES
(1, 'http://up.yuedisk.com/wl/url/Rikidesu/147683/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413547009178695372.mp3', '有顶天ビバーチェ', '兴高采烈', '鹿乃', NULL, 1, '', 1),
(2, 'http://up.yuedisk.com/wl/url/Rikidesu/170907/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135471341585255028.mp3', '深海のリトルクライ', '深海のリトルクライ', '96猫', NULL, 1, '', 1),
(3, 'http://up.yuedisk.com/wl/url/Rikidesu/139399/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413547291883899076.mp3', 'うたうたいのうた', 'うたうたいのうた', '鹿乃', NULL, 1, '', 1),
(4, 'http://up.yuedisk.com/wl/url/Rikidesu/139398/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413547405924950969.mp3', 'メリーメリー', 'Merry Merry', '鹿乃', NULL, 1, '', 1),
(5, 'http://up.yuedisk.com/wl/url/Rikidesu/184730/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135479701284456021.mp3', '東京レトロ', '东京复古', '鹿乃', NULL, 1, '', 1),
(8, 'http://up.yuedisk.com/wl/url/Rikidesu/185336/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413547999682172059.mp3', 'チルノの動く城', '琪露诺的移动城堡', '森羅万象', '2014-04-30 19:24:39', 0, '', 1),
(9, 'http://up.yuedisk.com/wl/url/Rikidesu/185365/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413548033256356070.mp3', 'Rainbow Girl', '对不起,因为我是生活在二次元的女孩', '【蓮】', '2014-04-30 19:35:05', 1, '', 1),
(10, 'http://up.yuedisk.com/wl/url/Rikidesu/185397/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135482461704740874.mp3', '月花', '月花', 'nano.RIPE', '2014-04-30 20:22:06', 0, '', 1),
(14, 'http://up.yuedisk.com/wl/url/Rikidesu/185485/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135482882101399673.mp3', '独りんぼエンヴィー', '孑然妒火', '花たん', '2014-04-30 22:56:41', 1, '', 1),
(15, 'http://up.yuedisk.com/wl/url/Rikidesu/186493/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413548351538177634.mp3', '如月アテンション', '如月attention', 'ヤマイ; うさ; ヲタみん; ', '2014-05-02 18:03:14', 1, '', 1),
(16, 'http://up.yuedisk.com/wl/url/Rikidesu/186504/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413548387466763955.mp3', '冬の日', '冬の日', 'K-on', '2014-05-02 18:10:27', 1, '', 1),
(17, 'http://up.yuedisk.com/wl/url/Rikidesu/191269/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135485111593766890.mp3', 'アヤノの幸福理論', '文乃的幸福理論', 'ゆめこ', '2014-05-11 13:07:25', 1, '', 1),
(18, 'http://up.yuedisk.com/wl/url/Rikidesu/191277/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135485511494896888.mp3', '想像フォレスト', '想象Forest', '鹿乃', '2014-05-11 13:17:09', 1, '', 1),
(19, 'http://up.yuedisk.com/wl/url/Rikidesu/192193/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135485991761405392.mp3', '会いたい', '想见你', 'Dios; シグナルP;GUMI; ', '2014-05-12 22:21:51', 1, '', 1),
(20, 'http://up.yuedisk.com/wl/url/Rikidesu/192196/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135486571239521395.mp3', '弱虫モンブラン', '胆小鬼蒙布朗', 'GUMI ', '2014-05-12 22:30:57', 1, '', 1),
(21, 'http://up.yuedisk.com/wl/url/Rikidesu/192204/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135486871676571905.mp3', '夜咄ディセイブ', '夜咄DECEIVE', 'MARiA; ', '2014-05-12 22:38:05', 1, '', 1),
(22, 'http://up.yuedisk.com/wl/url/Rikidesu/193187/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413548737239368664.mp3', 'ハロ/ハワユ', 'hello how are you', '鹿乃', '2014-05-14 16:04:06', 1, '', 1),
(23, 'http://up.yuedisk.com/wl/url/Rikidesu/193196/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135487951798165199.mp3', 'サクラノ前夜', '樱花绽放的前夜', '鹿乃', '2014-05-14 16:08:01', 1, '', 1),
(24, 'http://up.yuedisk.com/wl/url/Rikidesu/194729/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413548841319604750.mp3', 'いーあるふぁんくらぶ', '12粉丝俱乐部', '茅野愛衣;潘めぐみ', '2014-05-16 20:41:23', 1, '', 1),
(25, 'http://up.yuedisk.com/wl/url/Rikidesu/194730/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135488981050240628.mp3', 'daze', 'daze', 'じん;MARiA', '2014-05-16 20:43:29', 1, '', 1),
(26, 'http://up.yuedisk.com/wl/url/Rikidesu/194733/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/141354893231546492.mp3', '深海少女', '深海少女', 'ちゃむ', '2014-05-16 20:46:41', 1, '', 1),
(27, 'http://up.yuedisk.com/wl/url/Rikidesu/196349/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135489651965952645.mp3', 'スキキライ', '喜欢?讨厌?', 'リモーネ先生; コゲ犬; ', '2014-05-18 13:54:03', 1, '', 1),
(28, 'http://up.yuedisk.com/wl/url/Rikidesu/197278/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135490101982033348.mp3', 'オレンジ', 'orange', '赤ティン', '2014-05-19 12:37:52', 1, '', 1),
(29, 'http://up.yuedisk.com/wl/url/Rikidesu/197281/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135490442074000114.mp3', 'サイノウサンプラー', '才能取样器', 'ゆう十', '2014-05-19 12:39:23', 1, '', 1),
(30, 'http://up.yuedisk.com/wl/url/Rikidesu/223870/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135490761549460407.mp3', '君の好きな本', '你喜欢的书', 'ゆいこんぬ', '2014-06-22 14:49:26', 1, '', 1),
(32, 'http://up.yuedisk.com/wl/url/Rikidesu/223909/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135491111960657042.mp3', 'CLAP HIP CHERRY', 'CLAP HIP CHERRY', '花たん', '2014-06-22 15:20:57', 1, '', 1),
(33, 'http://up.yuedisk.com/wl/url/Rikidesu/274519/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1413549143285376224.mp3', 'クノイチでも恋がしたい', '忍者也要谈恋爱', 'あやぽんず*', '2014-10-14 06:14:01', 1, 'あやぽんず*;萌', 1),
(37, 'http://up.yuedisk.com/wl/url/Rikidesu/263606/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135491741536103156.mp3', 'ウミユリ海底譚', '海百合海底谭', 'あやぽんず*', '2014-10-14 06:27:12', 1, 'あやぽんず*;萌', 1),
(38, 'http://up.yuedisk.com/wl/url/Rikidesu/277476/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135492041668829037.mp3', '君じゃなきゃダメみたい', '非你不可', '大石昌良', '2014-10-17 01:28:09', 1, '', 1),
(45, 'http://up.yuedisk.com/wl/url/Rikidesu/277797/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/141363441867200967.mp3\r\n', '夕景イエスタデイ', '夕景yesterday', 'LiSA', NULL, 1, '阳炎;', 1),
(46, 'http://up.yuedisk.com/wl/url/Rikidesu/277804/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14137066051035885299.mp3', '空想フォレスト', '空想森林', '伊東歌詞太郎', '2014-10-19 03:19:07', 1, '阳炎', 1),
(43, 'http://up.yuedisk.com/wl/url/Rikidesu/277487/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14135521021286187970.mp3', 'おじゃま虫', '麻烦鬼', '初音ミク; ', '2014-10-17 08:23:25', 1, '', 1),
(47, 'http://up.yuedisk.com/wl/url/Rikidesu/278719/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14140607711860912092.mp3', '上弦の月', '上弦之月', 'nero; ', '2014-10-23 05:43:52', 1, '', 1),
(48, 'http://up.yuedisk.com/wl/url/Rikidesu/278734/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14140638662063853978.mp3', '涙の物語', '涙の物語', '有里知花; ', '2014-10-23 06:31:55', 1, '', 1),
(49, 'http://up.yuedisk.com/wl/url/Rikidesu/278736/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1414063972842369970.mp3', 'Alice', 'Alice', '古川本舗; ASK; ', '2014-10-23 06:33:24', 1, '', 1),
(50, 'http://up.yuedisk.com/wl/url/Rikidesu/278740/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1414064052454370505.mp3', '天使にふれたよ!', '相遇天使', 'K-on', '2014-10-23 06:35:22', 1, '', 1),
(51, 'http://up.yuedisk.com/wl/url/Rikidesu/278742/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14140641591143224067.mp3', 'ドレミファロンド', '123圆舞曲', '桃箱; ', '2014-10-23 06:36:44', 1, '', 1),
(52, 'http://up.yuedisk.com/wl/url/Rikidesu/278743/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1414064261879854460.mp3', ' Just Be Friends', 'Just Be Friends', 'Clear; ', '2014-10-23 06:38:36', 1, '', 1),
(53, 'http://up.yuedisk.com/wl/url/Rikidesu/278744/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1414064355203392402.mp3', 'ピエロ', '小丑', '鹿乃', '2014-10-23 06:39:57', 1, '', 1),
(54, 'http://up.yuedisk.com/wl/url/Rikidesu/278745/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1414064425860130291.mp3', '人生リセットボタン', '人生重置按钮', 'あやぽんず*; ', '2014-10-23 06:41:13', 1, '', 1),
(55, 'http://up.yuedisk.com/wl/url/Rikidesu/279215/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14142097991299918146.mp3', '小夜子', '小夜子', '伊東歌詞太郎', '2014-10-24 23:03:54', 1, '', 1),
(56, 'http://up.yuedisk.com/wl/url/Rikidesu/279566/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1414303689462946830.mp3', 'letter song', 'letter song', 'ヲタみん', '2014-10-26 01:08:50', 1, '', 1),
(57, 'http://up.yuedisk.com/wl/url/Rikidesu/282303/yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1415083646770188409.mp3', 'アイロニ', 'irony', '鹿乃', '2014-11-04 14:50:03', 1, '鹿乃;萌', 1),
(62, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1415366660749454015.mp3', 'ロストワンの号哭', 'ロストワンの号哭', '押入れP&镜音双子', '2014-11-07 21:24:38', 1, 'music', 6),
(63, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14153684971045499236.mp3', '锦鲤抄', '锦鲤抄', '云临', '2014-11-07 21:55:20', 1, '', 6),
(64, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1415371900130497447.mp3', '世界寿命と最後の一日', '世界寿命と最後の一日', '松下', '2014-11-07 22:51:58', 1, '', 1),
(65, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1415602256602013295.mp3', 'カゲロウデイズ', '阳炎DAYS', '96猫', '2014-11-10 14:51:12', 1, '', 1),
(66, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/1415704611472146551.mp3', '誰でもいいから付き合いたい', '谁都可以啊快来和我交往吧！', 'あやぽんず*', '2014-11-11 19:16:57', 1, '', 1),
(67, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14157052051768469723.mp3', 'ネコミミアーカイブ', '猫耳备档', 'あやぽんず', '2014-11-11 19:27:05', 1, '', 1),
(68, 'http://up.yuedisk.com/wl/url/Rikidesu//yuedisk.mp3', 'http://bcs.duapp.com/rikidesu/mp3/14157121882105138598.mp3', '六兆年と一夜物語', '六兆年零一夜物语', 'あやぽんず*', '2014-11-11 21:23:26', 1, '', 1),
(69, NULL, 'http://bcs.duapp.com/rikidesu/mp3/141571354070901729.mp3', 'ヒャダインのじょーじょーゆーじょー', '日常OP2', '前山田健一', '2014-11-11 21:46:15', 1, '', 1),
(70, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14157155941708306887.mp3', 'オツキミリサイタル', '赏月独奏', 'あやぽんず*', '2014-11-11 22:20:25', 1, '', 1),
(71, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14157186471453286746.mp3', '有頂天ビバーチェ', '兴高采烈', 'あやぽんず*', '2014-11-11 23:11:15', 1, '', 1),
(72, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14157587801939770042.mp3', '月陽-ツキアカリ', '月陽-ツキアカリ', '赤ティン', '2014-11-12 10:23:51', 1, '', 20),
(73, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14158087441627200917.mp3', '「daze」', '「daze」', 'あやぽんず*', '2014-11-13 00:12:36', 1, '', 1),
(74, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14158088191730241731.mp3', '如月アテンション', '如月attention', 'あやぽんず*', '2014-11-13 00:14:09', 1, '', 1),
(75, NULL, 'http://bcs.duapp.com/rikidesu/mp3/1415809106260884680.mp3', 'チルドレンレコード', 'children record', 'あやぽんず*', '2014-11-13 00:18:41', 1, '', 1),
(76, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14158097601883241825.mp3', '夕景イエスタデイ', '夕景yesterday', 'IA', '2014-11-13 00:29:44', 1, '', 1),
(77, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14159661012050036866.mp3', 'サムライハート(Some Like It Hot!!)', '武士之魂', 'SPYAIR', '2014-11-14 19:55:18', 1, '', 1),
(78, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14159744271143164902.mp3', 'アウターサイエンス', '界外科学', 'IA', '2014-11-14 22:14:39', 1, '阳炎;神lrc', 1),
(79, NULL, 'http://bcs.duapp.com/rikidesu/mp3/1416042911297753050.mp3', 'チルドレンレコード', 'children recode', 'じん; MARiA; ', '2014-11-15 17:15:22', 1, '', 1),
(80, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14171757911745857947.mp3', '告白予行練習', '告白予行練習', '戸松遥', '2014-11-28 19:56:55', 1, '', 1),
(81, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14171758632048827510.mp3', '初恋の絵本', '初恋の絵本', '豊崎愛生', '2014-11-28 19:58:11', 1, '', 1),
(82, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14171759681967106784.mp3', 'This Merry-Go-Round Song', '银仙ED', '末光篤', '2014-11-28 19:59:48', 1, '', 1),
(83, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14198493191866823932.mp3', '自傷無色', '自傷無色', 'KK', '2014-12-29 18:35:38', 1, '', 1),
(84, NULL, 'http://bcs.duapp.com/rikidesu/mp3/141985169272500471.mp3', '恋愛フィロソフィア', '恋爱哲学', 'nero', '2014-12-29 19:15:12', 1, '', 1),
(85, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14198524901624253430.mp3', '好き！雪！本気マジマジック', '好き！雪！本気マジマジック', 'Mitchie M; 初音ミク', '2014-12-29 19:28:29', 1, '', 1),
(86, NULL, 'http://bcs.duapp.com/rikidesu/mp3/1420259394920723132.mp3', '少女自傷癖', '少女自傷癖', '鹿乃', '2015-01-03 12:30:09', 1, '', 1),
(87, NULL, 'http://bcs.duapp.com/rikidesu/mp3/142025945370096753.mp3', '二次元ドリームフィーバー', '二次元ドリームフィーバー', '花たん', '2015-01-03 12:31:11', 1, '', 1),
(88, NULL, 'http://bcs.duapp.com/rikidesu/mp3/1420259503668849148.mp3', 'ウミユリ海底譚', 'ウミユリ海底譚', '足首', '2015-01-03 12:32:05', 1, '', 1),
(89, NULL, 'http://bcs.duapp.com/rikidesu/mp3/1420378654944731462.mp3', 'ねこみみスイッチ', '猫耳开关', '花たん', '2015-01-04 21:37:58', 1, '', 1),
(90, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14203787861138038595.mp3', 'ヒビカセ', '令其响彻', 'れをる', '2015-01-04 21:42:31', 1, '', 1),
(91, NULL, 'http://bcs.duapp.com/rikidesu/mp3/14208621371826068156.mp3', 'REALl STYLE', 'REALl STYLE', 'DJ Deckstream', '2015-01-10 11:55:49', 1, '', 25),
(92, NULL, '', 'からくりピエロ', '活动小丑', 'シャノ', '2015-04-11 16:45:03', 1, '', 1),
(93, NULL, '', '被害妄想携帯女子 (笑)', '被害妄想携帯女子 (笑)', '柊優花', '2015-04-11 16:48:45', 1, '', 1);

-- --------------------------------------------------------

--
-- 表的结构 `playlist`
--

CREATE TABLE IF NOT EXISTS `playlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `description` text NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `playlist`
--


-- --------------------------------------------------------

--
-- 表的结构 `playlist_row`
--

CREATE TABLE IF NOT EXISTS `playlist_row` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playlistid` int(11) NOT NULL,
  `songid` int(11) NOT NULL,
  `description` text NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `playlistid` (`playlistid`,`songid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `playlist_row`
--


-- --------------------------------------------------------

--
-- 表的结构 `play_log`
--

CREATE TABLE IF NOT EXISTS `play_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `songid` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `starttime` datetime NOT NULL,
  `endtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `songid` (`songid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `play_log`
--


-- --------------------------------------------------------

--
-- 表的结构 `songs`
--

CREATE TABLE IF NOT EXISTS `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text COLLATE utf8_unicode_ci NOT NULL COMMENT '歌曲标题',
  `subtitle` text COLLATE utf8_unicode_ci COMMENT '副标题',
  `singer` text COLLATE utf8_unicode_ci NOT NULL COMMENT '歌手名',
  `singerid` text COLLATE utf8_unicode_ci COMMENT '歌手ID，因为可能存在多个歌手，所以用TEXT，用英文逗号（临时）分隔',
  `album` text COLLATE utf8_unicode_ci COMMENT '专辑名',
  `albumid` int(11) DEFAULT NULL COMMENT '专辑ID',
  `upuser` int(11) NOT NULL COMMENT '创建此歌曲条目的用户ID',
  `time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `upuser` (`upuser`,`time`),
  KEY `albumid` (`albumid`),
  FULLTEXT KEY `title` (`title`),
  FULLTEXT KEY `subtitle` (`subtitle`),
  FULLTEXT KEY `singer` (`singer`),
  FULLTEXT KEY `singerid` (`singerid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=47 ;

--
-- 转存表中的数据 `songs`
--

INSERT INTO `songs` (`id`, `title`, `subtitle`, `singer`, `singerid`, `album`, `albumid`, `upuser`, `time`) VALUES
(1, 'ぼくらのレットイットビー', NULL, 'clear', '', 'Reunite', 0, 1, '2015-11-04 21:29:13'),
(2, '夜明けと蛍', '黎明与萤光', '赤ティン', '', 're:stArT', 0, 1, '2015-11-04 21:30:21'),
(3, 'オオカミ少年独白', NULL, 'sasakure.UK', '', '幻実アイソーポス', 0, 1, '2015-11-04 21:31:22'),
(4, 'clock lock works', NULL, 'かっちゃん', '', 'HIDAMARI', 0, 1, '2015-11-04 21:31:59'),
(5, '葬花', '過去の花　～ Fairy of Flower', 'DDBY', '', '癒しの風 vol.2 蓮台野夜行 ～ Ghostly Field Club', 0, 1, '2015-11-04 21:32:45'),
(6, 'ありがとう、だいすき', 'TV动画《长门有希酱的消失》片尾曲 / TVアニメ『長門有希ちゃんの消失』エンディング主題歌', '茅原実里', '', 'ありがとう、だいすき', 0, 1, '2015-11-04 21:33:43'),
(7, '恋愛裁判', NULL, 'いかさん', '', 'EXIT TUNES PRESENTS START', 0, 1, '2015-11-21 19:17:27'),
(15, '好き！雪！本気マジマジック', NULL, '初音ミク', NULL, NULL, NULL, 1, '2015-12-01 23:08:58'),
(16, 'アヤノの幸福理論', NULL, 'ゆめこ', NULL, NULL, NULL, 1, '2015-12-01 23:20:51'),
(17, 'はなごのみ', NULL, '阿澄佳奈', NULL, NULL, NULL, 1, '2015-12-01 23:39:17'),
(18, 'おじゃま虫', NULL, '初音ミク', NULL, NULL, NULL, 1, '2015-12-01 23:40:02'),
(19, 'からくりピエロ', NULL, 'あるふぁきゅん', NULL, NULL, NULL, 1, '2015-12-01 23:41:11'),
(20, 'glow', NULL, 'コニー', NULL, NULL, NULL, 1, '2015-12-01 23:45:58'),
(21, 'ヒビカゼ', NULL, '初音ミク', NULL, NULL, NULL, 1, '2015-12-01 23:47:07'),
(22, 'ウミユリ海底譚', NULL, 'あう', NULL, NULL, NULL, 1, '2015-12-01 23:48:32'),
(23, 'クノイチでも恋がしたい', NULL, '鎖那; *菜乃; ', NULL, NULL, NULL, 1, '2015-12-01 23:49:50'),
(27, '君じゃなきゃダメみたい', NULL, '大石昌良', NULL, NULL, NULL, 1, '2015-12-02 23:02:59'),
(25, '妄想税', NULL, 'あるふぁきゅん。', NULL, NULL, NULL, 1, '2015-12-02 21:41:39'),
(26, '時を刻む唄', NULL, 'Lia', NULL, NULL, NULL, 1, '2015-12-02 21:46:48'),
(28, 'ヒーローが来ない', NULL, '鹿乃', NULL, NULL, NULL, 1, '2015-12-02 23:12:49'),
(29, 'ギガンティックO.T.N', NULL, 'まふまふ', NULL, NULL, NULL, 1, '2015-12-02 23:14:10'),
(30, 'Echo', NULL, 'れをる', NULL, NULL, NULL, 1, '2015-12-02 23:16:46'),
(31, 'ウサギトエゴ', NULL, 'ウサギトネコ', NULL, NULL, NULL, 1, '2015-12-02 23:17:50'),
(32, 'ロクベル', NULL, '花たん', NULL, NULL, NULL, 1, '2015-12-03 18:18:33'),
(39, 'Happy Halloween', NULL, '柊優花', NULL, NULL, NULL, 1, '2015-12-15 21:31:54'),
(40, '空想フォレスト', NULL, 'ヨシダタクミ', NULL, NULL, NULL, 1, '2015-12-15 21:36:57'),
(35, 'オレンジ', NULL, 'まふまふ', NULL, NULL, NULL, 1, '2015-12-03 22:22:50'),
(36, 'Daisy', NULL, 'STEREO DIVE FOUNDATION', NULL, NULL, NULL, 1, '2015-12-03 22:24:23'),
(37, '被害妄想携帯女子(笑)', NULL, 'luz', NULL, NULL, NULL, 1, '2015-12-03 22:31:31'),
(38, 'ウミユリ海底譚', NULL, '足首', NULL, NULL, NULL, 19, '2015-12-06 23:25:36'),
(41, '告白予行練習', NULL, '鎖那', NULL, NULL, NULL, 1, '2015-12-15 21:38:07'),
(42, 'あの頃～ジンジンバオヂュオニー～', NULL, 'whiteeeen', NULL, NULL, NULL, 1, '2016-01-02 13:27:01'),
(43, 'メランコリック', NULL, '山根万理奈', NULL, NULL, NULL, 1, '2016-01-02 13:27:47'),
(44, 'わんわんお、にゃんにゃんお', NULL, '山根万理奈', NULL, NULL, NULL, 1, '2016-01-02 13:29:14'),
(45, '結露', NULL, '片平里菜', NULL, NULL, NULL, 1, '2016-06-12 22:26:53'),
(46, 'Happy Halloween', NULL, '歌ってみた', NULL, NULL, NULL, 1, '2016-06-12 22:28:00');

-- --------------------------------------------------------

--
-- 表的结构 `songs_src`
--

CREATE TABLE IF NOT EXISTS `songs_src` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` char(12) NOT NULL COMMENT '资源的类型（music,lrc,cover,background）',
  `songid` int(11) NOT NULL COMMENT '对应歌曲的ID',
  `albumid` int(11) DEFAULT NULL COMMENT '专辑的ID',
  `title` text NOT NULL COMMENT '对应歌曲的标题（歌名）',
  `filename` text NOT NULL COMMENT '文件名',
  `href` text NOT NULL COMMENT '资源的链接',
  `source` text NOT NULL COMMENT '这个资源的来源地',
  `upuser` int(11) NOT NULL COMMENT '添加此资源的用户ID',
  `time` datetime NOT NULL COMMENT '添加此资源的时间',
  `size` int(11) DEFAULT NULL COMMENT '大小bytes',
  PRIMARY KEY (`id`),
  KEY `songid` (`songid`),
  KEY `upuser` (`upuser`),
  KEY `albumid` (`albumid`),
  FULLTEXT KEY `filename` (`filename`),
  FULLTEXT KEY `title` (`title`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=151 ;

--
-- 转存表中的数据 `songs_src`
--

INSERT INTO `songs_src` (`id`, `type`, `songid`, `albumid`, `title`, `filename`, `href`, `source`, `upuser`, `time`, `size`) VALUES
(1, 'music', 1, 0, '', '', 'http://7xkut8.media1.z0.glb.clouddn.com/02.ぼくらのレットイットビー-clear.mp3', '七牛', 1, '2015-11-04 21:36:33', NULL),
(2, 'music', 2, 0, '', '', 'http://7xkut8.media1.z0.glb.clouddn.com/music_04.夜明けと蛍-赤ティン.mp3', '七牛', 1, '2015-11-04 21:37:15', NULL),
(3, 'music', 3, 0, '', '', 'http://7xkut8.media1.z0.glb.clouddn.com/05.オオカミ少年独白-sasakure.UK.mp3', '七牛', 1, '2015-11-04 21:37:35', NULL),
(4, 'music', 4, 0, '', '', 'http://7xkut8.media1.z0.glb.clouddn.com/06.clock%20lock%20works-かっちゃん.mp3', '七牛', 1, '2015-11-04 21:38:03', NULL),
(5, 'music', 5, 0, '', '', 'http://7xkut8.media1.z0.glb.clouddn.com/07.葬花-DDBY.mp3', '七牛', 1, '2015-11-04 21:38:23', NULL),
(6, 'music', 6, 0, '', '', 'http://7xkut8.media1.z0.glb.clouddn.com/08.ありがとう、だいすき-茅原実里.mp3', '七牛', 1, '2015-11-04 21:38:44', NULL),
(7, 'lrc', 5, 0, '葬花', 'lrc_07.葬花-DDBY', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_07.葬花-DDBY.lrc', '七牛', 1, '2015-11-07 21:08:04', NULL),
(8, 'lrc', 4, 0, 'clock lock works', 'lrc_06.clock%20lock%20works-かっちゃん', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_06.clock%20lock%20works-かっちゃん.lrc', '七牛', 1, '2015-11-07 21:09:38', NULL),
(9, 'lrc', 2, 0, '夜明けと蛍', 'lrc_04.夜明けと蛍-赤ティン', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_04.夜明けと蛍-赤ティン.lrc', '七牛', 1, '2015-11-07 21:10:20', NULL),
(10, 'lrc', 3, 0, 'オオカミ少年独白', 'lrc_05.オオカミ少年独白-sasakure.UK', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_05.オオカミ少年独白-sasakure.UK.lrc', '七牛', 1, '2015-11-07 21:11:07', NULL),
(11, 'lrc', 1, 0, 'ぼくらのレットイットビー', 'lrc_02.ぼくらのレットイットビー-clear', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_02.ぼくらのレットイットビー-clear.lrc', '七牛', 1, '2015-11-07 21:11:59', NULL),
(12, 'lrc', 6, 0, 'ありがとう、だいすき', 'lrc_08.ありがとう、だいすき-茅原実里', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_08.ありがとう、だいすき-茅原実里.lrc', '七牛', 1, '2015-11-08 12:17:54', NULL),
(13, 'music', 7, 0, '恋愛裁判', 'music_01 - 恋愛裁判.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_01%20-%20恋愛裁判.mp3', '七牛', 1, '2015-11-21 19:20:37', NULL),
(14, 'lrc', 7, 0, '恋愛裁判', 'lrc_01 - 恋愛裁判.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_01%20-%20恋愛裁判.lrc', '七牛', 1, '2015-11-21 19:21:49', NULL),
(15, 'background', 7, 0, '恋愛裁判', 'BG_nenaisaiban.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_nenaisaiban.jpg', '七牛', 1, '2015-11-21 19:35:23', NULL),
(37, 'music', 16, NULL, 'アヤノの幸福理論', 'music_5361047bytes【ゆめこ】文乃的幸福理論.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_5361047bytes%E3%80%90%E3%82%86%E3%82%81%E3%81%93%E3%80%91%E6%96%87%E4%B9%83%E7%9A%84%E5%B9%B8%E7%A6%8F%E7%90%86%E8%AB%96.mp3', '七牛', 1, '2015-12-01 23:20:51', 5361047),
(33, 'music', 15, NULL, '好き！雪！本気マジマジック', 'music_8236774bytes01 - 好き！雪！本気マジマジック.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_8236774bytes01%20-%20%E5%A5%BD%E3%81%8D%EF%BC%81%E9%9B%AA%EF%BC%81%E6%9C%AC%E6%B0%97%E3%83%9E%E3%82%B8%E3%83%9E%E3%82%B8%E3%83%83%E3%82%AF.mp3', '七牛', 1, '2015-12-01 23:08:58', 8236774),
(34, 'cover', 15, NULL, '好き！雪！本気マジマジック', 'cover_401629bytesyukisuki.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_401629bytesyukisuki.jpg', '七牛', 1, '2015-12-01 23:08:58', 401629),
(35, 'lrc', 15, NULL, '好き！雪！本気マジマジック', 'lrc_2524bytes01 - 好き！雪！本気マジマジック.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_2524bytes01%20-%20%E5%A5%BD%E3%81%8D%EF%BC%81%E9%9B%AA%EF%BC%81%E6%9C%AC%E6%B0%97%E3%83%9E%E3%82%B8%E3%83%9E%E3%82%B8%E3%83%83%E3%82%AF.lrc', '七牛', 1, '2015-12-01 23:08:58', 2524),
(36, 'background', 15, NULL, '好き！雪！本気マジマジック', 'BG_2231334bytesyande 338068 hatsune_miku lapidary_heart_(maomao) vocaloid yuki_miku.png', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_2231334bytesyande%20338068%20hatsune_miku%20lapidary_heart_(maomao)%20vocaloid%20yuki_miku.png', '七牛', 1, '2015-12-01 23:08:58', 2231334),
(38, 'lrc', 16, NULL, 'アヤノの幸福理論', 'lrc_3483bytes【ゆめこ】文乃的幸福理論.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3483bytes%E3%80%90%E3%82%86%E3%82%81%E3%81%93%E3%80%91%E6%96%87%E4%B9%83%E7%9A%84%E5%B9%B8%E7%A6%8F%E7%90%86%E8%AB%96.lrc', '七牛', 1, '2015-12-01 23:20:52', 3483),
(39, 'background', 16, NULL, 'アヤノの幸福理論', 'BG_1038323byteskonachan 142656 black_hair blush close crying kagerou_project saionji scarf tateyama_ayano tears.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_1038323byteskonachan%20142656%20black_hair%20blush%20close%20crying%20kagerou_project%20saionji%20scarf%20tateyama_ayano%20tears.jpg', '七牛', 1, '2015-12-01 23:20:52', 1038323),
(40, 'music', 17, NULL, 'はなごのみ', 'music_9974756bytes02 - はなごのみ(1).mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9974756bytes02%20-%20%E3%81%AF%E3%81%AA%E3%81%94%E3%81%AE%E3%81%BF(1).mp3', '七牛', 1, '2015-12-01 23:39:17', 9974756),
(41, 'cover', 17, NULL, 'はなごのみ', 'cover_270311byteshanagonomi.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_270311byteshanagonomi.jpg', '七牛', 1, '2015-12-01 23:39:17', 270311),
(42, 'lrc', 17, NULL, 'はなごのみ', 'lrc_1671bytes02 - はなごのみ(1).lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_1671bytes02%20-%20%E3%81%AF%E3%81%AA%E3%81%94%E3%81%AE%E3%81%BF(1).lrc', '七牛', 1, '2015-12-01 23:39:17', 1671),
(43, 'music', 18, NULL, 'おじゃま虫', 'music_8672257bytes02 - おじゃま虫.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_8672257bytes02%20-%20%E3%81%8A%E3%81%98%E3%82%83%E3%81%BE%E8%99%AB.mp3', '七牛', 1, '2015-12-01 23:40:02', 8672257),
(44, 'lrc', 18, NULL, 'おじゃま虫', 'lrc_4193bytes02 - おじゃま虫.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_4193bytes02%20-%20%E3%81%8A%E3%81%98%E3%82%83%E3%81%BE%E8%99%AB.lrc', '七牛', 1, '2015-12-01 23:40:02', 4193),
(45, 'music', 19, NULL, 'からくりピエロ', 'music_11500131bytes01.からくりピエロ-あるふぁきゅん。.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_11500131bytes01.%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E3%83%94%E3%82%A8%E3%83%AD-%E3%81%82%E3%82%8B%E3%81%B5%E3%81%81%E3%81%8D%E3%82%85%E3%82%93%E3%80%82.mp3', '七牛', 1, '2015-12-01 23:41:11', 11500131),
(46, 'lrc', 19, NULL, 'からくりピエロ', 'lrc_3285bytes01.からくりピエロ-あるふぁきゅん。.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3285bytes01.%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E3%83%94%E3%82%A8%E3%83%AD-%E3%81%82%E3%82%8B%E3%81%B5%E3%81%81%E3%81%8D%E3%82%85%E3%82%93%E3%80%82.lrc', '七牛', 1, '2015-12-01 23:41:11', 3285),
(47, 'music', 20, NULL, 'glow', 'music_11224400bytes02 - glow.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_11224400bytes02%20-%20glow.mp3', '七牛', 1, '2015-12-01 23:45:58', 11224400),
(48, 'cover', 20, NULL, 'glow', 'cover_201218bytesglow.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_201218bytesglow.jpg', '七牛', 1, '2015-12-01 23:45:58', 201218),
(49, 'lrc', 20, NULL, 'glow', 'lrc_3190bytes02 - glow.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3190bytes02%20-%20glow.lrc', '七牛', 1, '2015-12-01 23:45:58', 3190),
(50, 'music', 21, NULL, 'ヒビカゼ', 'music_10105595bytes02 - ヒビカゼ.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10105595bytes02%20-%20%E3%83%92%E3%83%93%E3%82%AB%E3%82%BC.mp3', '七牛', 1, '2015-12-01 23:47:07', 10105595),
(51, 'cover', 21, NULL, 'ヒビカゼ', 'cover_223876byteshibikaze.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_223876byteshibikaze.jpg', '七牛', 1, '2015-12-01 23:47:07', 223876),
(52, 'lrc', 21, NULL, 'ヒビカゼ', 'lrc_4302bytes02 - ヒビカゼ.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_4302bytes02%20-%20%E3%83%92%E3%83%93%E3%82%AB%E3%82%BC.lrc', '七牛', 1, '2015-12-01 23:47:07', 4302),
(53, 'music', 22, NULL, 'ウミユリ海底譚', 'music_9618349bytes03 - ウミユリ海底譚.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9618349bytes03%20-%20%E3%82%A6%E3%83%9F%E3%83%A6%E3%83%AA%E6%B5%B7%E5%BA%95%E8%AD%9A.mp3', '七牛', 1, '2015-12-01 23:48:32', 9618349),
(54, 'lrc', 22, NULL, 'ウミユリ海底譚', 'lrc_4156bytes03 - ウミユリ海底譚.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_4156bytes03%20-%20%E3%82%A6%E3%83%9F%E3%83%A6%E3%83%AA%E6%B5%B7%E5%BA%95%E8%AD%9A.lrc', '七牛', 1, '2015-12-01 23:48:32', 4156),
(55, 'music', 23, NULL, 'クノイチでも恋がしたい', 'music_10227263bytes04 - クノイチでも恋がしたい(1).mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10227263bytes04%20-%20%E3%82%AF%E3%83%8E%E3%82%A4%E3%83%81%E3%81%A7%E3%82%82%E6%81%8B%E3%81%8C%E3%81%97%E3%81%9F%E3%81%84(1).mp3', '七牛', 1, '2015-12-01 23:49:50', 10227263),
(56, 'lrc', 23, NULL, 'クノイチでも恋がしたい', 'lrc_6770bytes04 - クノイチでも恋がしたい(1).lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_6770bytes04%20-%20%E3%82%AF%E3%83%8E%E3%82%A4%E3%83%81%E3%81%A7%E3%82%82%E6%81%8B%E3%81%8C%E3%81%97%E3%81%9F%E3%81%84(1).lrc', '七牛', 1, '2015-12-01 23:49:50', 6770),
(57, 'music', 25, NULL, '妄想税', 'music_8716109bytes07 - あるふぁきゅん。 - 妄想税.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_8716109bytes07%20-%20%E3%81%82%E3%82%8B%E3%81%B5%E3%81%81%E3%81%8D%E3%82%85%E3%82%93%E3%80%82%20-%20%E5%A6%84%E6%83%B3%E7%A8%8E.mp3', '七牛', 1, '2015-12-02 21:41:39', 8716109),
(58, 'cover', 25, NULL, '妄想税', 'cover_80913bytes216813105.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_80913bytes216813105.jpg', '七牛', 1, '2015-12-02 21:41:39', 80913),
(59, 'lrc', 25, NULL, '妄想税', 'lrc_3508bytes07 - あるふぁきゅん。 - 妄想税.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3508bytes07%20-%20%E3%81%82%E3%82%8B%E3%81%B5%E3%81%81%E3%81%8D%E3%82%85%E3%82%93%E3%80%82%20-%20%E5%A6%84%E6%83%B3%E7%A8%8E.lrc', '七牛', 1, '2015-12-02 21:41:39', 3508),
(60, 'music', 26, NULL, '時を刻む唄', 'music_11709535bytesLia - 時を刻む唄_TORCH - 01 - 時を刻む唄.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_11709535bytesLia%20-%20%E6%99%82%E3%82%92%E5%88%BB%E3%82%80%E5%94%84_TORCH%20-%2001%20-%20%E6%99%82%E3%82%92%E5%88%BB%E3%82%80%E5%94%84.mp3', '七牛', 1, '2015-12-02 21:46:48', 11709535),
(61, 'lrc', 26, NULL, '時を刻む唄', 'lrc_1947bytesLia - 時を刻む唄_TORCH - 01 - 時を刻む唄.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_1947bytesLia%20-%20%E6%99%82%E3%82%92%E5%88%BB%E3%82%80%E5%94%84_TORCH%20-%2001%20-%20%E6%99%82%E3%82%92%E5%88%BB%E3%82%80%E5%94%84.lrc', '七牛', 1, '2015-12-02 21:46:48', 1947),
(62, 'music', 27, NULL, '君じゃなきゃダメみたい', 'music_9362766bytes01 - 君じゃなきゃダメみたい.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9362766bytes01%20-%20%E5%90%9B%E3%81%98%E3%82%83%E3%81%AA%E3%81%8D%E3%82%83%E3%83%80%E3%83%A1%E3%81%BF%E3%81%9F%E3%81%84.mp3', '七牛', 1, '2015-12-02 23:02:59', 9362766),
(63, 'lrc', 27, NULL, '君じゃなきゃダメみたい', 'lrc_2615bytes01 - 君じゃなきゃダメみたい.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_2615bytes01%20-%20%E5%90%9B%E3%81%98%E3%82%83%E3%81%AA%E3%81%8D%E3%82%83%E3%83%80%E3%83%A1%E3%81%BF%E3%81%9F%E3%81%84.lrc', '七牛', 1, '2015-12-02 23:02:59', 2615),
(64, 'music', 28, NULL, 'ヒーローが来ない', 'music_9680127bytes04 - ヒーローが来ない.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9680127bytes04%20-%20%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%81%8C%E6%9D%A5%E3%81%AA%E3%81%84.mp3', '七牛', 1, '2015-12-02 23:12:49', 9680127),
(65, 'cover', 28, NULL, 'ヒーローが来ない', 'cover_1321441418132144.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_1321441418132144.jpg', '七牛', 1, '2015-12-02 23:12:49', 1),
(66, 'lrc', 28, NULL, 'ヒーローが来ない', 'lrc_3182bytes04 - ヒーローが来ない.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3182bytes04%20-%20%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%81%8C%E6%9D%A5%E3%81%AA%E3%81%84.lrc', '七牛', 1, '2015-12-02 23:12:49', 3182),
(67, 'music', 29, NULL, 'ギガンティックO.T.N', 'music_8676544bytes10 - まふまふ - ギガンティックO.T.N.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_8676544bytes10%20-%20%E3%81%BE%E3%81%B5%E3%81%BE%E3%81%B5%20-%20%E3%82%AE%E3%82%AC%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AFO.T.N.mp3', '七牛', 1, '2015-12-02 23:14:10', 8676544),
(68, 'lrc', 29, NULL, 'ギガンティックO.T.N', 'lrc_5113bytes10 - まふまふ - ギガンティックO.T.N.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_5113bytes10%20-%20%E3%81%BE%E3%81%B5%E3%81%BE%E3%81%B5%20-%20%E3%82%AE%E3%82%AC%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AFO.T.N.lrc', '七牛', 1, '2015-12-02 23:14:10', 5113),
(69, 'music', 30, NULL, 'Echo', 'music_8603031bytes07 - Echo.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_8603031bytes07%20-%20Echo.mp3', '七牛', 1, '2015-12-02 23:16:46', 8603031),
(119, 'background', 30, NULL, 'Echo', 'BG_11229290111986ac78o.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_11229290111986ac78o.jpg', '七牛', 1, '2015-12-13 21:12:36', NULL),
(71, 'music', 31, NULL, 'ウサギトエゴ', 'music_10363854bytes02 - ウサギトネコ - ウサギトエゴ.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10363854bytes02%20-%20%E3%82%A6%E3%82%B5%E3%82%AE%E3%83%88%E3%83%8D%E3%82%B3%20-%20%E3%82%A6%E3%82%B5%E3%82%AE%E3%83%88%E3%82%A8%E3%82%B4.mp3', '七牛', 1, '2015-12-02 23:17:50', 10363854),
(72, 'music', 32, NULL, 'ロクベル', 'music_9148130bytes01 - ロクベル.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9148130bytes01%20-%20%E3%83%AD%E3%82%AF%E3%83%99%E3%83%AB.mp3', '七牛', 1, '2015-12-03 18:18:33', 9148130),
(73, 'lrc', 32, NULL, 'ロクベル', 'lrc_4926bytes01 - ロクベル.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_4926bytes01%20-%20%E3%83%AD%E3%82%AF%E3%83%99%E3%83%AB.lrc', '七牛', 1, '2015-12-03 18:18:33', 4926),
(74, 'music', 33, NULL, 'クノイチでも恋がしたい', 'music_10227263bytes04 - クノイチでも恋がしたい(1).mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10227263bytes04%20-%20%E3%82%AF%E3%83%8E%E3%82%A4%E3%83%81%E3%81%A7%E3%82%82%E6%81%8B%E3%81%8C%E3%81%97%E3%81%9F%E3%81%84(1).mp3', '七牛', 1, '2015-12-03 22:09:09', 10227263),
(75, 'music', 34, NULL, '文乃的幸福理論', 'music_5361047bytes【ゆめこ】文乃的幸福理論.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_5361047bytes%E3%80%90%E3%82%86%E3%82%81%E3%81%93%E3%80%91%E6%96%87%E4%B9%83%E7%9A%84%E5%B9%B8%E7%A6%8F%E7%90%86%E8%AB%96.mp3', '七牛', 1, '2015-12-03 22:14:20', 5361047),
(76, 'music', 35, NULL, 'オレンジ', 'music_9805122bytes06 - オレンジ.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9805122bytes06%20-%20%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8.mp3', '七牛', 1, '2015-12-03 22:22:50', 9805122),
(77, 'lrc', 35, NULL, 'オレンジ', 'lrc_5234bytes06 - オレンジ.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_5234bytes06%20-%20%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8.lrc', '七牛', 1, '2015-12-03 22:22:50', 5234),
(78, 'music', 36, NULL, 'Daisy', 'music_11268320bytes01 - Daisy.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_11268320bytes01%20-%20Daisy.mp3', '七牛', 1, '2015-12-03 22:24:23', 11268320),
(79, 'lrc', 36, NULL, 'Daisy', 'lrc_4051bytes01 - Daisy.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_4051bytes01%20-%20Daisy.lrc', '七牛', 1, '2015-12-03 22:24:23', 4051),
(80, 'music', 37, NULL, '被害妄想携帯女子(笑)', 'music_9225902bytes05 - luz - 被害妄想携帯女子(笑).mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9225902bytes05%20-%20luz%20-%20%E8%A2%AB%E5%AE%B3%E5%A6%84%E6%83%B3%E6%90%BA%E5%B8%AF%E5%A5%B3%E5%AD%90(%E7%AC%91).mp3', '七牛', 1, '2015-12-03 22:31:31', 9225902),
(81, 'lrc', 37, NULL, '被害妄想携帯女子(笑)', 'lrc_3339bytes05 - luz - 被害妄想携帯女子(笑).lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3339bytes05%20-%20luz%20-%20%E8%A2%AB%E5%AE%B3%E5%A6%84%E6%83%B3%E6%90%BA%E5%B8%AF%E5%A5%B3%E5%AD%90(%E7%AC%91).lrc', '七牛', 1, '2015-12-03 22:31:31', 3339),
(82, 'music', 38, NULL, 'ウミユリ海底譚', 'music_9668231bytes04 - ウミユリ海底譚.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9668231bytes04%20-%20%E3%82%A6%E3%83%9F%E3%83%A6%E3%83%AA%E6%B5%B7%E5%BA%95%E8%AD%9A.mp3', '七牛', 19, '2015-12-06 23:25:36', 9668231),
(83, 'lrc', 38, NULL, 'ウミユリ海底譚', 'lrc_4077bytes04 - ウミユリ海底譚.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_4077bytes04%20-%20%E3%82%A6%E3%83%9F%E3%83%A6%E3%83%AA%E6%B5%B7%E5%BA%95%E8%AD%9A.lrc', '七牛', 19, '2015-12-06 23:25:36', 4077),
(84, 'cover', 36, NULL, 'Daisy', 'cover_16835516961385201409.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_16835516961385201409.jpg', '七牛', 1, '2015-12-13 17:18:34', 235000),
(85, 'background', 36, NULL, 'Daisy', 'BG_5727d4506d71579a843ca9b88706db6f.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_5727d4506d71579a843ca9b88706db6f.jpg', '七牛', 1, '2015-12-13 18:34:04', 2000000),
(86, 'cover', 16, NULL, 'アヤノの幸福理論', 'cover_8126604401417780245.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_8126604401417780245.jpg', '七牛', 1, '2015-12-13 18:38:43', 100000),
(87, 'background', 25, NULL, '妄想税', 'BG_6d5a504241ebbe8f502a708eef87d9f1.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_6d5a504241ebbe8f502a708eef87d9f1.jpg', '七牛', 1, '2015-12-13 18:43:02', 64000),
(88, 'cover', 35, NULL, 'オレンジ', 'cover_5659791398565979.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_5659791398565979.jpg', '七牛', 1, '2015-12-13 18:50:27', 74000),
(89, 'cover', 35, NULL, 'オレンジ', 'cover_5659791398565979.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_5659791398565979.jpg', '七牛', 1, '2015-12-13 18:50:27', 74000),
(90, 'cover', 2, NULL, '夜明けと蛍', 'cover_6298554601429855460.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_6298554601429855460.jpg', '七牛', 1, '2015-12-13 19:00:18', 247000),
(91, 'background', 2, NULL, '夜明けと蛍', 'BG_c4ef9f10a2911c7c6581bbd12306f7f2.png', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_c4ef9f10a2911c7c6581bbd12306f7f2.png', '七牛', 1, '2015-12-13 19:02:35', 6000000),
(92, 'cover', 5, NULL, '葬花', 'cover_2756910701375691070.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_2756910701375691070.jpg', '七牛', 1, '2015-12-13 19:04:25', NULL),
(93, 'cover', 27, NULL, '君じゃなきゃダメみたい', 'cover_9251831405925183.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_9251831405925183.jpg', '七牛', 1, '2015-12-13 19:10:31', 182000),
(94, 'background', 27, NULL, '君じゃなきゃダメみたい', 'BG_yande%20291435%20gekkan_shoujo_nozaki-kun%20kashima_yuu%20masayuki_hori%20mikoshiba_mikoto%20nozaki_umetarou%20sakura_chiyo%20seifuku%20seo_yuzuki%20tagme%20thighhighs%20wakamatsu_hirotaka.png', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_yande%20291435%20gekkan_shoujo_nozaki-kun%20kashima_yuu%20masayuki_hori%20mikoshiba_mikoto%20nozaki_umetarou%20sakura_chiyo%20seifuku%20seo_yuzuki%20tagme%20thighhighs%20wakamatsu_hirotaka.png', '七牛', 1, '2015-12-13 19:11:22', 896840),
(95, 'background', 23, NULL, 'クノイチでも恋がしたい', 'BG_a7f3c95c43527a44d42f2978e39f3bc3.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_a7f3c95c43527a44d42f2978e39f3bc3.jpg', '七牛', 1, '2015-12-13 20:06:00', 46000),
(96, 'cover', 23, NULL, 'クノイチでも恋がしたい', 'cover_2850076961385007696.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_2850076961385007696.jpg', '七牛', 1, '2015-12-13 20:06:56', 467000),
(97, 'cover', 18, NULL, 'おじゃま虫', 'cover_7227511392722751.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_7227511392722751.jpg', '七牛', 1, '2015-12-13 20:10:38', 32000),
(98, 'background', 18, NULL, 'おじゃま虫', 'BG_d702446d18678b9d16fdb204385280e4.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_d702446d18678b9d16fdb204385280e4.jpg', '七牛', 1, '2015-12-13 20:11:36', 551000),
(99, 'background', 4, NULL, 'clock lock works', 'BG_194b1c719db88ebfbfbda8c8bcaab74d.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_194b1c719db88ebfbfbda8c8bcaab74d.jpg', '七牛', 1, '2015-12-13 20:14:22', 1),
(100, 'cover', 4, NULL, 'clock lock works', 'cover_5179001338874906.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_5179001338874906.jpg', '七牛', 1, '2015-12-13 20:14:55', 282000),
(101, 'cover', 1, NULL, 'ぼくらのレットイットビー', 'cover_1428681444142868.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_1428681444142868.jpg', '七牛', 1, '2015-12-13 20:29:33', 1),
(102, 'background', 1, NULL, 'ぼくらのレットイットビー', 'BG_91f58db8gd4c3d703d6ac&690.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_91f58db8gd4c3d703d6ac&690.jpg', '七牛', 1, '2015-12-13 20:30:04', 104000),
(103, 'cover', 3, NULL, 'オオカミ少年独白', 'cover_4972801343270830.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_4972801343270830.jpg', '七牛', 1, '2015-12-13 20:33:53', 392000),
(104, 'cover', 6, NULL, 'ありがとう、だいすき', 'cover_20332567891435730424.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_20332567891435730424.jpg', '七牛', 1, '2015-12-13 20:36:58', 76000),
(105, 'background', 6, NULL, 'ありがとう、だいすき', 'BG_2b048e5a61f4a2cb0c005361c8139fe2.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_2b048e5a61f4a2cb0c005361c8139fe2.jpg', '七牛', 1, '2015-12-13 20:37:28', 142000),
(106, 'cover', 7, NULL, '恋愛裁判', 'cover_8336051430833605.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_8336051430833605.jpg', '七牛', 1, '2015-12-13 20:38:56', 176000),
(107, 'background', 17, NULL, 'はなごのみ', 'BG_c6d8f3bf6c81800a65c16a30b53533fa828b476c.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_c6d8f3bf6c81800a65c16a30b53533fa828b476c.jpg', '七牛', 1, '2015-12-13 20:46:44', 37000),
(108, 'cover', 19, NULL, 'からくりピエロ', 'cover_2168131051416813105.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_2168131051416813105.jpg', '七牛', 1, '2015-12-13 20:51:14', 1),
(109, 'background', 19, NULL, 'からくりピエロ', 'BG_4610b912c8fcc3ce41d7b4af9245d688d43f2012.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_4610b912c8fcc3ce41d7b4af9245d688d43f2012.jpg', '七牛', 1, '2015-12-13 20:51:39', 1),
(110, 'background', 20, NULL, 'glow', 'BG_73990633_2.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_73990633_2.jpg', '七牛', 1, '2015-12-13 20:53:08', 1),
(111, 'background', 21, NULL, 'ヒビカゼ', 'BG_6a7d631658b5fee9d8cc62d4ff1c0728.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_6a7d631658b5fee9d8cc62d4ff1c0728.jpg', '七牛', 1, '2015-12-13 20:55:14', 1),
(112, 'background', 22, NULL, 'ウミユリ海底譚', 'BG_u=2087231531,2512434613&fm=15&gp=0.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_u=2087231531,2512434613&fm=15&gp=0.jpg', '七牛', 1, '2015-12-13 20:59:07', 1),
(113, 'background', 38, NULL, 'ウミユリ海底譚', 'BG_u=2087231531,2512434613&fm=15&gp=0.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_u=2087231531,2512434613&fm=15&gp=0.jpg', '七牛', 1, '2015-12-13 20:59:07', NULL),
(114, 'cover', 22, NULL, 'ウミユリ海底譚', 'cover_12975560691404714516.png', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_12975560691404714516.png', '七牛', 1, '2015-12-13 20:59:59', NULL),
(115, 'cover', 26, NULL, '時を刻む唄', 'cover_3098841386660348.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_3098841386660348.jpg', '七牛', 1, '2015-12-13 21:02:45', NULL),
(116, 'background', 26, NULL, '時を刻む唄', 'BG_faf2b2119313b07ee2ef5b450cd7912397dd8c28.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_faf2b2119313b07ee2ef5b450cd7912397dd8c28.jpg', '七牛', 1, '2015-12-13 21:03:17', NULL),
(117, 'cover', 29, NULL, 'ギガンティックO.T.N', 'cover_13867274771386727477.png', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_13867274771386727477.png', '七牛', 1, '2015-12-13 21:09:02', 1),
(118, 'background', 29, NULL, 'ギガンティックO.T.N', 'BG_d000baa1cd11728bba0770e8c8fcc3cec2fd2cd6.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_d000baa1cd11728bba0770e8c8fcc3cec2fd2cd6.jpg', '七牛', 1, '2015-12-13 21:09:37', NULL),
(120, 'cover', 30, NULL, 'Echo', 'cover_1077428731412067598.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_1077428731412067598.jpg', '七牛', 1, '2015-12-13 21:13:05', NULL),
(121, 'cover', 31, NULL, 'ウサギトエゴ', 'cover_8669548301366954830.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_8669548301366954830.jpg', '七牛', 1, '2015-12-13 21:15:19', NULL),
(122, 'cover', 32, NULL, 'ロクベル', 'cover_9570191419957019.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_9570191419957019.jpg', '七牛', 1, '2015-12-13 21:17:48', NULL),
(123, 'background', 32, NULL, 'ロクベル', 'BG_1100302926c797c98ao.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_1100302926c797c98ao.jpg', '七牛', 1, '2015-12-13 21:18:09', NULL),
(124, 'background', 35, NULL, 'オレンジ', 'BG_d25e9eaf2edda3cc584507f901e93901203f922a.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_d25e9eaf2edda3cc584507f901e93901203f922a.jpg', '七牛', 1, '2015-12-13 21:23:55', NULL),
(125, 'background', 37, NULL, '被害妄想携帯女子(笑)', 'BG_a0dda5ed90c1d101e0a6652e548120c8.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_a0dda5ed90c1d101e0a6652e548120c8.jpg', '七牛', 1, '2015-12-13 21:25:29', NULL),
(126, 'cover', 37, NULL, '被害妄想携帯女子(笑)', 'cover_7452231437745223.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_7452231437745223.jpg', '七牛', 1, '2015-12-13 21:25:52', NULL),
(127, 'cover', 38, NULL, 'ウミユリ海底譚', 'cover_7191236491419123649.png', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_7191236491419123649.png', '七牛', 1, '2015-12-13 21:27:40', NULL),
(128, 'music', 39, NULL, 'Happy Halloween', 'music_10068183bytes06 - Happy Halloween.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10068183bytes06%20-%20Happy%20Halloween.mp3', '七牛', 1, '2015-12-15 21:31:54', 10068183),
(129, 'cover', 39, NULL, 'Happy Halloween', 'cover_138202bytes3158500771415850077.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_138202bytes3158500771415850077.jpg', '七牛', 1, '2015-12-15 21:31:54', 138202),
(130, 'lrc', 39, NULL, 'Happy Halloween', 'lrc_06%20-%20Happy%20Halloween.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_06%20-%20Happy%20Halloween.lrc', '七牛', 1, '2015-12-15 21:31:54', 1),
(131, 'background', 39, NULL, 'Happy Halloween', 'BG_2534654bytesQQ图片20151215212704.png', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_2534654bytesQQ%E5%9B%BE%E7%89%8720151215212704.png', '七牛', 1, '2015-12-15 21:31:54', 2534654),
(132, 'music', 40, NULL, '空想フォレスト', 'music_10978879bytes03 - 空想フォレスト.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10978879bytes03%20-%20%E7%A9%BA%E6%83%B3%E3%83%95%E3%82%A9%E3%83%AC%E3%82%B9%E3%83%88.mp3', '七牛', 1, '2015-12-15 21:36:57', 10978879),
(133, 'cover', 40, NULL, '空想フォレスト', 'cover_1247496bytes3171071361417780239.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_1247496bytes3171071361417780239.jpg', '七牛', 1, '2015-12-15 21:36:57', 1247496),
(134, 'lrc', 40, NULL, '空想フォレスト', 'lrc_3878bytes03 - 空想フォレスト.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3878bytes03%20-%20%E7%A9%BA%E6%83%B3%E3%83%95%E3%82%A9%E3%83%AC%E3%82%B9%E3%83%88.lrc', '七牛', 1, '2015-12-15 21:36:57', 3878),
(135, 'background', 40, NULL, '空想フォレスト', 'BG_12456bytesu=2062642096,1468867899&fm=21&gp=0.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_12456bytesu%3D2062642096%2C1468867899%26fm%3D21%26gp%3D0.jpg', '七牛', 1, '2015-12-15 21:36:57', 12456),
(136, 'music', 41, NULL, '告白予行練習', 'music_7241580bytes02 - 告白予行練習.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_7241580bytes02%20-%20%E5%91%8A%E7%99%BD%E4%BA%88%E8%A1%8C%E7%B7%B4%E7%BF%92.mp3', '七牛', 1, '2015-12-15 21:38:07', 7241580),
(137, 'cover', 41, NULL, '告白予行練習', 'cover_317352bytes4077460151407746015.png', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_317352bytes4077460151407746015.png', '七牛', 1, '2015-12-15 21:38:07', 317352),
(138, 'lrc', 41, NULL, '告白予行練習', 'lrc_1325bytes02 - 告白予行練習.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_1325bytes02%20-%20%E5%91%8A%E7%99%BD%E4%BA%88%E8%A1%8C%E7%B7%B4%E7%BF%92.lrc', '七牛', 1, '2015-12-15 21:38:07', 1325),
(139, 'background', 41, NULL, '告白予行練習', 'BG_15516bytesb9e7e8b2c0ab706a062ff56f8bd2231c.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/BG_15516bytesb9e7e8b2c0ab706a062ff56f8bd2231c.jpg', '七牛', 1, '2015-12-15 21:38:07', 15516),
(140, 'music', 42, NULL, 'あの頃～ジンジンバオヂュオニー～', 'music_13904961bytes01 - whiteeeen - あの頃～ジンジンバオヂュオニー～.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_13904961bytes01%20-%20whiteeeen%20-%20%E3%81%82%E3%81%AE%E9%A0%83%EF%BD%9E%E3%82%B8%E3%83%B3%E3%82%B8%E3%83%B3%E3%83%90%E3%82%AA%E3%83%82%E3%83%A5%E3%82%AA%E3%83%8B%E3%83%BC%EF%BD%9E.mp3', '七牛', 1, '2016-01-02 13:27:01', 13904961),
(141, 'cover', 42, NULL, 'あの頃～ジンジンバオヂュオニー～', 'cover_26418bytes2100213294.jpeg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_26418bytes2100213294.jpeg', '七牛', 1, '2016-01-02 13:27:01', 26418),
(142, 'lrc', 42, NULL, 'あの頃～ジンジンバオヂュオニー～', 'lrc_2139bytes01 - whiteeeen - あの頃～ジンジンバオヂュオニー～.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_2139bytes01%20-%20whiteeeen%20-%20%E3%81%82%E3%81%AE%E9%A0%83%EF%BD%9E%E3%82%B8%E3%83%B3%E3%82%B8%E3%83%B3%E3%83%90%E3%82%AA%E3%83%82%E3%83%A5%E3%82%AA%E3%83%8B%E3%83%BC%EF%BD%9E.lrc', '七牛', 1, '2016-01-02 13:27:01', 2139),
(143, 'music', 43, NULL, 'メランコリック', 'music_7550756bytes03 - 山根万理奈 - メランコリック.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_7550756bytes03%20-%20%E5%B1%B1%E6%A0%B9%E4%B8%87%E7%90%86%E5%A5%88%20-%20%E3%83%A1%E3%83%A9%E3%83%B3%E3%82%B3%E3%83%AA%E3%83%83%E3%82%AF.mp3', '七牛', 1, '2016-01-02 13:27:47', 7550756),
(144, 'cover', 43, NULL, 'メランコリック', 'cover_87033bytes446330.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_87033bytes446330.jpg', '七牛', 1, '2016-01-02 13:27:47', 87033),
(145, 'lrc', 43, NULL, 'メランコリック', 'lrc_2241bytes03 - 山根万理奈 - メランコリック.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_2241bytes03%20-%20%E5%B1%B1%E6%A0%B9%E4%B8%87%E7%90%86%E5%A5%88%20-%20%E3%83%A1%E3%83%A9%E3%83%B3%E3%82%B3%E3%83%AA%E3%83%83%E3%82%AF.lrc', '七牛', 1, '2016-01-02 13:27:47', 2241),
(146, 'music', 44, NULL, 'わんわんお、にゃんにゃんお', 'music_10303796bytes04 - 山根万理奈 - わんわんお、にゃんにゃんお.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_10303796bytes04%20-%20%E5%B1%B1%E6%A0%B9%E4%B8%87%E7%90%86%E5%A5%88%20-%20%E3%82%8F%E3%82%93%E3%82%8F%E3%82%93%E3%81%8A%E3%80%81%E3%81%AB%E3%82%83%E3%82%93%E3%81%AB%E3%82%83%E3%82%93%E3%81%8A.mp3', '七牛', 1, '2016-01-02 13:29:14', 10303796),
(147, 'cover', 44, NULL, 'わんわんお、にゃんにゃんお', 'cover_87033bytes446330.jpg', 'http://7xkut8.media1.z0.glb.clouddn.com/cover_87033bytes446330.jpg', '七牛', 1, '2016-01-02 13:29:14', 87033),
(148, 'lrc', 44, NULL, 'わんわんお、にゃんにゃんお', 'lrc_3049bytes04 - 山根万理奈 - わんわんお、にゃんにゃんお.lrc', 'http://7xkut8.media1.z0.glb.clouddn.com/lrc_3049bytes04%20-%20%E5%B1%B1%E6%A0%B9%E4%B8%87%E7%90%86%E5%A5%88%20-%20%E3%82%8F%E3%82%93%E3%82%8F%E3%82%93%E3%81%8A%E3%80%81%E3%81%AB%E3%82%83%E3%82%93%E3%81%AB%E3%82%83%E3%82%93%E3%81%8A.lrc', '七牛', 1, '2016-01-02 13:29:14', 3049),
(149, 'music', 45, NULL, '結露', 'music_11484562bytes結露-片平里菜.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_11484562bytes%E7%B5%90%E9%9C%B2-%E7%89%87%E5%B9%B3%E9%87%8C%E8%8F%9C.mp3', '七牛', 1, '2016-06-12 22:26:53', 11484562),
(150, 'music', 46, NULL, 'Happy Halloween', 'music_9884670bytes06.Happy Halloween-歌ってみた.mp3', 'http://7xkut8.media1.z0.glb.clouddn.com/music_9884670bytes06.Happy%20Halloween-%E6%AD%8C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F.mp3', '七牛', 1, '2016-06-12 22:28:00', 9884670);

-- --------------------------------------------------------

--
-- 表的结构 `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test` text,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `test`
--

INSERT INTO `test` (`id`, `test`) VALUES
(1, 'test'),
(2, 'test'),
(3, 'test'),
(4, 'test'),
(5, 'test'),
(6, 'test'),
(7, 'test');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `password` text,
  `nick` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `qqid` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `createdate` datetime NOT NULL,
  `avatar` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=33 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `user`, `password`, `nick`, `qqid`, `createdate`, `avatar`) VALUES
(1, 'admin', 'c999bef452c5c46ba31df53b1c18eee7', 'Rikiponzu*', 'FBF419CB2D41C171816C54B011EAA02D', '0000-00-00 00:00:00', 'http://q1.qlogo.cn/g?b=qq&nk=584031082&s=100'),
(9, NULL, NULL, '喵~', '7E72E8125555D671AC4FEE8B32B2F5F8', '0000-00-00 00:00:00', NULL),
(6, NULL, NULL, 'Lian星空', 'DABD0A5E84995C346AA6DC74EA8BFB9D', '0000-00-00 00:00:00', NULL),
(7, NULL, NULL, '黑子', 'A568167EA389EF456D905D43FA1C9463', '0000-00-00 00:00:00', NULL),
(8, NULL, NULL, '废材男·不死鸟', '93D1F2740E0BD7FCA2B2BF9F4ED6E014', '0000-00-00 00:00:00', NULL),
(19, 'll584031082', 'c999bef452c5c46ba31df53b1c18eee7', '豆沙包Riki', NULL, '0000-00-00 00:00:00', NULL),
(20, 'Remedios', '29bfdf319d8e7512dd1306f6ae46079e', '大泉五百', NULL, '0000-00-00 00:00:00', NULL),
(21, 'thyaiyao', '48524812c2309a2eacfb431b50a2376c', 'body', NULL, '0000-00-00 00:00:00', NULL),
(22, 'lileicsjm', '07b45476d5495d48be8d6b4db188f0df', '少年三十', NULL, '0000-00-00 00:00:00', NULL),
(23, NULL, NULL, '◇岁华尽摇落。', '3454425B62965E7182293A2F3FC68A11', '0000-00-00 00:00:00', NULL),
(24, NULL, NULL, '宇宙怪兽', 'FF8DDAF989467C2948F667F8FD50542A', '0000-00-00 00:00:00', NULL),
(25, NULL, NULL, '年刊少女猫耳くん', 'F6104949CCE050BFCDA4E0C73F67E651', '0000-00-00 00:00:00', NULL),
(26, 'll245520685', 'c999bef452c5c46ba31df53b1c18eee7', 'SR', NULL, '2015-12-06 23:07:07', NULL),
(27, 'administrator', 'c999bef452c5c46ba31df53b1c18eee7', 'Riki', NULL, '2015-12-06 23:10:46', NULL),
(28, 'Rikiponzu', 'c999bef452c5c46ba31df53b1c18eee7', 'Riki', NULL, '2015-12-06 23:12:31', NULL),
(30, NULL, NULL, 'Otakutachi -宅货捕捉计划', '765A7C74D61275DD826429224425FB5D', '2015-12-07 22:33:58', 'http://qzapp.qlogo.cn/qzapp/101167137/765A7C74D61275DD826429224425FB5D/100'),
(31, 'test', '098f6bcd4621d373cade4e832627b4f6', 'test', NULL, '2015-12-11 11:16:13', NULL),
(32, NULL, NULL, '緈諨@鏇風', 'D3EC3083ED6865F9E4685F0041D25371', '2015-12-11 22:54:14', 'http://qzapp.qlogo.cn/qzapp/101167137/D3EC3083ED6865F9E4685F0041D25371/100');

-- --------------------------------------------------------

--
-- 表的结构 `user_music_list`
--

CREATE TABLE IF NOT EXISTS `user_music_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `name` text COLLATE utf8_unicode_ci,
  `cname` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=105 ;

--
-- 转存表中的数据 `user_music_list`
--

INSERT INTO `user_music_list` (`id`, `uid`, `mid`, `name`, `cname`) VALUES
(67, 1, 64, NULL, NULL),
(57, 1, 65, NULL, NULL),
(3, 6, 62, NULL, NULL),
(4, 6, 63, NULL, NULL),
(61, 1, 62, NULL, NULL),
(54, 1, 57, NULL, NULL),
(53, 1, 56, NULL, NULL),
(8, 1, 55, NULL, NULL),
(68, 1, 54, NULL, NULL),
(10, 1, 53, NULL, NULL),
(63, 1, 52, NULL, NULL),
(12, 1, 51, NULL, NULL),
(13, 1, 50, NULL, NULL),
(14, 1, 49, NULL, NULL),
(15, 1, 48, NULL, NULL),
(16, 1, 47, NULL, NULL),
(17, 1, 46, NULL, NULL),
(18, 1, 45, NULL, NULL),
(19, 1, 43, NULL, NULL),
(20, 1, 38, NULL, NULL),
(21, 1, 37, NULL, NULL),
(22, 1, 33, NULL, NULL),
(23, 1, 32, NULL, NULL),
(24, 1, 30, NULL, NULL),
(25, 1, 29, NULL, NULL),
(26, 1, 28, NULL, NULL),
(27, 1, 27, NULL, NULL),
(28, 1, 26, NULL, NULL),
(29, 1, 25, NULL, NULL),
(66, 1, 24, NULL, NULL),
(31, 1, 23, NULL, NULL),
(32, 1, 22, NULL, NULL),
(33, 1, 21, NULL, NULL),
(34, 1, 20, NULL, NULL),
(35, 1, 19, NULL, NULL),
(36, 1, 18, NULL, NULL),
(37, 1, 17, NULL, NULL),
(38, 1, 16, NULL, NULL),
(39, 1, 15, NULL, NULL),
(40, 1, 14, NULL, NULL),
(41, 1, 10, NULL, NULL),
(42, 1, 9, NULL, NULL),
(43, 1, 8, NULL, NULL),
(44, 1, 5, NULL, NULL),
(45, 1, 4, NULL, NULL),
(46, 1, 3, NULL, NULL),
(47, 1, 2, NULL, NULL),
(48, 1, 1, NULL, NULL),
(69, 1, 66, NULL, NULL),
(70, 1, 67, NULL, NULL),
(71, 1, 68, NULL, NULL),
(72, 1, 69, NULL, NULL),
(73, 1, 70, NULL, NULL),
(75, 1, 71, NULL, NULL),
(76, 20, 72, NULL, NULL),
(77, 21, 65, NULL, NULL),
(78, 1, 73, NULL, NULL),
(79, 1, 74, NULL, NULL),
(80, 1, 75, NULL, NULL),
(81, 1, 76, NULL, NULL),
(82, 1, 77, NULL, NULL),
(83, 1, 78, NULL, NULL),
(85, 1, 79, NULL, NULL),
(86, 1, 80, NULL, NULL),
(90, 1, 81, NULL, NULL),
(89, 1, 82, NULL, NULL),
(91, 1, 83, NULL, NULL),
(92, 1, 84, NULL, NULL),
(93, 1, 85, NULL, NULL),
(94, 1, 86, NULL, NULL),
(95, 1, 87, NULL, NULL),
(96, 1, 88, NULL, NULL),
(97, 1, 89, NULL, NULL),
(98, 1, 90, NULL, NULL),
(99, 25, 91, NULL, NULL),
(104, 1, 92, NULL, NULL),
(101, 1, 93, NULL, NULL);

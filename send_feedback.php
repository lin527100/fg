<?php 
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ){
	$content = isset($_POST['content']) ? $_POST['content'] : '';
	$tel = isset($_POST['tel']) ? $_POST['tel'] : '';
	$qq = isset($_POST['qq']) ? $_POST['qq'] : '';
	if(!$content || !$tel || !$qq ){
		echo 3;
		exit;
	}
	$GLOBALS['cfg_soft_lang'] = 'utf8';
	// require mail class
	require_once './include/mail.class.php';
	
	##########################################
	$smtpserver = "smtp.163.com";//SMTP服务器
	$smtpserverport = 25;//SMTP服务器端口
	$smtpusermail = "lin527100@163.com";//SMTP服务器的用户邮箱
	$smtpemailto = "393711650@qq.com";//发送给谁
	$smtpuser = "lin527100@163.com";//SMTP服务器的用户帐号
	$smtppass = "763120.";//SMTP服务器的用户密码
	$webname = ' 广 州 市 宝 蓝 化 妆 品 有 限 公 司 '; //站点名称
	$mailsubject = "在线留言 - QQ:" . $qq . ", Tel: " . $tel ;//邮件主题
	$mailbody = "<h1>在线留言:</h1> <br />";//邮件内容
	$mailbody .=  "<h3> QQ:" . $qq . ", Tel: " . $tel ."</h3>";
	$mailbody .=  "<h3>内容</h3>";
	$mailbody .= "<p style='line-height:22px;font-size:13px;'>".$content."</p>";
	$mailtype = "HTML";//邮件格式（HTML/TXT）,TXT为文本邮件
	##########################################
	$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//这里面的一个true是表示使用身份验证,否则不使用身份验证.
	$smtp->debug = TRUE;//是否显示发送的调试信息
	$rs = $smtp->sendmail($smtpemailto, $webname,$smtpusermail, $mailsubject, $mailbody, $mailtype); 
	echo 1;
	exit;

}else{
	die;
}

<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.yandex.ru';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'user@example.com';                     //SMTP username
	$mail->Password   = 'migbrazwvidihzyq';                               //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465;                 
	

	//От кого письмо
	$mail->setFrom('zubrilin.max888@yandex.ru', 'Запрос на прайс лист'); // Указать нужный E-mail
	//Кому отправить
	$mail->addAddress('zubrilin.max888@yandex.ru'); // Указать нужный E-mail
	//Тема письма
	$mail->Subject = 'Mira Perfume "Запрос на прайс лист"';

	//Тело письма
	$body = '<h1>Запрос на прайс лист</h1>';

	if(trim(!empty($_POST['price_name']))){
		$body.= '<p><strong>Имя:</strong> ' . $_POST['price_name'] . '</p>';
	}	
	if(trim(!empty($_POST['price_email']))){
		$body.= '<p><strong>Email:</strong> ' . $_POST['price_email'] . '</p>';
	}	
	if(trim(!empty($_POST['price_tel']))){
		$body.= '<p><strong>Телефон:</strong> ' . $_POST['price_tel'] . '</p>';
	}	
	
	/*
	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);

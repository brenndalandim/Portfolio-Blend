<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

if(isset($_POST['enviar'])){

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'brenndallandim@gmail.com';                     //SMTP username
        $mail->Password   = 'rzwgzctftgflwkcp';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('brenndallandim@gmail.com', 'Mailer');
        $mail->addAddress('brenndalandim@icloud.com', 'Brennda');     //Add a recipient
        $mail->addReplyTo('brenndalandim@icloud.com', 'Brennda');

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Contato via formulário Portfolio';

        $body = "Nome: ". $_POST['nome']."<br>
        Email: ". $_POST['email']."<br>
        Mensagem: <br>". $_POST['mensagem'];


        $mail->Body    = $body;

        $mail->send();
        echo '<script>alert("Email enviado com sucesso!"); location.href="index.html";</script>';
    } catch (Exception $e) {
        echo `<script>alert("Ocorreu um erro, por favor tente novamente | erro: " + $mail->ErrorInfo}); location.href="index.html"; </script>`;
    }
} else {
    echo "Erro ao enviar e-mail, acesso não foi via formulário";
}
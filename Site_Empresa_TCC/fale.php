<?php
// Destinatário
$para = "kaiqueisraelcristina@gmail.com";

// Assunto do e-mail
$assunto = "Contato do através do site Alians Tech";

// Campos do formulário de contato
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

// Monta o corpo da mensagem com os campos
$corpo = "<html><body>";
$corpo .= "Nome: $nome"."\n";
$corpo .= "Email: $email"."\n"; 
$corpo .= "Mensagem: $mensagem"."\n";
$corpo .= "</body></html>";

// Cabeçalho do e-mail
$email_headers = implode("\n", array("From: $nome", "Reply-To: $email", "Subject: $assunto", "Return-Path: $email", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));

//Verifica se os campos estão preenchidos para enviar então o email
if (!empty($nome) && !empty($email) && !empty($mensagem)) {
    mail($para, $assunto, $corpo, $email_headers);
    $msg = "Sua mensagem foi enviada com sucesso.";
    echo "<script>alert('$msg');window.location.assign('index.html');</script>";
} else {
    $msg = "Erro ao enviar a mensagem.";
    echo "<script>alert('$msg');window.location.assign('index.html');</script>";
}

?>